<template>
  <div>
    <div id="pages-header">
      <avatar style="display:inline-block;" v-bind:username="user.firstName + ' ' + user.lastName" :size="100"></avatar>
      <p><h3>{{user.firstName}} {{user.lastName}}</h3></p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 col-md-offset-1">
          <div id="profile-body">
            <tabs v-model="activeTab" nav-style="tabs" justified>
              <tab v-bind:header="l('profile.infos')">
                <ul class="list-group">
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col-xs-3">
                        <b>{{l('profile.points')}}</b>
                      </div>
                      <div class="col-xs-9">
                        {{user.points}}
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col-xs-3">
                        <b>{{l('profile.level')}}</b>
                      </div>
                      <div class="col-xs-9">
                        0
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col-xs-3">
                        <b>{{l('profile.memberSince')}}</b>
                      </div>
                      <div class="col-xs-9">
                        {{formatDate}}
                      </div>
                    </div>
                  </li>
                </ul>
              </tab>
              <tab v-bind:header="l('profile.appointment')">
                <h3>{{l('profile.appointmentsFor')}}</h3>
                <div v-if="appointmentsForAvailable">
                  <accordion :one-at-atime="true" type="info">
                    <panel v-for="appointment in appointmentsFor" type="primary">
                      <span slot="header">
                        <b>With:</b> Tabernac<br>
                        <b>When:</b> 10/01/2017<br>
                        <b>Where:</b> Insa
                      </span>
                      <gmap-map
                        :center="center"
                        :zoom="7"
                        style="width: 100%; height: 400px"
                      >
                        <gmap-marker
                          :key="index"
                          :position="marker.position"
                          :clickable="true"
                          :draggable="true"
                          @click="center=marker.position"
                        ></gmap-marker>
                      </gmap-map>
                    </panel>
                  </accordion>
                </div>
                <div v-else class="alert alert-info" role="alert">
                  {{l('profile.noAppointments')}}
                </div>
                <h3>{{l('profile.appointmentsWith')}}</h3>
                <div v-if="appointmentsWithAvailable">
                  <accordion :one-at-atime="true" type="info">
                    <panel v-for="appointment in appointmentsWith" type="primary">
                      <span slot="header">
                        <b>With:</b> Tabernac<br>
                        <b>When:</b> 10/01/2017<br>
                        <b>Where:</b> Insa
                      </span>
                      <gmap-map
                        :center="center"
                        :zoom="7"
                        style="width: 100%; height: 400px"
                      >
                        <gmap-marker
                          :key="index"
                          :position="marker.position"
                          :clickable="true"
                          :draggable="true"
                          @click="center=marker.position"
                        ></gmap-marker>
                      </gmap-map>
                    </panel>
                  </accordion>
                </div>
                <div v-else class="alert alert-info" role="alert">
                  {{l('profile.noAppointments')}}
                </div>
              </tab>
              <!--<tab v-bind:header="l('profile.param')">
                ...
              </tab>-->
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import services from '../utils/services';
import Avatar from 'vue-avatar'
import { tabs,tab,accordion,panel } from 'vue-strap'

export default {
  name: 'Profile',
  components: {
    avatar: Avatar.Avatar,
    tabs,
    tab,
    accordion,
    panel
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    formatDate() {
      var d = new Date(this.$store.state.user.signUpDate);
      var day = d.getDate();
      var monthIndex = d.getMonth();
      var year = d.getFullYear();
      return day + ' ' + this.$store.state.mlang.monthNames[monthIndex] + ' ' + year;
    },
    appointmentsForAvailable(){
      if (this.appointmentsFor){
        if (this.appointmentsFor.length > 0){
          return true;
        }
      }
      return false;
    },
    appointmentsWithAvailable(){
      if (this.appointmentsWith){
        if (this.appointmentsWith.length > 0){
          return true;
        }
      }
      return false;
    }
  },
  data () {
    return {
      activeTab: 0,
      appointmentsFor: [],
      appointmentsWith: [],
      center: {lat: 10.0, lng: 10.0},
      marker: {
        position: {lat: 10.0, lng: 10.0}
      }
    }
  },
  mounted: function(){
    var self = this;
    return services
      .getUserAppointmentsFor(self)
      .then((res1) => {
        self.appointmentsFor = res1;
        services
          .getUserAppointmentsWith(self)
          .then((res2) => {
            self.appointmentsWith = res2;
          });
      });
  }
}
</script>

<style lang="sass">
@import "../assets/css/babelbooks";

#profile-body{
  margin-top:20px;
  padding:20px;
  border: 1px solid #eee;
}

</style>
