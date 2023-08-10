<template>
  <div class="container">
    <div class="row mb-3">
      <HelloWorld 
      heading="Welcome to Brsk" 
      msg="Brsk, bringing fast reliable fiber to the UK"
      />
    </div>
    <div class="container justify-content-center">
      <div class="row mb-3">
        <h3>How may we help you today?</h3>
        <p>Would you like to login and view your account or would you like to register and become part of the family?</p>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center pt-3">
        <div class="col-3 mb-3">
          <div class="card" style="width: 18rem;">
            <img src="../assets/istockphoto-1368151370-170667a.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Follow me to Login</h5>
              <p class="card-text">Login to View and Edit your account</p>
              <router-link class="btn btn-primary" to="/login">Login</router-link>
            </div>
          </div>
        </div>
        <div class="col-3 mb-3">
          <div class="card" style="width: 18rem;">
            <img src="../assets/registration-hand-pressing-button-interface-blue-background-49410297.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Follow me to Register</h5>
              <p class="card-text">register and become part of the family</p>
              <router-link class="btn btn-primary" to="/register">Register</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.card {
  background-color: #e10098;
  color: #ffffff;
  height: 400px;
}

.card .btn-primary {
  background-color: #002d72;
}
</style>