<template>

    <div class="card">
        <span class="icon"><img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/800px-Gmail_icon_%282020%29.svg.png"/></span>
        <div class="temp">YOUR LAST MAIL</div>
        <div class="contentMail">{{this.mail}}</div>
                                
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            mail:""
        }
    },
    name: "MailGoogle",
    mounted(){
       axios.get('http://localhost:3010/getmail')
    .then(response => {
      this.mail = response.data
      console.log(response.data);
    }).catch(error => {
            console.log('Error : ', error.response)
    })
    
}
}



</script>

<style scoped>
  
.card{
    padding: 1rem;
    margin: 1.5rem 4vw;
    border-radius: 1rem;
    height: auto;
    background-color: #383743;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
	background-position: bottom center;
	background-repeat: no-repeat;
	background-size: 100%;
    border-color: rgba(238, 237, 237, 0.22);
    text-align: center;
}
@media(max-width:768px){
    .card{
        margin: 1.5rem;
        display: flex;
        justify-content: center;
    }
}

.temp{
    font-size: 2rem;
    color: #ffeba7;
    
}

.contentMail{
    margin-top: 5%;
    color: white;
}


.icon{
    justify-content: center;
    display: flex;
   
}
.icon img{
    width: 3rem;

}

</style>
