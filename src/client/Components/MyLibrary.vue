<template>
  <div>
    <div id="pages-header">
      <p><h3>{{ l('myLibrary.title') }}</h3></p>
    </div>
    <table style="width:100%">
      <tr>
        <td style="padding-top:15px;padding-left:15px;vertical-align:middle;" class="text-left">
          <button type="button" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
          <button type="button" class="btn btn-danger btn-lg"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
        </td>
        <td style="padding-top:15px;padding-right:15px;vertical-align:middle;" class="text-right">
          <button @click="switchBookView()" type="button" class="btn btn-default btn-lg">
            <span v-bind:class="['glyphicon', viewBlocks ? 'glyphicon-th-list':  'glyphicon glyphicon-th-large']" aria-hidden="true"></span>
          </button>
          <button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-sort-by-attributes" aria-hidden="true"></span></button>
          <button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-filter" aria-hidden="true"></span></button>        </td>
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
            <div v-for="(book,index) in booksReading" class="col-xs-12 col-sm-6 col-md-4">
              <book-display :book="book"></book-display>
            </div>
          </div>
          <br>
          <h3>Livres en votre possession (en attente d'emprunt)</h3>
          <!-- <div class="row">
            <div v-for="(book,index) in booksRenting" class="col-xs-12 col-sm-6 col-md-4">
              <div class="panel panel-default">
                <router-link to="/book/1">
                  <div class="book-wrapper">
                    <img src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api" class="book-img" alt="" />
                    <div class="book-txt-wrapper">
                      <h4>
                        <b>Titre {{book.title}}</b>
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
          <br> -->
          <h3>Livres que vous avez mis en circulation</h3>
          <!-- <div class="row">
            <div v-for="(book,index) in booksInitiated" class="col-xs-12 col-sm-6 col-md-4">
              <div class="panel panel-default">
                <router-link to="/book/1">
                  <div class="book-wrapper">
                    <img v-bind:src="book.cover" class="book-img" alt="" />
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
        </div> -->
        <div v-else>
          <ul class="list-group">
            <li v-for="(book,index) in booksInitiated" class="list-group-item">
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
  </div>
</template>

<script>
import config from '../utils/config'


export default {
  name: 'myLibrary',
  data () {
    return {
      serverResponded: false,
      bookView: 'blocks',
      booksReading: [
{
   "isbn": 9782266232999,
   "title": "Le Seigneur des Anneaux / Intégrale",
   "abstract": "...",
   "genres": ["Fantasy","Science-Fiction"],
   "author": "J. R. R. Tolkien",
   "edition": "Pocket",
   "majorForm": "Novel",
   "cover": "https://images-na.ssl-images-amazon.com/images/I/518AcPBLUcL._SX348_BO1,204,203,200_.jpg"
},
{
   "isbn": 9782266232999,
   "title": "Le Seigneur des Anneaux / Intégrale",
   "abstract": "...",
   "genres": ["Fantasy","Science-Fiction"],
   "author": "J. R. R. Tolkien",
   "edition": "Pocket",
   "majorForm": "Novel",
   "cover": "https://images-na.ssl-images-amazon.com/images/I/518AcPBLUcL._SX348_BO1,204,203,200_.jpg"
},
{
   "isbn": 9782266232999,
   "title": "Le Seigneur des Anneaux / Intégrale",
   "abstract": "...",
   "genres": ["Fantasy","Science-Fiction"],
   "author": "J. R. R. Tolkien",
   "edition": "Pocket",
   "majorForm": "Novel",
   "cover": "https://images-na.ssl-images-amazon.com/images/I/518AcPBLUcL._SX348_BO1,204,203,200_.jpg"
},
{
   "isbn": 9782266232999,
   "title": "Le Seigneur des Anneaux / Intégrale",
   "abstract": "...",
   "genres": ["Fantasy","Science-Fiction"],
   "author": "J. R. R. Tolkien",
   "edition": "Pocket",
   "majorForm": "Novel",
   "cover": "https://images-na.ssl-images-amazon.com/images/I/518AcPBLUcL._SX348_BO1,204,203,200_.jpg"
}],
      booksRenting: [],
      booksInitiated: []
    }
  },
  mounted: function(){
    let self = this;
    setTimeout(function(){
      self.serverResponded = true;
    }, 1000);
  },

  computed: {
    user() {
      return this.$store.state.user
    },
    viewBlocks(){
      return this.bookView === 'blocks'
    }
  },

  created: function () {
    const USER_URL = config.apiUrl + 'user/' + this.user.username + '/books/';
    let self = this;
    this.$http.get(USER_URL).then(response => {
      console.log('---------- RESPONSE FROM SERVER: ');
      console.log(response.data);
      if (response.data.length > 0) {
        self.books = response.data;
//        for (let i = 0; i < response.data.books.length; i++){
//          self.books.push();
//        }
      }
    }, response => {
      // self.error = "Cannot contact server"
    });
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
