<script setup>
import Navbar from './Navbar.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const formData = ref({
  name: '',
  email: '',
  roll: '',
});

const submitForm = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      // Clear the form after successful submission
      formData.value.name = '';
      formData.value.email = '';
      formData.value.roll = '';
      router.push('/');
      // You can also update the student list if needed
    } else {
      throw new Error('Failed to insert data');
    }
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};
</script>


<template>
  <Navbar/>
<div class="row mt-5">
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <form class="rounded" style="background-color: green; padding: 20px;" @submit.prevent="submitForm">
        <!-- Email input -->
        <h1 class="text-center text-white">Insert Data</h1>
        <div class="form-outline mb-4 bg-white rounded">
          <input v-model="formData.name" type="text" id="form1Example1" class="form-control" />
          <label class="form-label" for="form1Example1">Name</label>
        </div>
        <!-- Email input -->
        <div class="form-outline mb-4 bg-white rounded">
          <input v-model="formData.email" type="email" id="form1Example2" class="form-control" />
          <label class="form-label" for="form1Example2">Email</label>
        </div>
        <div class="form-outline mb-4 bg-white rounded">
          <input v-model="formData.roll" type="text" id="form1Example3" class="form-control" />
          <label class="form-label" for="form1Example3">Roll</label>
        </div>
        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block">Submit</button>
      </form>
    </div>
    <div class="col-md-3"></div>
</div>
   
  
 
</template>
