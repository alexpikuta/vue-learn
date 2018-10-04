<template>
  <div>
    <h2>Car id {{ id }}</h2>

    <br>
    <button class="btn btn-secondary" @click="goBackToCars">Back</button>
    <br>
    <br>

    <router-link
      tag="button"
      class="btn btn-info"
      :key="id"
      :to="{name: 'CarInfo', params: {id: id}, query: {name: 'Nissan', year: '2009'}, hash: '#scroll'}"
    >
      Info
    </router-link>

    <br>
    <br>

    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        id: this.$route.params['id']
      }
    },
    methods: {
      goBackToCars () {
        this.$router.push('/cars')
      }
    },
    watch: {
      $route (toR, fromR) {
        this.id = toR.params['id']
      }
    }
  }
</script>
