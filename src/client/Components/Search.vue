<template>
  <div>
    <div id="pages-header">
      <p><h3>Results for: <b>{{ $route.params.search }}</b></h3></p>
    </div>
    <div>
      <button type="button" style="visibility:hidden;" class="btn btn-default btn-lg">h</button>
      <div class="pull-right" style="padding-right: 30px;">
          <button @click="switchBookView()" type="button" class="btn btn-default btn-lg">
            <span v-bind:class="['glyphicon', viewBlocks ? 'glyphicon-th-list':  'glyphicon glyphicon-th-large']" aria-hidden="true"></span>
          </button>
          <button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-sort-by-attributes" aria-hidden="true"></span></button>
          <button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-filter" aria-hidden="true"></span></button>
      </div>
    </div>
    <hr>
    <div>
      <div v-if="serverResponded" class="container">
        <div class="row">
          <div v-if="viewBlocks">
            <div v-for="(result,index) in results" class="col-xs-12 col-sm-6 col-md-4">
              <div class="panel panel-default">
                <router-link to="/book/1">
                  <div class="book-wrapper">
                    <img src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api" class="book-img" alt="" />
                    <div class="book-txt-wrapper">
                      <h4>
                        <b>Titre {{index}}</b>
                      </h4>
                    </div>
                  </div>
                </router-link>
                <div class="panel-footer">
                  <div class="row">
                    <div class="col-xs-4">
                      <span class="glyphicon glyphicon-send" aria-hidden="true"></span> 1
                    </div>
                    <div class="col-xs-4">
                      <span class="glyphicon glyphicon-comment" aria-hidden="true"></span> 22
                    </div>
                    <div class="col-xs-4">
                      <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> 6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <ul class="list-group">
              <li v-for="(result,index) in results" class="list-group-item">
                <table style="width:100%">
                  <tr>
                    <td style="padding-top:15px;padding-bottom:15px;" class="text-left">
                      <b>Titre {{index}}</b>
                    </td>
                    <td style="padding-top:15px;padding-bottom:15px;" class="text-right">
                      <span class="glyphicon glyphicon-send" aria-hidden="true"></span> 1
                      <span class="glyphicon glyphicon-comment" aria-hidden="true"></span> 22
                      <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> 6
                    </td>
                  </tr>
                </table>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-else>
        <icon name="spinner" spin scale="2"></icon>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Search',
  mounted: function(){
    var self = this;
    setTimeout(function(){
      self.serverResponded = true;
    }, 1000);
  },
  data () {
    return {
      serverResponded: false,
      results: ['','',''],
      bookView: 'blocks'
    }
  },
  computed:{
    viewBlocks(){
      return this.bookView === 'blocks'
    }
  },
  methods:{
    switchBookView: function(){
      if (this.bookView === 'blocks'){
        this.bookView = 'list'
      }else{
        this.bookView = 'blocks'
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.results = [];
      this.serverResponded = false;
      var self = this;
      setTimeout(function(){
        self.results = ['','']
        self.serverResponded = true;
      }, 1000);
    }
  }
}
</script>

<style lang="sass">
@import "../assets/css/babelbooks";

.book-wrapper{
  background: rgb(30, 30, 30);
  width:100%;
  height:100%;
  overflow: hidden;
}
.book-wrapper img {
  max-width: 100%;

  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.book-wrapper:hover img {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.book-img{
  display: inline-block;
  width: auto;
  height: 300px;
  position:relative;
}
.book-txt-wrapper{
  position:absolute;
  bottom: 70px;
  left:20px;
  right:20px;
  color: white;
  background: rgb(0, 0, 0); /* fallback color */
  background: rgba(0, 0, 0, 0.6);
  padding:5px;
}
</style>
