<template>
  <modal v-model="showModal" effect="fade">
    <!-- custom header -->
    <div slot="modal-header" class="modal-header">
      <h3 class="modal-title">
         {{l('myLibrary.addBook.title')}}
      </h3>
    </div>
    <div v-if="addBookIncrement === 0">
      <div class="form-group"
            v-bind:class="{ 'has-error has-feedback': !validIsbn }">
        <label class="control-label" for="isbn">ISBN</label>
        <input type="text" class="form-control" id="isbn" v-model="isbn" placeholder="0-7645-2641-3">
        <span v-show="!validIsbn" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
        <span v-show="!validIsbn" id="inputError2Status" class="sr-only">(error)</span>
      </div>
      <p>
        {{l('myLibrary.addBook.isbn')}}
      </p>
      <img src="/assets/img/isbn-help.jpg" style="max-height:100px;" id="book-img" alt="" />
      <p>
        <small style="color:red;">{{l('myLibrary.addBook.noIsbn')}} <br>
        <button type="button" class="btn btn-info" @click="noIsbn">{{l('myLibrary.addBook.noIsbnButton')}}</button></small>
      </p>
    </div>
    <div v-if="addBookIncrement === 1">
      <div>
        <h4 v-if="isbnPresent">
          ISBN: <b>{{isbn}}</b><br>
          {{l('myLibrary.addBook.infoGood')}}
          <span v-if="!serverRespondedIsbn">
            <icon name="spinner" spin></icon>
          </span>
          <span v-else>
            <button type="button" class="btn btn-success" @click="modify = true">{{l('myLibrary.addBook.modify')}}</button>
          </span>
        </h4>
        <h4 v-else>
          {{l('myLibrary.addBook.enterInfo')}}
        </h4>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.title')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            <input type="text" class="form-control" v-model="bookAdded.title" v-bind:placeholder="l('book.title')" :disabled="!modify">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.abstract')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            <textarea class="form-control" rows="4" v-model="bookAdded.abstract" v-bind:placeholder="l('book.abstract')" :disabled="!modify"></textarea>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.genres')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            <input type="text" class="form-control" v-model="bookAdded.genres" v-bind:placeholder="l('book.genres')" :disabled="!modify">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.author')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            <input type="text" class="form-control" v-model="bookAdded.author" v-bind:placeholder="l('book.author')" :disabled="!modify">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.edition')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            <input type="text" class="form-control" v-model="bookAdded.edition" v-bind:placeholder="l('book.edition')" :disabled="!modify">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.majorForm')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">

            <input type="text" class="form-control" v-model="bookAdded.majorForm" v-bind:placeholder="l('book.majorForm')" :disabled="!modify">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('book.cover')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            <span v-if="isbnPresent">
              <img v-bind:src="bookAdded.cover" class="book-img" alt="" />
            </span>
            <span v-else>
              <input type="file" class="form-control" accept="image/*" disabled>
              <small>A venir</small>
            </span>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <b>{{l('myLibrary.addBook.isAvailable')}}</b>
          </div>
          <div class="col-xs-12 col-sm-8">
            <toggle-button v-model="isAvailable">{{l('myLibrary.addBook.available')}}</toggle-button>
          </div>
        </div>
      </div>
    </div>
    <div slot="modal-footer" class="modal-footer">
      <button type="button" class="btn btn-danger" @click="showModal = false">{{l('cancel')}}</button>
      <button v-if="addBookIncrement > 0" type="button" class="btn btn-default" @click="previous">{{l('previous')}}</button>
      <button v-if="addBookIncrement < 1" type="button" class="btn btn-success" @click="next">{{l('next')}}</button>
      <button v-else type="button" class="btn btn-success" @click="done">
        <span v-if="serverRespondedAddBook">{{l('done')}}</span>
        <span v-else><icon name="spinner" spin></icon></span>
      </button>
    </div>
  </modal>
</template>

<script>
import services from '../utils/services';
import { modal,toggleButton } from 'vue-strap'

export default {
  name: 'addbook',
  components:{
    modal,
    toggleButton
  },
  props: ['value'],
  data () {
    return {
      showModal: false,
      serverRespondedIsbn: false,
      addBookIncrement: 0,
      isbn: '',
      validIsbn: true,
      isbnPresent: true,
      modify: true,
      serverRespondedAddBook: true,
      bookAdded: {
        title: '',
        abstract: '',
        genres: [],
        author: '',
        edition: '',
        majorForm: '',
        cover: ''
      },
      isIndexed: false,
      isAvailable: true
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods:{
    previous: function(){
      if (this.addBookIncrement > 0){
        this.addBookIncrement--;
        this.isbn = '';
        this.validIsbn = true;
      }
    },
    next: function(){
      if (this.addBookIncrement < 1){
        if(this.isbn !== ''){
          this.resetBook();
          this.serverRespondedIsbn = false;
          this.addBookIncrement++;
          if (this.addBookIncrement === 1){
            this.modify = false;
            this.getBookInfo();
          }
        }else{
          this.validIsbn = false;
        }
      }
    },
    resetBook: function(){
      this.bookAdded = {
        title: '',
        abstract: '',
        genres: [],
        author: '',
        edition: '',
        majorForm: '',
        cover: ''
      }
    },
    done: function(){
      let self = this;
      var isbnFormatted = this.isbn.replace(/\D/g,'');
      this.serverRespondedAddBook = false;
      var book = {
        book: {
          isbn: isbnFormatted,
          origin: this.user.username,
          available: this.isAvailable
        }
      };
      if (this.isIndexed){
        return services
          .addBook(this,book)
          .then((res) => {
            // services.updateUserPoints(self,2);
            self.serverRespondedAddBook = true;
            self.showModal = false;
            self.$emit('bookAdded')
          });
      }else{
        var bookMetadata = {
          book: this.bookAdded
        };
        bookMetadata.book.id = isbnFormatted;
        return services
          .putBookInfo(this,bookMetadata)
          .then((res) => {
            services
              .addBook(this,book)
              .then((res) => {
                // services.updateUserPoints(self,2);
                self.serverRespondedAddBook = true;
                self.showModal = false;
                self.$emit('bookAdded')
              });
          });
      }
    },
    getBookInfo: function(){
      let self = this;
      var isbnFormatted = this.isbn.replace(/\D/g,'');
      return services
        .getBookInfo(self,isbnFormatted)
        .then((res) => {
          self.serverRespondedIsbn = true;
          self.bookAdded = res.book;
        });

    },
    noIsbn: function(){
      this.resetBook();
      this.addBookIncrement = 1;
      this.modify = true;
      this.isbnPresent = false;
    }
  },
  watch: {
    showModal (val, old) {
      this.$emit('input', val)
    },
    value (val, old) {
      if (val !== old) this.showModal = val
    }
  }
}
</script>
