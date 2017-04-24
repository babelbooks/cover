<template>
  <div>
    <div id="pages-header">
      <h3>Book title</h3>
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
          <img src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api" id="book-img" alt="" />
        </div>
        <div class="col-xs-12 col-sm-8">
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <b>Auteur</b>
            </div>
            <div class="col-xs-12 col-sm-8">
              blablabla
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <b>Description</b>
            </div>
            <div class="col-xs-12 col-sm-8">
              blablabla
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <b>Genre(s)</b>
            </div>
            <div class="col-xs-12 col-sm-8">
              blablabla
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <b>ISBN</b>
            </div>
            <div class="col-xs-12 col-sm-8">
              blablabla
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
      readyToRent: false
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
