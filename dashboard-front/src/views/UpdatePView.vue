<template>
    <div class="global">
<aside><SideBar/></aside>
  <div class="update">
      <div class="password">
          <label>Password :</label>
          <input type="password" v-model="password"> 
      </div>
      <div class="confirm_password">
          <label>Password Confirmation :</label>
          <input type="password" v-model="confirm_password" >
      </div>
      <button @click="submit()" class="updatei">
          Submit
      </button>
       <a href="/profile"><button class="updatep">
          Return to your account
      </button></a>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import SideBar from '@/components/SideBar.vue'
export default {
    name:"UpdatePView",
    components: { SideBar },
    methods: {
        submit() {
            axios.put('http://localhost:8000/api/users/updatep/' + localStorage.getItem('userId'), {
                password: this.password,
                confirm_password: this.confirm_password,
            }).then( (response) => {
                console.log(response)
                alert("Password updated successfully")
                this.$router.go()
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

.password {
    margin-top:15%;
    margin-left:8%;
}

.confirm_password {
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