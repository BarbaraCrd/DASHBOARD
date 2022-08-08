const express = require("express")
const request = require("request")
const cors = require("cors")



const app = express()
app.use(cors({
    origin: '*'
}));

app.get("/all", (req, res) => {
    let city = req.query.city;
    const request = require('request');
request(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fb3c5270fa9b233d3a67ce595885084b`, 
    function (error, response, body) {       
    if(response.statusCode === 200)
    {
        res.send(body)
        console.log(body)
    }
    });
    })

    app.get("/family", (req, res) => {
    request(`https://api.themoviedb.org/3/discover/movie?with_genres=10751&sort_by=popularity.desc&api_key=fb3c5270fa9b233d3a67ce595885084b&language=en-US`, 
        function (error, response, body) {       
        if(response.statusCode === 200)
        {
            res.send(body)
            console.log(body)
        }
        });
        })

    app.get("/action", (req, res) => {
    
        request(`https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=popularity.desc&api_key=fb3c5270fa9b233d3a67ce595885084b&language=en-US`, 
            function (error, response, body) {       
            if(response.statusCode === 200)
            {
                res.send(body)
                console.log(body)
            }
            });
            })    
            
    app.get("/fantaisy", (req, res) => {
    
        request(`https://api.themoviedb.org/3/discover/movie?with_genres=14&sort_by=popularity.desc&api_key=fb3c5270fa9b233d3a67ce595885084b&language=en-US`, 
            function (error, response, body) {       
                if(response.statusCode === 200)
                {
                    res.send(body)
                    console.log(body)
                }
            });
            
    })     
    app.get("/horror", (req, res) => {
    
        request(`https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=popularity.desc&api_key=fb3c5270fa9b233d3a67ce595885084b&language=en-US`, 
            function (error, response, body) {       
                if(response.statusCode === 200)
                {
                    res.send(body)
                    console.log(body)
                }
            });
            
    }) 

    app.get("/moneyhorror", (req, res) => {
    
        request(`https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=revenue.desc&api_key=fb3c5270fa9b233d3a67ce595885084b&language=en-US`, 
            function (error, response, body) {       
                if(response.statusCode === 200)
                {
                    res.send(body)
                    console.log(body)
                }
            });
            
    }) 

    app.get("/moneyglobal", (req, res) => {
    
        request(`https://api.themoviedb.org/3/discover/movie?sort_by=revenue.desc&api_key=fb3c5270fa9b233d3a67ce595885084b&language=en-US`, 
            function (error, response, body) {       
                if(response.statusCode === 200)
                {
                    res.send(body)
                    console.log(body)
                }
            });
            
    }) 

    app.get("/moneyfamily", (req, res) => {
        request(`https://api.themoviedb.org/3/discover/movie?with_genres=10751&sort_by=revenue.desc&api_key=fb3c5270fa9b233d3a67ce595885084b&language=en-US`, 
            function (error, response, body) {       
            if(response.statusCode === 200)
            {
                res.send(body)
                console.log(body)
            }
            });
            })
    
        app.get("/moneyaction", (req, res) => {
        
            request(`https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=revenue.desc&api_key=fb3c5270fa9b233d3a67ce595885084b&language=en-US`, 
                function (error, response, body) {       
                if(response.statusCode === 200)
                {
                    res.send(body)
                    console.log(body)
                }
                });
                })    
                
        app.get("/moneyfantaisy", (req, res) => {
        
            request(`https://api.themoviedb.org/3/discover/movie?with_genres=14&sort_by=revenue.desc&api_key=fb3c5270fa9b233d3a67ce595885084b&language=en-US`, 
                function (error, response, body) {       
                    if(response.statusCode === 200)
                    {
                        res.send(body)
                        console.log(body)
                    }
                });
                
        })  
    
    app.listen(3030, () => console.log("Server started"))