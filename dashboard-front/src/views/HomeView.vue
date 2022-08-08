<template>
  <div class="home">
    <aside><SideBar/></aside>
    <div class="container" v-for="widget in widgets" v-bind:key="widget.id">
      <div>
      <div class="widget" v-if="widget.widget_type === 'movie3'">
    <YoungMovie/><button class="delete" @click="deleteWidget(widget.id)">Delete</button>
      </div><div v-else></div>
      </div>
      <div class="widget" v-if="widget.widget_type === 'movier'">
    <MovieRevenue/><button class="delete" @click="deleteWidget(widget.id)">Delete</button>
    </div><div v-else></div>
    <div class="widget" v-if="widget.widget_type === 'chuckn'">
    <ChuckNorris/><button class="delete" @click="deleteWidget(widget.id)">Delete</button>
    </div><div v-else></div>
    <div class="widget" v-if="widget.widget_type === 'todo'">
    <GlobalList/><button class="delete" @click="deleteWidget(widget.id)">Delete</button>
    </div><div v-else></div>
    <div class="widget" v-if="widget.widget_type === 'meteos'">
    <WidgetMeteoSmall/><button class="delete" @click="deleteWidget(widget.id)">Delete</button>
    </div><div v-else></div>
    <div class="widget" v-if="widget.widget_type === 'meteom'">
    <WidgetMeteoMedium/><button class="delete" @click="deleteWidget(widget.id)">Delete</button>
    </div><div v-else></div>
    <div class="widget" v-if="widget.widget_type === 'meteob'">
    <WidgetMeteoBig/><button class="delete" @click="deleteWidget(widget.id)">Delete</button>
    </div><div v-else></div>
    <div class="widget" v-if="widget.widget_type === 'google'">
    <MailGoogle/><button class="delete" @click="deleteWidget(widget.id)">Delete</button>
    </div><div v-else></div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import YoungMovie from '@/components/YoungMovie.vue'
import MovieRevenue from '@/components/MovieRevenue.vue'
import ChuckNorris from '@/components/ChuckNorris.vue'
import WidgetMeteoSmall from '@/components/WidgetMeteoSmall.vue'
import WidgetMeteoMedium from '@/components/WidgetMeteoMedium.vue'
import WidgetMeteoBig from '@/components/WidgetMeteoBig.vue'
import GlobalList from '@/components/WidgetToDoList/GlobalList.vue'
import MailGoogle from '@/components/MailGoogle.vue'


import axios from 'axios';

export default {
  name: 'HomeView',
  data() {
    return {
      widgets: []
    }
  },
  components: {
    SideBar,
    YoungMovie,
    MovieRevenue,
    ChuckNorris,
    GlobalList,
    WidgetMeteoSmall,
    WidgetMeteoMedium,
    WidgetMeteoBig,
    MailGoogle

  },

  mounted() {
    axios.get('http://localhost:8000/api/widgets')
    .then(response => {
      this.widgets = response.data.filter(element => element.user_id == localStorage.getItem('userId'))
      console.log(this.widgets[0].widget_type);
      /*for(let i=0; i<=this.widgets.length; i++) {
        var widgets_type = this.widgets[i].widget_type
        return widgets_type
      }*/
    }).catch(error => {
            console.log('Error : ', error.response)
    })

    console.log(this.$route.query.code)

    fetch("http://localhost:3010/postToken", {
    method: "POST",
    body: JSON.stringify({ "connectionToken": this.$route.query.code }),
    headers: { "Content-Type": "application/json" }
    })

    axios.get('http://localhost:3010/getmail')
    .then(response => {
    this.mail = response.data
    console.log(response.data);
    }).catch(error => {
    console.log('Error : ', error.response)
    })

  },

  methods: {
    deleteWidget($id) {
      axios.delete('http://localhost:8000/api/widget/' + $id)
      .then(() => {
        this.widgets = this.widgets.filter((e)=> e.id != $id)
      }).catch(error => {
            console.log('Error : ', error.response)
    })
    }
  }

}
</script>

<style lang="scss" scoped>

.home
{
  background-color: #1F2029;


}

.widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.delete {
  margin-top: 0;
  margin-bottom: 3%;
  background: red;
  color: #e6e6e6;
  border-radius: 5px;
  outline: none;
  border:none;
}

.container{
  display: flex;
  justify-content: center;
}

</style>
