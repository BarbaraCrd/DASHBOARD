const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
var base64 = require('base-64');
const { MailParser } = require('mailparser');
const cheerio = require('cheerio')
const express = require("express")
const request = require("request")
const cors = require("cors");
const { html } = require('cheerio/lib/static');



const app = express()
app.use(cors({
    origin: '*'
}));


app.get("/", (req, res) => { const SCOPES = ['https://www.googleapis.com/auth/gmail.modify'];

const TOKEN_PATH = 'token.json';


fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);

  authorize(JSON.parse(content), listLabels);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const client_secret = "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";
  const client_id = "142556607251-q39b3d1n7f7sn5plu3tajqc7peabmcm2.apps.googleusercontent.com";
  const redirect_uris = "http://localhost:8080/";
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listLabels(auth) {
  const gmail = google.gmail({version: 'v1', auth});
  gmail.users.labels.list({
    userId: 'me',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const labels = res.data.labels;
    if (labels.length) {
      console.log('Labels:');
      labels.forEach((label) => {
        console.log(`- ${label.name} : ${label.id}`);
      });
    } else {
      console.log('No labels found.');
    }
  });
  function listMessages(auth, query){
    query = 'theo.hortensys@gmail.com';
    return new Promise((resolve, reject) => {    
      const gmail = google.gmail({version: 'v1', auth});
      gmail.users.messages.list(      
        {        
          userId: 'me',  
          q:query,      
          maxResults:5     
        },            (err, res) => {        
          if (err) {                    reject(err);          
            return;        
          }        
          if (!res.data.messages) {                    resolve([]);          
            return;        
          }                resolve(res.data);  
  
                           getMail(res.data.messages[0].id, auth);
        }    
      );  
    })
  }
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Gmail API.
    authorize(JSON.parse(content), listMessages);
  
  });
  function getMail(msgId, auth){
    console.log(msgId)
    const gmail = google.gmail({version: 'v1', auth});
    //This api call will fetch the mailbody.
    gmail.users.messages.get({
        userId:'me',
        id: msgId ,
    }, (err, resp) => {
      console.log(resp.data.labelIds.INBOX)
        if(!err){
          console.log("no error")
            var body = resp.data.payload.parts[0].body.data;
            var htmlBody =base64.decode(body.replace(/-/g, '+').replace(/_/g, '/'));
            console.log(htmlBody)
            res.send(htmlBody)
            var mailparser = new MailParser();
  
            mailparser.on("end", (err,res) => {
                console.log("res",res);
            })
  
            mailparser.on('data', (dat) => {
                if(dat.type === 'text'){
                    const $ = cheerio.load(dat.textAsHtml);
                    var links = [];
                    var modLinks = [];
                    $('a').each(function(i) {
                        links[i] = $(this).attr('href');
                    });
  
                    //Regular Expression to filter out an array of urls.
                    var pat = /------[0-9]-[0-9][0-9]/;
  
                    //A new array modLinks is created which stores the urls.
                    modLinks = links.filter(li => {
                        if(li.match(pat) !== null){
                            return true;
                        }
                        else{
                            return false;
                        }
                    });
                    console.log(modLinks);
  
                    //This function is called to open all links in the array.
  
                }
            })
  
            mailparser.write(htmlBody);
            mailparser.end();
  
        }
    });
  }

}})


app.listen(3060, () => console.log("Server google started"))
