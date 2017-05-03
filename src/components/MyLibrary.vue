<template>
  <div>
    <div id="pages-header">
      <p><h3>{{ l('myLibrary.title') }}</h3></p>
    </div>
    <table style="width:100%">
      <tr>
        <td style="padding-top:15px;padding-left:15px;vertical-align:middle;" class="text-left">
          <button @click="showAddBook = true" type="button" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
          <!--<button type="button" class="btn btn-danger btn-lg"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>-->
        </td>
        <td style="padding-top:15px;padding-right:15px;vertical-align:middle;" class="text-right">
          <button @click="switchBookView()" type="button" class="btn btn-default btn-lg">
            <span v-bind:class="['glyphicon', viewBlocks ? 'glyphicon-th-list':  'glyphicon glyphicon-th-large']" aria-hidden="true"></span>
          </button>
          <!--<button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-sort-by-attributes" aria-hidden="true"></span></button>
          <button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-filter" aria-hidden="true"></span></button>-->
        </td>
      </tr>
    </table>
    <hr>
    <div>
      <div v-if="serverResponded" class="container">
        <div class="alert alert-danger" v-if="error">
          <p>{{ error }}</p>
        </div>
        <div v-if="viewBlocks">
          <h3>Livres en votre possession (en cours de lecture)</h3>
          <div class="row">
            <div v-for="book in booksReading" class="col-xs-12 col-sm-6 col-md-4">
              <book-display :book="book"></book-display>
            </div>
            <div v-if="!booksReadingAvailable" class="alert alert-info" role="alert">
              Vous n'avez pas de livre en cours de lecture
            </div>
          </div>
          <br>
          <h3>Livres en votre possession (en attente d'emprunt)</h3>
          <div class="row">
            <div v-for="book in booksRenting" class="col-xs-12 col-sm-6 col-md-4">
              <book-display :book="book"></book-display>
            </div>
            <div v-if="!booksRentingAvailable" class="alert alert-info" role="alert">
              Vous n'avez pas de livre en pret a etre emprunter
            </div>
          </div>
          <h3>Livres que vous avez mis en circulation</h3>
          <div class="row">
            <div v-for="book in booksInitiated" class="col-xs-12 col-sm-6 col-md-4">
              <book-display :book="book"></book-display>
            </div>
            <div v-if="!booksInitiatedAvailable" class="alert alert-info" role="alert">
              Vous n'avez pas mis de livre en circulation
            </div>
          </div>
        </div>
        <div v-else>
          <h3>Livres en votre possession (en cours de lecture)</h3>
          <ul class="list-group">
            <li v-for="(book,index) in booksReading" class="list-group-item">
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
          <h3>Livres en votre possession (en attente d'emprunt)</h3>
          <ul class="list-group">
            <li v-for="(book,index) in booksRenting" class="list-group-item">
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
          <h3>Livres que vous avez mis en circulation</h3>
          <ul class="list-group">
            <li v-for="book in booksInitiated" class="list-group-item">
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
      </div>
      <div v-else>
        <icon name="spinner" spin scale="2"></icon>
      </div>
    </div>
    <add-book v-model="showAddBook" v-on:bookAdded="bookAdded"></add-book>
  </div>
</template>

<script>
import services from '../utils/services';
import addBook from './AddBook.vue'

export default {
  name: 'myLibrary',
  components:{
    addBook
  },
  data () {
    return {
      serverResponded: false,
      bookView: 'blocks',
      booksReading: [],
      booksRenting: [],
      booksInitiated: [],
      error: '',
      showAddBook: false
    }
  },
  mounted: function(){
    this.updateBooks();
  },
  methods:{
    switchBookView: function(){
      if (this.bookView === 'blocks'){
        this.bookView = 'list'
      }else{
        this.bookView = 'blocks'
      }
    },
    updateBooks: function(){
      var self = this;
      this.booksReading = [];
      this.booksRenting = [];
      this.booksInitiated = [];
      return services
        .getUserReadingBook(self,self.user.username)
        .then((res1) => {
          self.booksReading = res1;
          services
            .getUserReadBook(self,self.user.username)
            .then((res2) => {
              self.booksRenting = res2;
              services
                .getUserOriginalBook(self,self.user.username)
                .then((res3) => {
                  self.serverResponded = true;
                  self.booksInitiated = res3;
                });
            });
        });
    },
    bookAdded: function(){
      console.log('A book has been added, refreshing books')
      this.serverResponded = true;
      this.updateBooks();
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    viewBlocks(){
      return this.bookView === 'blocks'
    },
    booksReadingAvailable(){
      if (this.booksReading){
        if (this.booksReading.length > 0){
          return true;
        }
      }
      return false;
    },
    booksRentingAvailable(){
      if (this.booksRenting){
        if (this.booksRenting.length > 0){
          return true;
        }
      }
      return false;
    },
    booksInitiatedAvailable(){
      if (this.booksInitiated){
        if (this.booksInitiated.length > 0){
          return true;
        }
      }
      return false;
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

.more-options{
  position:absolute;
  top:20px;
  right:20px;
}

.book-genre{
  padding:15px;
  margin:15px;
}

</style>
