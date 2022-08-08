<template>
  <div class="addItem">
      <input type="text" class="cache" v-model="item.widget_id">
      <input type="text" v-model="item.name" />
      <button className="store" @click="addItem()" :class="[item.name ? 'active' : 'inactive', 'plus']">+</button>
  </div>
</template>

<script>

import axios from 'axios';

export default {
    data: function () {
        return {
            item: {
                name:"",
                widget_id:""
            }
        }
    },

    mounted() {
    axios.get('http://localhost:8000/api/type')
    .then(response => {
      this.widgets = response.data.filter(element => element.user_id == localStorage.getItem('userId'))
      console.log(this.widgets);
      for(let i=0; i<=this.widgets.length; i++) {
        this.item.widget_id = this.widgets[i].id
        console.log(this.item.widget_id)
      }
    }).catch(error => {
            console.log('Error : ', error.response)
    })
  },
     methods: {
        addItem() {
            if (this.item.name == "") {
                return;
            }
            axios.post("http://localhost:8001/api/item/store", {
                item:this.item
            })
            .then (response => {
                if(response.status == 201) {
                    this.item.name == "";
                    this.$emit('reloadlist');
                    this.$router.go()
                }
            })
            .catch (error => {
                console.log(error);
            })
        }
    }
}
</script>

<style scoped>
.addItem {
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    background: #f7f7f7;
    border: 0px;
    outline: none;
    padding: 5px;
    margin-right: 10px;
    width: 100%;
}

.plus {
    font-size: 20px;
}

.active {
    color: #00CE25;
}

.inactive {
    color: #999999
}

.cache {
    display: none;
}


</style>