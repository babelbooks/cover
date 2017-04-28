<template>
  <div>
    <div id="pages-header">
      <h3>{{book.title}}</h3>
    </div>
    <div class="container">
      <div v-if="myBook">
        <h4 class="text-left">Vous possedez presentement ce livre
          <span v-if="readyToRent">
            <i>(En attente d'emprunt)</i> :
            <button type="button" style="margin-left:15px;" class="btn btn-primary">Retirer de la circulation</button>
          </span>
          <span v-else>
            <i>(En cours de lecture)</i> :
            <button type="button" style="margin-left:15px;" class="btn btn-primary">Mettre en circulation</button>
          </span>
        </h4>
      </div>
      <div v-else>
        <h4 class="text-left">Ce livre appartient presentement a <a href="#">Lui</a>
          <span v-if="readyToRent">
            <i>(Pret a etre emprunter)</i> :
            <button type="button" style="margin-left:15px;" class="btn btn-primary">Faire une demande d'emprunt</button>
          </span>
          <span v-else>
            <i>(En cours de lecture)</i> :
            <button type="button" style="margin-left:15px;" class="btn btn-primary">Reserver</button>
          </span>
        </h4>
      </div>
      <hr>
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
              {{book.isbn}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Book',
  components: {
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  data () {
    return {
      myBook: false,
      readyToRent: false,
      book: {
   "isbn": 9782266232999,
   "title": "Le Seigneur des Anneaux / Intégrale",
   "abstract": "...",
   "genres": ["Fantasy","Science-Fiction"],
   "author": "J. R. R. Tolkien",
   "edition": "Pocket",
   "majorForm": "Novel",
   "cover": "https://images-na.ssl-images-amazon.com/images/I/518AcPBLUcL._SX348_BO1,204,203,200_.jpg"
}
    }
  }
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


</style>
