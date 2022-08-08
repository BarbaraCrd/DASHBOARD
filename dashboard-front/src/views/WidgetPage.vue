<template>
<div class="all">
<aside><SideBar/></aside>
  <div class="widgetlist">
      <div class="meteoS">
          SMALL METEO
          <img class="smallmeteo" src="../../public/images/MeteoS.png" alt="small meteo">
          <button class="add" @click="addMeteoS()">ADD THIS WIDGET</button>
      </div>
      <div class="meteoM">
          MEDIUM METEO
          <img class="medmeteo" src="../../public/images/MeteoM.png" alt="medium meteo">
          <button class="add" @click="addMeteoM()">ADD THIS WIDGET</button>
      </div>
      <div class="meteoB">
          BIG METEO
          <img class="bigmeteo" src="../../public/images/MeteoB.png" alt="big meteo">
          <button class="add" @click="addMeteoB()">ADD THIS WIDGET</button>
      </div>
      <div class="chuck">
          CHUCK NORRIS
          <img class="chuckW" src="../../public/images/chuck.png" alt="big meteo">
          <button class="add" @click="addChuck()">ADD THIS WIDGET</button>
      </div>
      <div class="movieR">
          TOP REVENUE MOVIE
          <img class="movieRW" src="../../public/images/MovieR.png" alt="top revenue movie">
          <button class="add" @click="addMovieR()">ADD THIS WIDGET</button>
      </div>
      <div class="movie3">
          TOP 3 MOVIES
          <img class="movie3W" src="../../public/images/Movie3.png" alt="top 3 movies">
          <button class="add" @click="addMovie3()">ADD THIS WIDGET</button>
      </div>
        <div class="todo">
          TO DO LIST
          <img class="todolist" src="../../public/images/todo.png" alt="todolist">
          <button class="add" @click="addTodo()">ADD THIS WIDGET</button>
      </div>
        <div class="google">
            MAIL GOOGLE
            <img class="todolist" src="https://www.zupimages.net/up/22/18/h8mv.png" alt="todolist">
            <button class="addgoogle" @click="addGoogle()">ADD THIS WIDGET</button>
            <a href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.readonly&response_type=code&client_id=142556607251-q39b3d1n7f7sn5plu3tajqc7peabmcm2.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F">LINK YOUR ACCOUNT</a> 
        </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import SideBar from '@/components/SideBar.vue'
export default {
    name: "WidgetPage",
    components: { SideBar },
    
    created(){

      this.getLogin()
    
    },

    mounted(){
        if(this.login == null)
     {
         this.$router.push('/login')
     }

    },
    methods: {
        addMeteoS() {
            axios.post('http://localhost:8000/api/widget', {
                user_id: localStorage.getItem('userId'),
                widget_type: "meteos"
            }).then( (response) => {
                console.log(response)
                alert("Widget Meteo Small added successfuly !")
                //this.location.reload()
            })
        },

        addMeteoM() {
            axios.post('http://localhost:8000/api/widget', {
                user_id: localStorage.getItem('userId'),
                widget_type: "meteom"
            }).then( (response) => {
                console.log(response)
                alert("Widget Meteo Medium added successfuly !")
                //this.location.reload()
            })

        },

            getLogin(){
        this.login = localStorage.getItem("userId")
        },

        addMeteoB() {
            axios.post('http://localhost:8000/api/widget', {
                user_id: localStorage.getItem('userId'),
                widget_type: "meteob"
            }).then( (response) => {
                console.log(response)
                alert("Widget Meteo Big added successfuly !")
                //this.location.reload()
            })
        },

        addChuck() {
            axios.post('http://localhost:8000/api/widget', {
                user_id: localStorage.getItem('userId'),
                widget_type: "chuckn"
            }).then( (response) => {
                console.log(response)
                alert("Widget Chuck Norris added successfuly !")
                //this.location.reload()
            })
        },

        addMovieR() {
            axios.post('http://localhost:8000/api/widget', {
                user_id: localStorage.getItem('userId'),
                widget_type: "movier"
            }).then( (response) => {
                console.log(response)
                alert("Widget Top Revenue Movie added successfuly !")
                //this.location.reload()
            })
        },

        addMovie3() {
            axios.post('http://localhost:8000/api/widget', {
                user_id: localStorage.getItem('userId'),
                widget_type: "movie3"
            }).then( (response) => {
                console.log(response)
                alert("Widget Top 3 Movies added successfuly !")
                //this.location.reload()
            })
        },
        
        addTodo() {
            axios.post('http://localhost:8000/api/widget', {
                user_id: localStorage.getItem('userId'),
                widget_type: "todo"
            }).then( (response) => {
                console.log(response)
                alert("Widget To Do List added successfuly !")
                //this.location.reload()
            })
        },

        addGoogle() {
            axios.post('http://localhost:8000/api/widget', {
                user_id: localStorage.getItem('userId'),
                widget_type: "google"
            }).then( (response) => {
                console.log(response)
                alert("Widget Mail Google added successfuly !")
                //this.location.reload()
            })
        }
    }
}

</script>

<style scoped>

.all {
    background-color: #1F2029;

}

.widgetlist {
    display: flex;
    margin-left: 18%;
    justify-content: flex-start;
    flex-wrap: wrap;

}

.meteoS {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #e6e6e6;
    font-size: 1.1em;
    padding: 25px;
    margin: 20px;
    padding-top: 5px;
    border-radius: 10px;
    background-color: #2a2b38;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
}

.meteoM {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #e6e6e6;
    font-size: 1.1em;
    padding: 25px;
    margin: 20px;
    padding-top: 5px;
    border-radius: 10px;
    background-color: #2a2b38;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
}

.meteoB {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #e6e6e6;
    font-size: 1.1em;
    padding: 25px;
    margin: 20px;
    padding-top: 5px;
    border-radius: 10px;
    background-color: #2a2b38;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
}

.chuck {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #e6e6e6;
    font-size: 1.1em;
    padding: 25px;
    margin: 20px;
    padding-top: 5px;
    border-radius: 10px;
    background-color: #2a2b38;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
}

.movieR {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #e6e6e6;
    font-size: 1.1em;
    padding: 25px;
    margin: 20px;
    padding-top: 5px;
    border-radius: 10px;
    background-color: #2a2b38;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
}

.movie3 {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #e6e6e6;
    font-size: 1.1em;
    padding: 25px;
    margin: 20px;
    padding-top: 5px;
    border-radius: 10px;
    background-color: #2a2b38;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
}

.todo {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #e6e6e6;
    font-size: 1.1em;
    padding: 25px;
    margin: 20px;
    padding-top: 5px;
    border-radius: 10px;
    background-color: #2a2b38;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
}

.google {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #e6e6e6;
    font-size: 1.1em;
    padding: 25px;
    margin: 20px;
    padding-top: 5px;
    border-radius: 10px;
    background-color: #2a2b38;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
}

img {
    width: 400px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    border-color: rgba(238, 237, 237, 0.22);
    margin-bottom: 5%;
    margin-top: 2%;
    background-color: #2a2b38;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
}

.add {
    border-radius: 5px;
    width: 40%;
    background: #FCEBA7;
    color:#2a2b38;
    font-size: 0.8em;
}

a {
    width: 40%;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline:none;
    text-decoration: none;
    background: #FCEBA7;
    border-radius: 3px;
    font-size: 0.8em;
    margin-top: 1%;
}
.addgoogle {
    border-radius: 5px;
    width: 40%;
    background: #FCEBA7;
    color:#2a2b38;
    font-size: 0.8em;
    outline:none;

}

h1{
    color: white;
    display: flex;
    justify-content: center;
}


</style>