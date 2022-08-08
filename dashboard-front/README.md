# BARFLATO
![forthebadge](https://www.zupimages.net/up/22/18/mb02.png)
![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)

BaTo is an app where you can add some widget like netvibes depending of the user preferences.

Created by [@BarbaraCrd](https://github.com/BarbaraCrd) and [@TheoBoulanger](https://github.com/TheoBoulanger1) from Coding Academy by Epitech.


## How it's working

* Create an account by the "/login" way then register and login
* Enjoy and test all the features
* Launch auth back with port 8000 and todo with port 8001
* Launch every express back

## How to register (back->Auth folder)
You can access to register/login by "/login" and swap between thoses by clicking this button
![forthebadge](https://www.zupimages.net/up/22/18/0cf1.png)

## Add a widget
Open sidebar then click on widget
![forthebadge](https://www.zupimages.net/up/22/18/3ojp.png)

Then choose the widget you want (for exemple here big meteo)
![forthebadge](https://www.zupimages.net/up/22/18/5za6.png)

* All widget refresh every 20s
* Then go back to home and see/personalize your widget




### How thoses widget works

#### Meteo use [openweather API](https://openweathermap.org/api) and the API is in services/meteo folder developped in Express/NodeJS
```bash
nodemon server.js
```

* You can change the city that you want to get the meteo by changing the input type on the city and click change city
![forthebadge](https://www.zupimages.net/up/22/18/x2cb.png)

#### Chuck norris jokes use [chuckapi](https://api.chucknorris.io/) and the API is in services/chuck folder developped in Express/NodeJS
```bash
nodemon server.js
```
* You can get a new joke by clicking on the Chuck's head but be carefull he's not liking it
![forthebadge](https://www.zupimages.net/up/22/18/5goz.png)

#### TOP 3 POPULAR MOVIE AND REVENU use [moviedb api](https://www.themoviedb.org/) and the API is in services/movies folder developped in Express/NodeJS
```bash
nodemon server.js
```

* You can change movie's genre by clicking on the select input
![forthebadge](https://www.zupimages.net/up/22/18/fqgv.png)

#### GOOGLE MAIL use [googlemailAPI](https://www.zupimages.net/up/22/18/fqgv.png) and the API is in services/mail3/mail folder developped in Express/NodeJS
```bash
node .
```

* You have to add the widget normally then click on link you account button
![forthebadge](https://www.zupimages.net/up/22/18/yf70.png)

* Then on home you can see your last mail displayed
![forthebadge](https://www.zupimages.net/up/22/18/gnv9.png)

### TO DO LIST use our proper API in services/todo folder developped in Laravel
```bash
php artisan serve --port=8001
```

* You can add an item by clicking the + button and edit/stroke/delete item as followed
![forthebadge](https://www.zupimages.net/up/22/18/owpp.png)
![forthebadge](https://www.zupimages.net/up/22/18/zcz9.png)


## Made with

* [Visual Studio Code](https://code.visualstudio.com/) - IDE
* [Laravel](https://laravel.com/) - The PHP Framework
* [VueJS](https://vuejs.org/) - The Progressive
* [Express](https://expressjs.com/fr/)
JavaScript Framework
