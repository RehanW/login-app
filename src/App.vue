<template>
<div>
    <nav class="navbar navbar-expand-lg custom-navbar">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Brsk</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" to="/about">About</router-link>
            <a v-if="$store.state.email" class="nav-link" @click="logout">Logout</a>
          </div>
        </div>
      </div>
    </nav>
    <div class="container page-body">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #002d72;
  height: 100vh;
}

.custom-navbar {
  background-color: #e10098;
  margin-bottom: 5em;
}

.custom-navbar .nav-link {
  color: #ffffff;
}

.custom-navbar .nav-link.active {
  color: #ffffff;
}

.custom-navbar .navbar-brand {
  color: #ffffff;
}

.btn-primary {
  background-color: #e10098;
  border-color: #e10098;
}
</style>
<script>
export default {
  methods: {
    logout(){
      this.$store.commit('logout')
    }
  },
  mounted(){
    this.$store.commit('initializeStore')
  }
}
</script>
