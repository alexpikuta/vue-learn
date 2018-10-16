<template>
  <div class="pt-2">
    <button class="btn btn-success" @click="updateCounter(1)">Add</button>
    <button class="btn btn-danger" @click="updateCounter(-1)">Sub</button>
  </div>
</template>
<script>
  export default {
    methods: {
      updateCounter(val) {
        this.$store.dispatch('asyncChangeCounter', val)
      }
    }
  }
</script>
