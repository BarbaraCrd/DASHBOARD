<template>
  <div class="global">
<aside><SideBar/></aside>
  <div class="create">
      <div class="title">CREATE A USER</div>
      <div class="firstName">
          <label>First Name :</label>
          <div><input type="text" v-model="firstName" ></div>
      </div>
      <div class="lastName">
          <label>Last Name :</label>
          <div><input type="text" v-model="lastName" ></div>
      </div>
      <div class="email">
          <label>Email :</label>
          <div><input type="text" v-model="email" ></div>
      </div>

      <div class="password">
          <label>Password :</label>
          <div><input type="password" v-model="password" ></div>
      </div>

      <div class="password_conf">
          <label>Password Confirmation :</label>
          <div><input type="password" v-model="confirm_password" ></div>
      </div>

      <div class="urole">
          <label>Role :</label>
          <div><input type="text" v-model="uRole" ></div>
      </div>
      <button @click="submit()" class="updatei">
          Create
      </button>
       <a href="/admin"><button class="updatep">
          Return to User's List
      </button></a>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import SideBar from '@/components/SideBar.vue'
export default {
    name:'AdminCreate',
    components: { SideBar },
    data() {
		return {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
			confirm_password: "",
            uRole:"",
		}
	},

    created() {
        this.getAdmin()
    },

    mounted() {

        if(this.admin == "0")
        {
            this.$router.push('/')
        }
    },

    methods: {
        submit() {
            axios.post('http://localhost:8000/api/register', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                confirm_password: this.confirm_password,
                uRole: this.uRole,
            }).then( (response) => {
                console.log(response)
                alert('User created successfully')
                this.$router.push('/admin')
            })
        },

        getAdmin() {
            this.admin = localStorage.getItem("uRole")
        },
    }

}

</script>

<style scoped>

.global {
    background-color: #1f2029;
}

.create {
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
    height: 650px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
}

.title {
    margin-top:-2%;
    color:#FCEBA7
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

.password {
    margin-top:3%;
}

.password_conf {
    margin-top:3%;
}

.urole {
    margin-top:3%;
}

.updatei {
    margin-top:8%;
    width: 35%;
    border-radius:5px;
    background: rgb(181, 240, 181);
    border:none;
    outline: none;
}

.updatep {
    margin-top:20px;
    margin-left:-12%;
    width: 124%;
    border-radius:5px;
    background: #FCEBA7;
    border:none;
    outline: none;
}

</style>