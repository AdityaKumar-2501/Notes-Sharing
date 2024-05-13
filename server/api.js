const express = require('express');
const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const { promisify } = require('util');
var cors = require('cors')

// Load environment variables
require('dotenv').config();

// OAuth2client setup
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Google Drive API setup
const drive = google.drive({ version: 'v3', auth: oauth2Client });

const app = express();

app.use(cors())

const port = 3000;

const downloadFolder = './downloads'; // Hardcoded download folder path

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

// Middleware to handle JSON parsing
app.use(express.json());

// Endpoint to download a file by ID
app.get('/download/:fileId', async (req, res) => {
  const fileId = req.params.fileId;
  try {
    const { data } = await drive.files.get({ fileId, fields: 'name' });
    const { name } = data;

    const destinationPath = path.join(downloadFolder, name);

    console.log(`Downloading file: ${name}`);
    
    const response = await drive.files.get({ fileId, alt: 'media' }, { responseType: 'stream' });
    const dest = fs.createWriteStream(destinationPath);
    
    response.data
      .on('end', () => {
        console.log(`File ${name} downloaded to ${destinationPath}`);
        res.download(destinationPath); // Send the downloaded file to the client
      })
      .on('error', err => {
        console.error('Error downloading file:', err);
        res.status(500).send('Error downloading file');
      })
      .pipe(dest);
  } catch (error) {
    console.error('Error downloading file:', error.message);
    res.status(500).send('Error downloading file');
  }
});

// Endpoint to search for files by ID
app.get('/search/:fileId', async (req, res) => {
    const fileId = req.params.fileId;
    try {
      const { data } = await drive.files.get({ fileId, fields: 'name, mimeType' });
  
      if (data.mimeType === 'application/vnd.google-apps.folder') {
        // If the ID corresponds to a folder, list all files in that folder
        const folderId = fileId;
        const filesList = await drive.files.list({
          q: `'${folderId}' in parents and trashed=false`,
          fields: 'files(id, name, mimeType)',
        });
        res.json(filesList.data.files);
      } else {
        // If the ID corresponds to a file, return the file data
        res.json(data);
      }
    } catch (error) {
      console.error('Error searching for file:', error.message);
      res.status(500).send('Error searching for file');
    }
  });
  

// Endpoint to list all files
app.get('/list', async (req, res) => {
  try {
    const { data } = await drive.files.list({ fields: 'files(id, name)' });
    res.json(data.files);
  } catch (error) {
    console.error('Error listing files:', error.message);
    res.status(500).send('Error listing files');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
