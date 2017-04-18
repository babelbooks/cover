<template>
  <div>
    <div id="my-library-header">
      <p><h3>{{ l('myLibrary.title') }}</h3></p>
    </div>
    <div style="padding-top:10px;">
      <div class="pull-left" style="padding-left:35px;">
        <button type="button" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
        <button type="button" class="btn btn-danger btn-lg"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
      </div>
      <div class="pull-right" style="padding-right:35px;">
        <button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span></button>
        <button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span></button>
      </div>
    </div>
    <br>
    <br>
    <hr>
    <div class="container">
      <div class="row">
        <div v-for="book in books" class="col-xs-12 col-md-4">
          <div class="panel panel-info">
            <div class="panel-heading">
              <h3 class="panel-title"><b>{{book.title}}</b> - {{book.author}}</h3>
            </div>
            <div class="panel-body">
              <h4><span v-for="genre in book.genres" class="label label-primary book-genre">{{genre}}</span></h4>
            </div>
          </div>
        </div>
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
      books: []
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  created: function () {

    const USER_URL = config.apiUrl + "user/books/" + this.user.userID;
    var self = this;
    this.$http.get(USER_URL).then(response => {
      if (response.data.booksId.length > 0){
        for (var i = 0; i < response.data.booksId.length; i++){
          const BOOK_URL = config.apiUrl + "book/" + response.data.booksId[i];

          this.$http.get(BOOK_URL).then(response => {
            self.books.push(response.data)
          }, response => {
            self.error = "Cannot contact server"
          });
        }
      }
    }, response => {
      self.error = "Cannot contact server"
    });
  }
}
</script>

<style lang="sass">
@import "../assets/css/babelbooks";

#my-library-header{
  background:linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  padding:15px;
  color:white;
}

.book-genre{
  padding:15px;
  margin:15px;
}

</style>
