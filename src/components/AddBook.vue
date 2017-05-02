<template>
  <modal v-model="show" effect="fade">
    <!-- custom header -->
    <div slot="modal-header" class="modal-header">
      <h3 class="modal-title">
         {{l('myLibrary.addBook.title')}}
      </h3>
    </div>
    <div v-if="addBookIncrement === 0">
      <div class="form-group">
        <label for="isbn">ISBN</label>
        <input type="text" class="form-control" id="isbn" placeholder="0-7645-2641-3">
      </div>
      <p>
        {{l('myLibrary.addBook.isbn')}}
      </p>
      <img src="/assets/img/isbn-help.jpg" style="max-height:100px;" id="book-img" alt="" />
      <p>
        <small style="color:red;">{{l('myLibrary.addBook.noIsbn')}} <br>
        <button type="button" class="btn btn-info" @click="noIsbn()">{{l('myLibrary.addBook.noIsbnButton')}}</button></small>
      </p>
    </div>
    <div v-if="addBookIncrement === 1">
      <div v-if="serverRespondedIsbn">
        <h4>
          {{l('myLibrary.addBook.infoGood')}}
        </h4>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.title')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            {{bookAdded.title}}
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.abstract')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            {{bookAdded.abstract}}
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.genres')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            {{bookAdded.genres.toString()}}
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.author')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            {{bookAdded.author}}
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.edition')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            {{bookAdded.edition}}
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.majorForm')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            {{bookAdded.majorForm}}
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.cover')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            {{bookAdded.cover}}
          </div>
        </div>
      </div>
      <div v-else>
        <icon name="spinner" spin scale="2"></icon>
      </div>
    </div>
    <div v-if="addBookIncrement === 2">
      <div>
        <h4>
          {{l('myLibrary.addBook.enterInfo')}}
        </h4>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.title')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            <input type="text" class="form-control" v-bind:placeholder="l('book.title')">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.abstract')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            <textarea class="form-control" rows="2" v-bind:placeholder="l('book.abstract')"></textarea>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.genres')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            <input type="text" class="form-control" v-bind:placeholder="l('book.genres')">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.author')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            <input type="text" class="form-control" v-bind:placeholder="l('book.author')">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.edition')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            <input type="text" class="form-control" v-bind:placeholder="l('book.edition')">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.majorForm')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            <input type="text" class="form-control" v-bind:placeholder="l('book.majorForm')">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.cover')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            <input type="file" class="form-control" accept="image/*" disabled><br>
            <small>A venir</small>
          </div>
        </div>
      </div>
    </div>
    <div slot="modal-footer" class="modal-footer">
      <button type="button" class="btn btn-danger" @click="show = false">{{l('cancel')}}</button>
      <button v-if="addBookIncrement > 0" type="button" class="btn btn-default" @click="previous">{{l('previous')}}</button>
      <button type="button" class="btn btn-success" @click="next">{{l('next')}}</button>
    </div>
  </modal>
</template>

<script>
import services from '../utils/services';
import { modal } from 'vue-strap'

export default {
  name: 'myLibrary',
  components:{
    modal
  },
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  methods:{
    noIsbn: function(){
      this.addBookIncrement = 2;
    }
  },
  data () {
    return {
      serverRespondedIsbn: false,
      addBookIncrement: 0,
      isbn: '',
      showModalAddBook: false,
      bookAdded: {
        title: '',
        abstract: '',
        genres: [],
        author: '',
        edition: '',
        majorForm: '',
        cover: ''
      }
    }
  },
  methods:{
    previous: function(){
      if (this.addBookIncrement > 0){
        this.addBookIncrement--;
      }
    },
    next: function(){
      if (this.addBookIncrement < 3){
        this.addBookIncrement++;
        if (this.addBookIncrement === 1){
          this.getBookInfo();
        }
      }
    },
    getBookInfo: function(){
      let self = this;
      return services
        .getBookInfo(self,this.isbn)
        .then((res) => {
          self.serverRespondedIsbn = true;
          self.bookAdded = res;
        });
    }
  }
}
</script>

<style lang="sass">

</style>
