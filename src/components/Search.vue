<template>
  <div>
    <div id="pages-header">
      <p><h3>{{ l('search.resultsFor') }}: <b>{{ $route.params.search }}</b></h3></p>
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
            <div v-for="book in results" class="col-xs-12 col-sm-6 col-md-4">
              <book-display :book="book"></book-display>
            </div>
          </div>
          <div v-else>
            <ul class="list-group">
              <li v-for="(book,index) in results" class="list-group-item">
                <table style="width:100%">
                  <tr>
                    <td style="padding-top:15px;padding-bottom:15px;" class="text-left">
                      <b>{{book.title}}</b>
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
          <div v-if="!noResults" class="alert alert-info" role="alert">
            {{ l('search.noResults') }}
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
import services from '../utils/services';

export default {
  name: 'Search',
  mounted: function(){
    var self = this;
    return services
      .searchByTitle(this,this.$route.params.search)
      .then((res) => {
        // services.updateUserPoints(self,2);
        self.results = res;
        self.serverResponded = true;
      });
  },
  data () {
    return {
      serverResponded: false,
      results: [],
      bookView: 'blocks'
    }
  },
  computed:{
    viewBlocks(){
      return this.bookView === 'blocks'
    },
    noResults(){
      if (this.results){
        if (this.results.length > 0){
          return true;
        }
      }
      return false;
    },
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
      return services
        .searchByTitle(this,this.$route.params.search)
        .then((res) => {
          // services.updateUserPoints(self,2);
          self.results = res;
          self.serverResponded = true;
        });
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
