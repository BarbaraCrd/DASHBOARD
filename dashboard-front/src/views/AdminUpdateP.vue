<template>
   <div class="global">
<aside><SideBar/></aside>
  <div class="update">
      <div class="title">UPDATE PASSWORD</div>
      <div class="password">
          <label>Password :</label>
          <div><input type="password" v-model="password"></div>
      </div>
      <div class="confirm_password">
          <label>Password Confirmation :</label>
          <div><input type="password" v-model="confirm_password" ></div>
      </div>
      <button @click="submit(this.id)" class="updatei">
          Submit
      </button>
       <a href="/profile"><button class="updatep">
          Return to your account
      </button></a>
  </div>
</div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import axios from 'axios'
export default {
    name: "AdminUpdateP",
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
    },
    methods: {
        submit(id) {
            axios.put('http://localhost:8000/api/users/updatep/' + id, {
                password: this.password,
                confirm_password: this.confirm_password,
            }).then( (response) => {
                console.log(response)
                alert("Password updated successfully")
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

.title {
    margin-top:15%;
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
    height: 400px;
    border-radius: 10px;
    align-items: center;
}

label {
    margin-right: 3%;
}

.password {
    margin-top:8%;
}

.confirm_password {
    margin-top:3%;
}

.updatei {
    margin-top:8%;
    width: 45%;
    border-radius:5px;
    background: rgb(181, 240, 181);
    border:none;
    outline: none;
}

.updatep {
    margin-top:3%;
    width: 100%;
    border-radius:5px;
    background: #FCEBA7;
    border:none;
    outline: none;
}

</style>