<template>
  <div>
    <p>Full Info</p>
    <ul>
      <li>Name: {{ year }} </li>
      <li>Year: 2013</li>
    </ul>

    <div class="scroll"></div>
    <p id="scroll">bottom</p>
  </div>
</template>
<script>
  export default {
    computed: {
      year() {
        return this.$route.query.name
      }
    }
  }
</script>
<style scoped>
  .scroll {
    width: 200px;
    height: 1000px;
    background: lightgreen;
  }
</style>
