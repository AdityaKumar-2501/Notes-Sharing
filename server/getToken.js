const { google } = require("googleapis");
const readline = require("readline");
const fs = require("fs");

// Load environment variables
require("dotenv").config();

// OAuth2 client setup
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const SCOPES = ["https://www.googleapis.com/auth/drive"];

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Generate consent URL
const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: SCOPES,
});

console.log("Authorize this app by visiting this URL:", authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the code from the authorization page:", async (code) => {
  rl.close();

  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log("Refresh token:", tokens.refresh_token);
    fs.writeFileSync(
      "refresh_token.json",
      JSON.stringify(tokens.refresh_token)
    );
  } catch (error) {
    console.error("Error retrieving refresh token:", error);
  }
});
