<template>
  <Navbar />
  <div class="row mt-5">
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <form class="rounded p-4" style="background-color: #f5f5f5;" @submit.prevent="submitForm">
        <h1 class="text-center mb-4">Login</h1>
        <!-- Email input -->
        <div class="mb-4">
          <label for="form1Example1" class="form-label">Email address</label>
          <input v-model="userData.email" type="email" id="form1Example1" class="form-control" />
        </div>
        <!-- Password input -->
        <div class="mb-4">
          <label for="form1Example2" class="form-label">Password</label>
          <input v-model="userData.password" type="password" id="form1Example2" class="form-control" />
        </div>
        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block">Sign in</button>
      </form>
    </div>
    <div class="col-md-3"></div>
  </div>
</template>

<style>
/* Custom styles for the login form */
.form-control {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
}

.form-label {
  font-weight: bold;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
  color: #fff;
}
</style>


<script setup>
import Navbar from './Navbar.vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
  const route = useRoute();
const userData = {
  email: '',
  password: '',
};

const submitForm = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    // Assuming your API returns a token upon successful login
    const responseData = await response.json();
    const token = responseData.token;

    // Store the token in local storage or Vuex store
    localStorage.setItem('authToken', token);

    // Redirect to a different page or perform other actions after successful login
    // For example, you can use Vue Router to navigate to a new page:
    router.push('/');
  } catch (error) {
    // Handle login error, display error message, etc.
    console.error('Login error:', error);
  }
};
</script>
