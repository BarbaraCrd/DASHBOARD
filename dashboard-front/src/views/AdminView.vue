<template>
 <div class="admin">
    <aside><SideBar/></aside>
    <div class="kpi">
        <div class="users">
            <div class="title">
                TOTAL OF USERS
                </div>
                {{nbusers}}
        </div>
        <div class="widgets">
             <div class="title">
                TOTAL OF WIDGETS
                </div>
                {{nbwidgets}}
        </div>
        <div class="avgWidget">
            <div class="title">
                AVERAGE WIDGETS NUMBER PER USER
                </div>
                {{(nbwidgets/nbusers).toFixed(1)}}
        </div>
    </div>
        <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6">
                            <h2><b>USERS </b>LIST</h2>
                        </div>
                        <div class="col-sm-6">
                            <button class="btn btn-success" @click="createu()"><i class='fas fa-plus'></i> <span>Create New User</span></button>					
                        </div>
                    </div>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>FIRST NAME</td>
                            <td>LAST NAME</td>
                            <td>EMAIL</td>
                            <td>PASSWORD</td>
                            <td>ROLE</td>
                            <td>ACTIONS</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" v-bind:key="user.id">
                            <td>{{user.id}}</td>
                            <td>{{user.firstName}}</td>
                            <td>{{user.lastName}}</td>
                            <td>{{user.email}}</td>
                            <td><button class="updatep"><router-link :to="`/adminupdatep/${user.id}`" class="tag">UPDATE PASSWORD</router-link></button></td>
                            <td>{{user.uRole}}</td>
                            <td class="actions">
                                <button class="update"><router-link :to="`/adminupdatei/${user.id}`" class="tag">UPDATE</router-link></button>
                                <button class="delete" @click="deleteu(user.id)">DELETE</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import axios from 'axios'

export default {
    name:"AdminView",
    components: { SideBar },
    data() {
        return {
            users:[],
            nbwidgets:"",
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

        axios.get('http://localhost:8000/api/users')
        .then(response => {
            this.users = response.data
            this.nbusers = response.data.length
            console.log(response.data.length)
        }).catch(error => {
            console.log('Error : ', error.response)
    })

        axios.get('http://localhost:8000/api/widgets')
        .then(response => {
            this.nbwidgets = response.data.length
            console.log(response.data.length)
        }).catch(error => {
            console.log('Error : ', error.response)
    })

    },

    methods: {

        createu() {
            this.$router.push('/createuser')
        },

        getAdmin() {
            this.admin = localStorage.getItem("uRole")
        },

        deleteu(id) {
            if(confirm("Are you sure you want to delete this user ?")) {
            axios.delete('http://localhost:8000/api/destroyUser/' + id)
            .then( () => {
                this.users = this.users.filter((e)=> e.id != id)
                alert("User successfully deleted")
                this.$router.push('/admin')
                
            })}
        }
    }

}
</script>

<style scoped>

.admin{
    background-color: #1f2029;
}

.container {
    background-color: #2a2b38;
	background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
	background-position: bottom center;
	background-repeat: no-repeat;
	background-size: 100%;
    display:flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.row {
    margin-top:2%;
    margin-bottom:2%;
    color: #ffeba7;
}
table {
    color: #e6e6e6;
}

.btn {
    margin-left: -5.5%;
}

.updatep {

    border-radius:5px;
    background: #FCEBA7;
    border:none;
    outline: none;
    text-decoration: none;
}

.update {

    border-radius:5px;
    margin-right: 5%;
    background: #FCEBA7;
    border:none;
    outline: none;
    text-decoration: none;
}

.delete {
    
    border-radius:5px;
    background: red;
    border:none;
    outline: none;
}
.kpi {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 3%;
    margin-top: 3%;
    margin-left: 10%;
    width: 80%;
}
.users {
    color:#FCEBA7;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:20%;
    height: 100px;
    justify-content: center;
    border-radius: 10px;
    background-color: #2a2b38;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
}

.tag {
    text-decoration: none;
    text-decoration-color: #1f2029;
    color: #1f2029;
}

.widgets {
    color:#FCEBA7;
    width:20%;
    height: 100px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: #2a2b38;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
}

.avgWidget {
    color:#FCEBA7;
    width:20%;
    height: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: #2a2b38;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
}
</style>