<template>
  <div id="app">
    <NavigasiAtas />
    <router-view/>
    <b-loading v-model="loading" ></b-loading>
  </div>
</template>

<script>
import NavigasiAtas from './components/NavigasiAtas'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    NavigasiAtas
  },
  computed: {
    ...mapState(['loading'])
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans:ital@1&family=Source+Sans+Pro:ital,wght@1,900&display=swap');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.judul{
  font-family: 'Source Sans Pro', sans-serif;
}
.subjudul{
  font-family: 'Open Sans', sans-serif;
}
.isi{
  font-family: 'Lato', sans-serif;
}
</style>
