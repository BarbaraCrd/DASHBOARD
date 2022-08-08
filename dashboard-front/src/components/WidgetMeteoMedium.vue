<template>

                        <div class="card">
                            <span class="icon"><img class="img-fluid" v-bind:src="'http://openweathermap.org/img/w/' + this.weather.icon + '.png' "/></span>
                            <div class="title"><input type="text" class="city" v-model="city" placeholder="city"><button class="btn" type="submit" @click="getMeteo(url)">CHANGE CITY </button></div>
                            <div class="temp">{{this.meteo.temp}}<sup>&deg;c</sup></div>
                                <div class="row">
                                    <div class="col-4">
                                        <div class="header">Weather</div>
                                        <div class="value">{{this.weather.description}}</div>
                                    </div>
                                    <div class="col-4">
                                        <div class="header">Humidity</div>
                                        <div class="value">{{this.meteo.humidity}}%</div>
                                    </div>
                                    <div class="col-4">
                                        <div class="header">Wind speed</div>
                                        <div class="value">{{this.wind.speed}} km/h</div>
                                    </div>                                                                       
                                </div>
                                
                        </div>
</template>

<script>
export default {
    name: "WidgetMeteoMedium",
        data() {
      return{
        temp: "",
        humidity: "",
        weather: "",
        wind: "",
        icon: "",
        url: "",
        meteo:""
      }
    },

    mounted() {
      
    if(localStorage.getItem('cityMedium') == null)
    {
        this.city = "Paris"
    }

    else{
        this.city = localStorage.getItem('cityMedium')
    }

    
    const url = `http://localhost:3000?city=${this.city}`
    fetch(url)
    .then((response) => response.json())
    .then ((data) => this.meteo = data.main)  

    fetch(url)
    .then((response) => response.json())
    .then ((data) => this.weather = data.weather[0])
    
    fetch(url)
    .then((response) => response.json())
    .then ((data) => this.wind = data.wind)  

    this.timer=setInterval(this.getMeteo, 20000); 
    },

    methods: {
        
        getMeteo(url)
        {
            url = `http://localhost:3000?city=${this.city}`
            localStorage.setItem('cityMedium', this.city)
            fetch(url)
            .then((response) => response.json())
            .then ((data) => this.meteo = data.main)  

            fetch(url)
            .then((response) => response.json())
            .then ((data) => this.weather = data.weather[0])
            
            fetch(url)
            .then((response) => response.json())
            .then ((data) => this.wind = data.wind)
                }
            }


 }
        
</script>

<style lang="scss" scoped>

.weather
{
    width: 77%;
}
@media(max-width:767px){
    .weather
    {
        width: 100%;
    }   
}
.card{
    padding: 1rem;
    margin: 1.5rem 4vw;
    border-radius: 1rem;
    width: 80%;
    height: 250px;
    background-color: #383743;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
	background-position: bottom center;
	background-repeat: no-repeat;
	background-size: 100%;
    border-color: rgba(238, 237, 237, 0.22);
    text-align: center;
}
@media(max-width:768px){
    .card{
        margin: 1.5rem;
    }
}
.title{
    justify-content: center;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    color: white;
    font-weight: 700;
}
.title p{
    margin-bottom: 0.2rem;
    font-size: 1.2rem;
    
}
.temp{
    font-size: 2.6rem;
    margin-bottom: 1rem;
    color: #ffeba7
}
.header{
    color: white;
    font-weight: 700;
    
}
.col-4{
    padding: 0 0.2rem;
}
.icon{
    align-self: flex-end;
    margin-right: -1.5rem;
    margin-top: -2rem;
    z-index: 999;
}
.icon img{
    width: 5rem;
}

.value{
    color: #ffeba7;
    font-weight: 600;
    margin-bottom: 20%;
}

.city{
    background-color: transparent;
    border: none;
    justify-content: center;
    display: flex;
    width: 80%;
    margin-left: 30%;
    font-size: 20px;
    color: white;
}

.btn{
    display: flex;
    position: absolute;
    top: 0;
    left: -100px;
}
</style>