<template>
  <div>
    <div id="profile-header">
      <p><h3>Results for: <b>{{search}}</b></h3></p>
    </div>
    <div v-if="serverResponded" class="container">
      <div class="row">
          <div v-for="(result,index) in results" class="col-xs-12 col-md-4">
            <div class="panel panel-default">
                <router-link to="/book/1">
                  <div class="book-wrapper">
                    <img src="/assets/img/books.jpeg" class="book-img" alt="" />
                    <div class="book-txt-wrapper">
                      <span>Titre {{index}}</span>
                    </div>
                  </div>
                </router-link>
            </div>
          </div>
      </div>
    </div>
      <div v-else>
        <spinner ref="spinner" v-model="spinner" size="lg" v-bind:text="l('loading')"></spinner>
      </div>
    </div>
  </div>
</template>

<script>
import { spinner } from 'vue-strap'

export default {
  name: 'Search',
  components: {
    spinner
  },
  computed: {
    search() {
      return this.$store.state.search
    }
  },
  mounted: function(){
    var self = this;
    setTimeout(function(){
      self.serverResponded = true;
      self.spinner = false;
    }, 1000);
  },
  data () {
    return {
      serverResponded: false,
      spinner: true,
      results: ['','','','']
    }
  }
}
</script>

<style lang="sass">
@import "../assets/css/babelbooks";

#profile-header{
  background:linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  padding:15px;
  color:white;
}

.book-wrapper{
  border:1px solid #d9d9d9;
  width:100%;
  height:100%;
}

.book-img{
  position:relative;
  height:100%;
  width:100%;
}
.book-txt-wrapper{
  position:absolute;
  bottom:50px;
}
.book-txt-wrapper span {
   color: white;
   font: bold 17px/35px Helvetica, Sans-Serif;
   letter-spacing: -1px;
   background: rgb(0, 0, 0); /* fallback color */
   background: rgba(0, 0, 0, 0.7);
   padding: 10px;
}

</style>
