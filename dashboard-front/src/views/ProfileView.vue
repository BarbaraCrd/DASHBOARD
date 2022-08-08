<template>
<div class="global">
<aside><SideBar/></aside>
  <div class="profile" v-for="user in users" v-bind:key="user.id">
      <div class="firstName">
          <label>First Name :</label> {{user.firstName}}
      </div>
      <div class="lastName">
          <label>Last Name :</label> {{user.lastName}}
      </div>
      <div class="email">
          <label>Email :</label> {{user.email}}
      </div>
      <a href="/updatei"><button class="updatei">
          Update your informations
      </button></a>
      <button class="updatep">
          Update your password
      </button>
      <button @click="deleteU(user.id)" class="deletea">
          Delete your account
      </button>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import SideBar from '@/components/SideBar.vue'
export default {
    name:"ProfileView",
    components: { SideBar },
    data() {
        return {
            users:[]
        }
    },

    created() {

        this.getLogin()

    },

    mounted() {
        axios.get('http://localhost:8000/api/users')
        .then(response => {
            this.users = response.data.filter(element => element.id == localStorage.getItem('userId'))
            console.log(this.users[0])
        }).catch(error => {
            console.log('Error : ', error.response)
    })

     if(this.login == null)
     {
          this.$router.push('/login')
     }

    },

    methods:{

        getLogin(){
        this.login = localStorage.getItem("userId")
        },


        deleteU(id) {
            if(confirm("Are you sure you want to delete your account ?")) {
            axios.delete('http://localhost:8000/api/destroyUser/' + localStorage.getItem('userId'))
            .then( () => {
                this.users = this.users.filter((e)=> e.id != id)
                alert("Account successfully deleted")
                this.$router.push('/')
                
             })}
        }
    }

}
</script>

<style scoped>
.global {
    background-color: #1f2029;
}

.profile {
    background-color: #2a2b38;
	background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
	background-position: bottom center;
	background-repeat: no-repeat;
	background-size: 100%;
    color:#e6e6e6;
    display:flex;
    margin-left: 38.5%;
    flex-direction: column;
    width: 28%;
    height: 400px;
    border-radius: 10px;
}

label {
    margin-right: 3%;
}

.firstName {
    margin-top:10%;
    margin-left:8%;
}

.lastName {
    margin-top:3%;
    margin-left:8%;
}

.email {
    margin-top:3%;
    margin-left:8%;
}

.updatei {
    margin-top:13%;
    width: 50%;
    margin-left:25%;
    border-radius:5px;
    background: #FCEBA7;
    border:none;
    outline: none;
}

.updatep {
    margin-top:3%;
    width: 50%;
    margin-left:25%;
    border-radius:5px;
    background: #FCEBA7;
    border:none;
    outline: none;
}

.deletea {
    margin-top:3%;
    width: 50%;
    margin-left:25%;
    border-radius:5px;
    background: red;
    border:none;
    outline: none;
}

</style>