<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link tag="li" to="/" class="nav-link" exact active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" to="/cars" class="nav-link" active-class="active">
            <a class="nav-link">Cars</a>
          </router-link>
          <router-link tag="li" to="/car/3" class="nav-link" active-class="active">
            <a class="nav-link">Car 3</a>
          </router-link>
          <router-link tag="li" to="/car/4" class="nav-link" active-class="active">
            <a class="nav-link">Car 4</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {

}
</script>
