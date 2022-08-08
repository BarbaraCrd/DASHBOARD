<template>
<div id="mySidebar" class="sidebar">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
  <a href="/">Home</a>
  <div v-if="this.login !== null">
  <a href="/profile">Profile</a>
  </div>
  <div v-if="this.login !== null">
<a href="/widget">Widget</a>
</div>
<div v-if="this.admin === '1'">
    <a href="/admin">Back Office</a>
  </div>
  <div v-if="this.login === null">
    <a href="/login">Login</a>
  </div>
  <div v-else> <a @click="logout()">Logout</a> </div>
</div>

<div id="main">
  <button class="openbtn" @click="openNav()">&#9776; Open Sidebar</button>
</div> 

</template>

<script>
export default {
    name: "SideBar",
    data() {
      return{
        temp: ""
      }
    },
    created(){

      this.getLogin()
      console.log(this.login)

      this.getAdmin()

    },
    methods: {

        openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
        },
        closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        },

    logout()  {
    if (window.confirm('Sure you want to logout?')) {
        localStorage.clear()
        this.$router.push("/login")

    }   
  },
    getLogin(){
    this.login = localStorage.getItem("userId")
    },

    getAdmin() {
      this.admin = localStorage.getItem("uRole")
    }
  },

}   

</script>

<style lang="scss" scoped>
/* The sidebar menu */
.sidebar {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
    background-color: #2a2b38;
  background-position: bottom;
  background-repeat: repeat;
  background-size: 500%;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
}

/* The sidebar links */
.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #C4C3C9;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidebar a:hover {
  color: #5a41d8;
  font-weight: 700;
  
 
}

/* Position and style the close button (top right corner) */
.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* The button used to open the sidebar */
.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #2a2b38;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s; /* If you want a transition effect */
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
</style>