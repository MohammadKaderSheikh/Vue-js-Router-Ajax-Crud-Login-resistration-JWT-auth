<!-- Dashboard.vue -->
<template>
  <div>
    <Navbar/>
    <!-- Your dashboard content here -->
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';

const router = useRouter();

const logout = () => {
  // Clear the authentication token
  localStorage.removeItem('authToken');

  // Redirect to the login page
  router.push('/login');
};
</script>
