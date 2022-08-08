<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">TO DO LIST</h2>
            <add-item />
        </div>
        <list-view :items="items" v-on:reloadlist="getList()"  />
    </div>
</template>

<script>
import AddItem from "./AddItem.vue"
import ListView from "./ListView.vue"
import axios from 'axios';

export default {
    components: { AddItem, ListView },
    data: function () {
        return {
            items: [],
            widgets:[],
        }
    },
    mounted() {
    axios.get('http://localhost:8000/api/type')
    .then(response => {
      this.widgets = response.data.filter(element => element.user_id == localStorage.getItem('userId'))
      console.log(this.widgets);
      for(let i=0; i<=this.widgets.length; i++) {
        //this.widget_id = this.widgets[i].id
        localStorage.setItem('widget_id', this.widgets[i].id)
        console.log(this.widget_id)
      }
    }).catch(error => {
            console.log('Error : ', error.response)
    }),


    axios.get("http://localhost:8001/api/items/" + localStorage.getItem('widget_id'))
        .then(response => {
            this.items = response.data
            console.log(localStorage.getItem('widget_id'))
        })
        .catch(error => {
            console.log(error);
        })
  },
 
}
</script>

<style scoped>

.todoListContainer {
    width:350px;
    margin: auto;
    border-color: rgba(238, 237, 237, 0.22);
}

.heading {
    background-color: #383743;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 10px;
    color: #e6e6e6
}

#title {
    text-align: center;
    }

</style>