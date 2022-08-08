const express = require ("express");
const { google } = require("googleapis");
const request = require("request");
const cors = require("cors");
const urlParse = require("url-parse");
const app = express();
const port = 3050;
const queryParse = require("query-string");
const bodyParser = require("body-parser");
const axios = require("axios");

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//define('GOOGLE_ID', '884186753711-nqrvrf1i786n5m5dkb9k7dokgoqkq6ms.apps.googleusercontent.com');
//define('GOOGLE_SECRET','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');

app.get("/getURL",(req,res) => {
    const oauth2Client = new google.auth.OAuth2(
        "884186753711-nqrvrf1i786n5m5dkb9k7dokgoqkq6ms.apps.googleusercontent.com",
        "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",
        "http://localhost:3050/steps"
    );

    const scopes = ["https://www.googleapis.com/auth/fitness.activity.read profile email openid"];

    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: scopes,
        state: JSON.stringify({
            callbackUrl: req.body.callbackUrl,
            userID: req.body.userid
        })
    })

    request(url, (err, response, body) => {    
        console.log("error", err);
        console.log("Statuscode: ", response && response.statusCode);
        res.send({url});

        });
        


});

app.get("/steps", async (req, res) => {
    const queryURL = new urlParse(req.url);
    const code = queryParse.parse(queryURL.query).code;
    const oauth2Client = new google.auth.OAuth2(
        "884186753711-nqrvrf1i786n5m5dkb9k7dokgoqkq6ms.apps.googleusercontent.com",
        "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",
        "http://localhost:3050/steps"
    );
    
    const tokens = await oauth2Client.getToken(code);
    console.log(tokens.tokens.access_token);
    res.send(tokens.tokens.access_token);

    let stepArray = [];

    try{

        const result = await axios({
            method: "POST",
            headers: {
                authorization: "Bearer " + tokens.tokens.access_token
            },
            "Content-Type": "application/json",
            url: 'https://www.googleapis.com/fitness/v1/users/me/dataSources',
            data: {
                aggregateBy: [
                {
                    dataTypeName: "com.google.step_count.delta",
                    dataSourceId: "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
                },
            ],
            bucketByTime: { durationMillis: 86400000 },
            startTimeMillis: 1585785599000,
            endTimeMillis: 1585958399000,
        }
    });
    console.log(result)

    } catch(e) {
        console.log(e)
    }


    
});

app.listen(port, () => console.log("GOOGLE FIT"))