<template>

                        <div class="card">
                            <span class="icon"><img class="img-fluid" v-bind:src="'http://openweathermap.org/img/w/' + this.weather.icon + '.png' "/></span>
                            <div class="title"><input type="text" class="city" v-model="city" placeholder="city"><button class="btn" type="submit" @click="getMeteo(url)">CHANGE CITY </button></div>
                            <div class="temp">{{this.meteo.temp}}<sup>&deg;c</sup></div>
                                
                        </div>
</template>

<script>
export default {
    name: "WidgetMeteoSmall",
        data() {
      return{
        temp: "",
        weather: "",
        icon: "",
        meteo:""
      }
    },

    mounted() {
    
    if(localStorage.getItem('citySmall') == null)
    {
        this.city = "Paris"
    }

    else{
        this.city = localStorage.getItem('citySmall')
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
            localStorage.setItem('citySmall', this.city)
            url = `http://localhost:3000?city=${this.city}`
           
            
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
    height: 100px;
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

.temp{
    font-size: 2rem;
    color: #ffeba7;
    margin-left: 11%;
}
.header{
    color: white;
    font-weight: 700;
    
}

.icon{
    align-self: flex-end;
    
    margin-top: -1rem;
    z-index: 999;
}
.icon img{
    width: 3rem;
}

.city{
    background-color: transparent;
    border: none;
    justify-content: center;
    display: flex;
    width: 80%;
    margin-left: 30%;
    color: white;
}

.btn{
    display: flex;
    position: absolute;
    top: 0;
    font-size: 10px;
    left: -60px
}

</style>