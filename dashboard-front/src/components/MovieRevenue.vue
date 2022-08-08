<template>
<h1 class="top" >THE {{ selected }}'S MOVIE BIGGEST REVENUE</h1>
<select v-model="selected"  v-on:change="getMovies(selected)">
  <option disabled value="">Choose</option>
  <option>GLOBAL</option>
  <option>ACTION</option>
  <option>HORROR</option>
  <option>FAMILY</option>
  <option>FANTAISY</option>
</select>
<div class="container">
<div class="card mb-3" style="max-width: 800px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img v-bind:src="`https://image.tmdb.org/t/p/w500${this.movie.poster_path}`" class="card-img" alt="movie poster">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{this.movie.original_title}}</h5>
            <p class="card-text">{{this.movie.release_date }}</p>
            <p class="card-text">{{this.movie.overview}}</p>
            <p class="pop">Vote average: {{this.movie.vote_average }}/10</p>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
    data(){
        return {
             movie: [],
             selected: "GLOBAL"
        }
    },

    mounted(){

    if(localStorage.getItem('money') == null)
    {
        this.selected = "GLOBAL"
    }

    else{
        this.selected = localStorage.getItem('money')
    }

    const url = `http://localhost:3030/money${this.selected}`

    fetch(url)
    .then((response) => response.json())
    .then ((data) => this.movie = data.results[0])      
    
    },

    methods: {

      getMovies(selected) {

        localStorage.setItem('money', selected)
        const url = `http://localhost:3030/money${selected}`

    fetch(url)
    .then((response) => response.json())
    .then ((data) => this.movie = data.results[0])      

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