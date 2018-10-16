<template>
  <div>
    Second Counter {{ counter }}
  </div>
</template>
<script>
  export default {
    computed: {
      counter () {
        return this.$store.getters.computedCounter
      }
    }
  }
</script>
