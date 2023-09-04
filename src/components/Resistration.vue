<template>
  <div>
    <Navbar />
    <div class="row mt-5">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form class="rounded" style="background-color: green; padding: 20px; " @submit.prevent="submitForm">
          <!-- User Name input -->
          <div class="form-outline mb-4 bg-white rounded" >
            <input v-model="userData.name" type="text" id="form1Example1" class="form-control" />
            <label class="form-label" for="form1Example1">User Name</label>
          </div>
          <!-- Email input -->
          <div class="form-outline mb-4 bg-white rounded" >
            <input v-model="userData.email" type="email" id="form1Example2" class="form-control" />
            <label class="form-label" for="form1Example2">Email address</label>
          </div>
          <!-- Password input -->
          <div class="form-outline mb-4 bg-white rounded">
            <input v-model="userData.password" type="password" id="form1Example3" class="form-control" />
            <label class="form-label" for="form1Example3">Password</label>
          </div>
          <div class="form-outline mb-4 bg-white rounded">
            <input v-model="userData.confirm_password" type="password" id="form1Example4" class="form-control" />
            <label class="form-label" for="form1Example4">Confirm Password </label>
          </div>
          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block">Sign in</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';

const userData = {
  name: '',
  email: '',
  password: '',
  confirm_password: ''
};

const submitForm = async () => {
  const formData = new FormData();
  formData.append('name', userData.name);
  formData.append('email', userData.email);
  formData.append('password', userData.password);
  formData.append('confirm_password', userData.confirm_password);

  try {
    const response = await fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token;

      // Store the token in local storage
      localStorage.setItem('token', token);
      console.log('Token stored in local storage:', token);
    } else {
      console.log('Registration failed:', response.statusText);
    }
  } catch (error) {
    console.log('An error occurred:', error);
  }
};
</script>
