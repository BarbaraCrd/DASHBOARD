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
request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f4666ddbf896aad26a2c64fbdaa03d54&units=metric`, 
    function (error, response, body) {       
    if(response.statusCode === 200)
    {
        res.send(body)
        console.log(body)
    }
    });
    })
    
    app.listen(3000, () => console.log("Server started"))