<script setup>
import Navbar from './Navbar.vue';


</script>



<template>
  <Navbar/>
<div class="row mt-5">
    <div class="col-md-3"></div>
    <div class="col-md-6">
 <form class="rounded" style="background-color: green; padding: 20px; ">
  <!-- Email input -->
  <h1 class="text-center text-white ">Login</h1>
  <div class="form-outline mb-4 bg-white rounded" >
    <input name="email" type="email" id="form1Example1" class="form-control" />
    <label class="form-label" for="form1Example1">Email address</label>
  </div>
  <!-- Password input -->
  <div class="form-outline mb-4 bg-white rounded">
    <input name="password" type="password" id="form1Example2" class="form-control" />
    <label class="form-label" for="form1Example2">Password</label>
  </div>
  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block">Sign in</button>
</form>
    </div>
    <div class="col-md-3"></div>
</div>
   
  
 
</template>
