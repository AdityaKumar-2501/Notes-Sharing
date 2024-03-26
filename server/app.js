// const { google } = require('googleapis');

// require('dotenv').config();

// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;
// const REDIRECT_URI = process.env.REDIRECT_URI;
// const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

// const oauth2client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);

// oauth2client.setCredentials({refresh_token: REFRESH_TOKEN});

const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

// Load environment variables
require('dotenv').config();

// OAuth2 client setup
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Google Drive API setup
const drive = google.drive({ version: 'v3', auth: oauth2Client });

const downloadFolder = './downloads'; // Hardcoded download folder path

async function downloadFile(fileId) {
  try {
    // Fetch file metadata
    const { data } = await drive.files.get({ fileId, fields: 'name, mimeType', });
    const { name, mimeType } = data;

    const destinationPath = path.join(downloadFolder, name);

    console.log(`Downloading file: ${name}`);
    
    // Download the file
    const response = await drive.files.get({ fileId, alt: 'media' }, { responseType: 'stream' });
    const dest = fs.createWriteStream(destinationPath);
    
    response.data
      .on('end', () => {
        console.log(`File ${name} downloaded to ${destinationPath}`);
      })
      .on('error', err => {
        console.error('Error downloading file:', err);
      })
      .pipe(dest);
  } catch (error) {
    console.error('Error downloading file:', error);
  }
}

async function downloadFileByName(fileName) {
    try {
      // Search for the file by name
      const response = await drive.files.list({
        q: `name='${fileName}' and trashed=false`,
        fields: 'files(id, name)',
      });
  
      const files = response.data.files;
      if (files.length === 0) {
        console.warn(`File '${fileName}' not found.`);
        return;
      }
  
      const fileId = files[0].id;
      const destinationPath = path.join(downloadFolder, fileName);
      await downloadFile(fileId, destinationPath);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  }
  

// Example usage:
const fileId = '1Dhnyx-PAHQQbKyT8uCGRhG5XM-HrJhJJ'; // Replace with the ID of the file you want to download
const filename = 'cg4'

// downloadFile(fileId);
downloadFileByName(filename)