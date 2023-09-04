<template>
    <div>
      <h1>Edit Student</h1>
      <form @submit.prevent="updateStudent">
        <!-- Name Input -->
        <div class="form-group">
          <label for="name">Name:</label>
          <input v-model="editedStudent.name" id="name" type="text" class="form-control" required>
        </div>
  
        <!-- Email Input -->
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="editedStudent.email" id="email" type="email" class="form-control" required>
        </div>
  
        <!-- Roll Input -->
        <div class="form-group">
          <label for="roll">Roll:</label>
          <input v-model="editedStudent.roll" id="roll" type="text" class="form-control" required>
        </div>
  
        <!-- Add other fields as needed -->
  
        <!-- Submit Button -->
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  
  // Use router and route from Vue Router
  const router = useRouter();
  const route = useRoute();
  
  // Initialize studentId and editedStudent with route parameter and student data
  const studentId = ref(route.params.id);
  const editedStudent = ref({});
  
  // Fetch the student's data to populate the form
  const getStudentDetails = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/student/${studentId.value}`);
      if (response.ok) {
        editedStudent.value = await response.json();
      } else {
        throw new Error('Failed to fetch student details');
      }
    } catch (error) {
      console.error('Error fetching student details:', error);
    }
  };
  
  // Update the student's data
  const updateStudent = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/student/${studentId.value}`, {
        method: 'PUT', // Use the appropriate HTTP method for updating
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedStudent.value),
      });
  
      if (response.ok) {
        // Redirect back to the student list or view page after a successful update
        router.push({ name: 'StudentDetails', params: { id: studentId.value } });
      } else {
        throw new Error('Failed to update student');
      }
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };
  
  onMounted(() => {
    getStudentDetails();
  });
  </script>
  