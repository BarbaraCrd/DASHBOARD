<template>
    <div class="container">
    <div class="card" style="width: 18rem;">
    <h5 class="card-title">{{this.joke.value}} </h5>
    <img class="card-img-top" src="https://www.zupimages.net/up/22/18/qw6f.png" alt="Card image cap" @click="getJokes()">
    <p class="card-footer">Click chuck</p>
    
</div>
</div>
</template>

<script>
export default {
    data(){
        return {
            joke:""
        }
        
    },

    mounted()
    {
        const url = "http://localhost:3080"

    fetch(url)
    .then((response) => response.json())
    .then ((data) => this.joke = data)   


    this.getJokes()
    this.timer=setInterval(this.getJokes, 20000); 
    },

    methods: {

        getJokes(){

        const url = "http://localhost:3080"

        fetch(url)
        .then((response) => response.json())
        .then ((data) => this.joke = data)

        }

    }
    
}
</script>

<style lang="scss" scoped>


.card{
    background-color: #383743;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
	background-position: bottom center;
	background-repeat: no-repeat;
	background-size: 200%;
    border-color: rgba(238, 237, 237, 0.22);
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: white;
}

img{
    width: 50%;
      
}

.card-title{
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 3%;
    text-align: center;
}

</style>