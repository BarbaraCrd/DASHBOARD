<template>
  <div class="global">
<aside><SideBar/></aside>
  <div class="update" v-for="user in users" v-bind:key="user.id">
      <div class="firstName">
          <label>First Name :</label>
          <input type="text" v-model="firstName"> 
      </div>
      <div class="lastName">
          <label>Last Name :</label>
          <input type="text" v-model="lastName">
      </div>
      <div class="email">
          <label>Email :</label>
          <input type="text" v-model="email">
      </div>
      <button @click="submit()" class="updatei">
          Submit
      </button>
       <button class="updatep">
          Return to you account
      </button>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import SideBar from '@/components/SideBar.vue'
export default {
    name:"UpdateIView",
    components: { SideBar },
    data() {
        return {
            users:[]
        }
    },
    mounted() {
        axios.get('http://localhost:8000/api/users')
        .then(response => {
            this.users = response.data.filter(element => element.id == localStorage.getItem('userId'))
            console.log(this.users[0])
        }).catch(error => {
            console.log('Error : ', error.response)
    })
    },

    methods:{
        submit() {
            axios.put('http://localhost:8000/api/users/updatei/' + localStorage.getItem('userId'), {
                firstName: this.firstName,
                lastName: this.lastName,
				email: this.email,
            }).then( (response) => {
                console.log(response)
            })
        },
    }
}


</script>

<style scoped>
.global {
    background-color: #1f2029;
}

.update {
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
    background: rgb(181, 240, 181);
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
</style>