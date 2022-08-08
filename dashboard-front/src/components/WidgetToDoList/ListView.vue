<template>
<div>
    <div v-for="item in items" v-bind:key="item.id" >
        <div class="item"  v-on:itemchanged="$emit('reloadlist')">
        <input type="checkbox" @change="updateCheck(item.id, item.completed)" v-model="item.completed" />
        <span :class="[item.completed ? 'completed' :  '', 'itemText']"> {{ item.name }} </span>
        <div class="button">
        <button @click="editItem(item.id)" class="edit">edit</button>
        <button @click="removeItem(item.id)" class="trashcan">x</button>
        </div>
  </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            item: {
                completed: "",
                name:""
            }
        }
    },
    props: ["items"],
    methods: {
      updateCheck(id, completed) {
        this.item.completed = completed;
        axios.put("http://localhost:8001/api/item/" + id, {

            item: {
              completed: this.item.completed
            }
            
        })
        .then(response => {
          if(response.status == 200) {
            this.$emit('itemchanged');
          }
        })
        .catch(error => {
          console.log(error);
        })
      },

      editItem(id) {
        this.item.name = prompt("Update your task")
        axios.put("http://localhost:8001/api/item/update/" + id, {

            item: {
              name: this.item.name
            }
            
        })
        .then(response => {
          if(response.status == 200) {
            this.$emit('itemchanged');
            this.$router.go();
          }
        })
        .catch(error => {
          console.log(error);
        })
      },

      removeItem(id) {
        axios.delete("http://localhost:8001/api/item/" + id,)
        .then(response => {
          if(response.status == 200) {
            this.$emit('itemchanged');
            this.$router.go();
          }
        })
        .catch(error=> {
          console.log(error)
        })
      }
    }

}
</script>

<style scoped>

.item {
  background-color: #383743;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 200%;
  border-color: rgba(238, 237, 237, 0.22);
  padding: 5px;
  margin-top: 5px;
  color:#e6e6e6
}

.completed {
  text-decoration: line-through;
  color: #999999;
}

.temText {
  width: 100%;
  margin-left: 20px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.trashcan {
  background: #383743;
  border: none;
  color: #FF0000;
  outline: none;
}
.edit {
  background: #e6e6e6;
  color: #00CE25;
  outline: none;
}
</style>