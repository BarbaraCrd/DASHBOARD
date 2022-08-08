<template>
    <div class="global">
<aside><SideBar/></aside>
  <div class="update">
      <div class="title">UPDATE INFORMATIONS</div>
      <div class="firstName">
          <div><label>First Name :</label></div>
          <input type="text" v-model="firstName" @change="changeFN($event)"> 
      </div>
      <div class="lastName">
          <div><label>Last Name :</label></div>
          <input type="text" v-model="lastName" @change="changeLN($event)">
      </div>
      <div class="email">
          <div><label>Email :</label></div>
          <input type="text" v-model="email" @change="changeE($event)">
      </div>
      <div class="uRole">
          <div><label>Role :</label></div>
          <input type="text" v-model="uRole" @change="changeU($event)">
      </div>
      <button @click="submit(this.id)" class="updatei">
          Submit
      </button>
       <a href="/admin"><button class="updatep">
          Return to User's List
      </button></a>
  </div>
</div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import axios from 'axios'

export default {
    name:'AdminUpdateI',
    components: { SideBar },
    created() {
        this.getAdmin()
    },
    mounted() {
        this.id = this.$route.params.id
        console.log(this.id)

        if(this.admin == "0")
        {
          this.$router.push('/')
        }

        axios.get('http://localhost:8000/api/users')
        .then(response => {
            this.users = response.data.filter(element => element.id == this.id)
            console.log(this.users[0].firstName)
            this.firstName = this.users[0].firstName
            this.lastName = this.users[0].lastName
            this.email = this.users[0].email
            this.uRole = this.users[0].uRole
        }).catch(error => {
            console.log('Error : ', error.response)
    })
    },
    methods: {

        getAdmin() {
            this.admin = localStorage.getItem("uRole")
        },

        changeFN(event) {
            this.firstName = event.target.value 
        },
        changeLN(event) {
            this.lasttName = event.target.value 
        },
        changeE(event) {
            this.email = event.target.value 
        },
        changeU(event) {
            this.uRole = event.target.value 
        },
        submit(id) {
            axios.put('http://localhost:8000/api/users/updateadmin/' + id, {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                uRole: this.uRole,
            }).then( (response) => {
                console.log(response)
                alert("Informations updated successfully")
                this.$router.push('/admin')
            })
        },
    }
}
</script>

<style scoped>

.global {
    background-color: #1f2029;
}

.title {
    margin-top:10%;
    color:#FCEBA7
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
    height: 550px;
    border-radius: 10px;
    align-items: center;
}

label {
    margin-right: 3%;
}

.firstName {
    margin-top:8%;
}

.lastName {
    margin-top:3%;
}

.email {
    margin-top:3%;
}

.uRole {
    margin-top:3%;
}

.updatei {
    margin-top:8%;
    width: 34%;
    border-radius:5px;
    background: rgb(181, 240, 181);
    border:none;
    outline: none;
}

.updatep {
    margin-top:5%;
    width: 120%;
    margin-left:-10%;
    border-radius:5px;
    background: #FCEBA7;
    border:none;
    outline: none;
}
</style>