<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form class="rounded p-4" style="background-color: #f5f5f5;" @submit.prevent="submitForm">
            <!-- User Name input -->
            <div class="mb-4">
              <label for="form1Example1" class="form-label">User Name</label>
              <input v-model="userData.name" type="text" id="form1Example1" class="form-control" />
            </div>
            <!-- Email input -->
            <div class="mb-4">
              <label for="form1Example2" class="form-label">Email address</label>
              <input v-model="userData.email" type="email" id="form1Example2" class="form-control" />
            </div>
            <!-- Password input -->
            <div class="mb-4">
              <label for="form1Example3" class="form-label">Password</label>
              <input v-model="userData.password" type="password" id="form1Example3" class="form-control" />
            </div>
            <!-- Confirm Password input -->
            <div class="mb-4">
              <label for="form1Example4" class="form-label">Confirm Password</label>
              <input v-model="userData.password_confirmation" type="password" id="form1Example4" class="form-control" />
            </div>
            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
  const route = useRoute();
const userData = {
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
};

const submitForm = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    // Assuming your API returns a token upon successful registration
    const responseData = await response.json();
    const token = responseData.token;

    // Store the token in local storage or Vuex store
    localStorage.setItem('authToken', token);
    console.log(responseData);

    // Redirect to a different page or perform other actions after successful registration
    // For example, you can use Vue Router to navigate to a new page:
     router.push('/login');
  } catch (error) {
    // Handle registration error, display error message, etc.
    console.log('Registration error:', error);
  }
};
</script>
