<template>
<h1 class="top" >TOP3 POPULAR {{ selected }}'S MOVIE</h1>
<select v-model="selected"  v-on:change="getMovies(selected)">
  <option disabled value="">Choose</option>
  <option>ALL</option>
  <option>ACTION</option>
  <option>HORROR</option>
  <option>FAMILY</option>
  <option>FANTAISY</option>
</select>
<div class="container">
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" v-bind:src="`https://image.tmdb.org/t/p/w500${this.movie.poster_path}`" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{this.movie.original_title }} </h5>
     <p class="card-text">{{this.movie.release_date }}</p>
    <p class="card-text">{{this.movie.overview}}</p>
    <p class="pop">Vote average: {{this.movie.vote_average }}/10</p>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img class="card-img-top" v-bind:src="`https://image.tmdb.org/t/p/w500${this.movie1.poster_path}`" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{this.movie1.original_title}}</h5>
    <p class="card-text">{{this.movie1.release_date }}</p>
    <p class="card-text">{{this.movie1.overview}}.</p>
    <p class="pop">Vote average: {{this.movie1.vote_average}}/10</p>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img class="card-img-top" v-bind:src="`https://image.tmdb.org/t/p/w500${this.movie2.poster_path}`" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{this.movie2.original_title}}</h5>
    <p class="card-text">{{this.movie2.release_date}}.</p>
    <p class="card-text">{{this.movie2.overview}}.</p>
    <p class="pop">Vote average: {{this.movie2.vote_average}}/10</p>
  </div>
</div>
</div>

</template>

<script>
export default {
    data(){
        return {
            movie: [],
            movie1: [],
            movie2: [],
            selected:"ALL"
        }
    },

    mounted(){

    if(localStorage.getItem('topMovie') == null)
    {
        this.selected = "ALL"
    }

    else{
        this.selected = localStorage.getItem('topMovie')
    }

    const url = `http://localhost:3030/${this.selected}`

    fetch(url)
    .then((response) => response.json())
    .then ((data) => this.movie = data.results[0])      

    fetch(url)
    .then((response) => response.json())
    .then ((data) => this.movie1 = data.results[1])   

    fetch(url)
    .then((response) => response.json())
    .then ((data) => this.movie2 = data.results[2])   
    

    },

    methods: {

      getMovies(selected) {

        localStorage.setItem('topMovie', selected)
        const url = `http://localhost:3030/${selected}`

    fetch(url)
    .then((response) => response.json())
    .then ((data) => this.movie = data.results[0])      

    fetch(url)
    .then((response) => response.json())
    .then ((data) => this.movie1 = data.results[1])   

    fetch(url)
    .then((response) => response.json())
    .then ((data) => this.movie2 = data.results[2])   

      }
      }
      

    }






</script>

<style lang="scss" scoped>


.container{
    display: flex;
}

.card{
    margin-right: 5%;
    background-color: #383743;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 200%;
    border-color: rgba(238, 237, 237, 0.22);
    color: white;
}

.top{
    display: flex;
    justify-content: center;
    color: #FCEBA7;
}

</style>