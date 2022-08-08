const express = require("express")
const request = require("request")
const cors = require("cors")



const app = express()
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    let city = req.query.city;
    const request = require('request');
request(`https://api.chucknorris.io/jokes/random`, 
    function (error, response, body) {       
    if(response.statusCode === 200)
    {
        res.send(body)
        console.log(body)
    }
    });
    })

    
    app.listen(3080, () => console.log("Server started"))