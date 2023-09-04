<!-- StudentDetails.vue -->
<template>
  <Navbar/>
    <div class="text-center">
      <h1>Student Details</h1>
      <p>Name: {{ student.name }}</p>
      <p>Email: {{ student.email }}</p>
      <p>Roll: {{ student.roll }}</p>
      <!-- Add other student details here -->
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
import Navbar from './Navbar.vue';
  
  const route = useRoute();
  const studentId = ref(route.params.id);
  const student = ref({});
  
  const getStudentDetails = async () => {
    // Fetch student details using the studentId
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/student/${studentId.value}`);
      if (response.ok) {
        student.value = await response.json();
      } else {
        throw new Error('Failed to fetch student details');
      }
    } catch (error) {
      console.error('Error fetching student details:', error);
    }
  };
  
  onMounted(() => {
    getStudentDetails();
  });
  </script>
  