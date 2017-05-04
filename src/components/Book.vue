<template>
  <div>
    <div id="pages-header">
      <h3>{{book.title}}</h3>
      <br>
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
    <div class="container">
      <div v-if="iOwnThisBook">
        <h4 class="text-center">Vous possedez presentement ce livre
          <span v-if="readyToRent">
            <i>(En attente d'emprunt)</i>
            <!-- <button type="button" style="margin-left:15px;" class="btn btn-primary">Retirer de la circulation</button> -->
          </span>
          <span v-else>
            <i>(En cours de lecture)</i>
            <button @click="setBookAsRead" type="button" style="margin-left:15px;" class="btn btn-primary">Mettre en circulation</button>
          </span>
        </h4>
        <hr style="width:50%;">
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-4" style="margin-bottom:20px;">
          <img v-bind:src="book.cover" id="book-img" alt="" />
        </div>
        <div class="col-xs-12 col-sm-8">
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <b>Auteur</b>
            </div>
            <div class="col-xs-12 col-sm-8">
              {{book.author}}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <b>Description</b>
            </div>
            <div class="col-xs-12 col-sm-8">
              {{book.abstract}}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <b>Genre(s)</b>
            </div>
            <div class="col-xs-12 col-sm-8">
              <div v-for="genre in book.genres">
                <p>{{genre}}</p>
              </div>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <b>ISBN</b>
            </div>
            <div class="col-xs-12 col-sm-8">
              {{$route.params.id}}
            </div>
          </div>
        </div>
      </div>
      <hr>
      <!-- OWNERS -->
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>
            Livres disponibles :
          </h3>
        </div>
        <div class="panel-body">
          <ul class="list-group">
            <table class="table owner">
                <thead>
                  <tr>
                    <th>Propriétaire</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody v-for="owner in owners">
                  <tr>
                    <td><b>{{owner.username}}</b> <span v-show="amIThisUser(owner.username)">({{ l('me') }})</span></td>
                    <td class="right"><button type="button" class="btn btn-primary" @click="borrowBook(owner.username)" :disabled="amIThisUser(owner.username)">{{ l('book.rent') }}</button></td>
                  </tr>
                </tbody>
            </table>
            <div v-if="!ownersAvailable">
              <br>
              <div v-if="userAuthenticated" class="alert alert-info" role="alert">
                {{ l('book.notAvailable') }}
              </div>
              <div v-else class="alert alert-info" role="alert">
                {{ l('needToBeConnected') }}
              </div>
            </div>
          </ul>
        </div>
      </div>
      <!-- COMMENTS -->

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>
            Comments
          </h3>
        </div>
        <div class="panel-body">
          <ul class="list-group">
            <li v-for="comment in comments" class="list-group-item">
              <table style="width:100%;height:100%">
                <tr>
                  <td style="width:25%;">
                    <router-link :to="{ name: 'profile', params: { userId: comment.user.id }}">
                      <avatar style="display:inline-block;" v-bind:username="comment.user.firstname + ' ' + comment.user.lastname"></avatar>
                    </router-link>
                  </td>
                  <td class="text-left">
                    <h5>{{comment.comment}}</h5>
                  </td>
                </tr>
              </table>
            </li>
          </ul>
          <textarea class="form-control" placeholder="Ecrire un commmentaire" rows="3"></textarea>
        </div>
      </div>
      <!-- END OF STUFF -->

    </div>
  </div>
</template>

<script>
import Avatar from 'vue-avatar'
import services from '../utils/services';

export default {
  name: 'Book',
  components: {
    avatar: Avatar.Avatar
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    userAuthenticated(){
      if (this.user.authenticated){
        return true
      }else{
        return false
      }
    },
    ownersAvailable() {
      if (this.owners){
        if (this.owners.length > 0){
          return true;
        }
      }
      return false;
    }
  },
  methods:{
    setBookAsRead: function(){
      var self = this;
      return services
        .getUserReadingBookRaw(this,this.user.username)
        .then((response) => {
          var books = response.books
          var arrayLength = books.length;
          for (var i = 0; i < arrayLength; i++) {
            if (books[i].isbn === this.$route.params.id){
              return services
                .setBookAsRead(self, books[i].bookId)
                .then((res1) => {
                  self.$router.push({ name: 'mylibrary' });
                })
            }
          }
        })
    },
    borrowBook(username){
      var self = this;
      return services
        .getUserReadBookRaw(this,username)
        .then((response) => {
          var books = response.books
          var arrayLength = books.length;
          for (var i = 0; i < arrayLength; i++) {
            if (books[i].isbn === this.$route.params.id){
              var depositLocation = {
                depositLocationId: 2
              }
              return services
                .setAppointment(self, username, books[i].bookId, depositLocation)
                .then((response) => {
                  self.$router.push({ name: 'mylibrary' });
                })
            }
          }
        })
    },
    amIThisUser(username){
      return this.user.username === username
    }
  },
  mounted: function(){
    var self = this;
    return services
      .getBookInfo(self,this.$route.params.id)
      .then((res1) => {
        self.book = res1.book;
        console.log(res1);
        if (self.user.authenticated){
          return services
            .doIOwnThisBook(self,self.book.id,self.user.username)
            .then((res2) => {
              self.iOwnThisBook = res2.myBook;
              self.readyToRent = res2.available;
              return services
                .getCurrentOwners(self,self.$route.params.id)
                .then((res3) => {
                  self.owners = res3;
                })
            })
        }
      })
  },
  data () {
    return {
      iOwnThisBook: false,
      readyToRent: false,
      book: {
         "title": "Please wait ...",
         "id": "",
         "abstract": "...",
         "genres": ["..."],
         "author": "...",
         "edition": "...",
         "majorForm": "...",
         "cover": ""
      },
      comments:[
        {
          "user":{
            "id": 1,
            "firstname": "Ce",
            "lastname": "Ta"
          },
          "comment": "Stai bon"
        },
        {
          "user":{
            "id": 2,
            "firstname": "Se",
            "lastname": "Va"
          },
          "comment": "Stai tres bon"
        },
        {
          "user":{
            "id": 3,
            "firstname": "Re",
            "lastname": "Ya"
          },
          "comment": "Stai vraiment bon"
        }
      ],
      owners:[]
    }
  } // getBookInfo
}
</script>

<style lang="sass">
@import "../assets/css/babelbooks";

#book-img{
  border:1px solid black;
  width: auto;
  height: 300px;
}

@media(min-width:992px){
  #book-img{
    height: 500px;
  }
}

td {
  text-align: left;
}

td.right {
  text-align: right;
}

.owner {
  width: 100%;
  margin: auto;
}

.owner tr {
  padding-left: 15px !important;
  padding-right: 15px !important;
}

@media(min-width:768px){
  .owner{
    width: 50%;
  }
}



</style>
