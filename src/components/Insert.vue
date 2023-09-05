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
  <div>
    <Navbar />
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form class="rounded p-4" style="background-color: #f4f4f4;" @submit.prevent="submitForm">
            <h1 class="text-center mb-4" style="color: #007bff;">Insert Data</h1>
            <!-- Name input -->
            <div class="mb-4">
              <label for="form1Example1" class="form-label" style="color: #555;">Name</label>
              <input v-model="formData.name" type="text" id="form1Example1" class="form-control" />
            </div>
            <!-- Email input -->
            <div class="mb-4">
              <label for="form1Example2" class="form-label" style="color: #555;">Email</label>
              <input v-model="formData.email" type="email" id="form1Example2" class="form-control" />
            </div>
            <!-- Roll input -->
            <div class="mb-4">
              <label for="form1Example3" class="form-label" style="color: #555;">Roll</label>
              <input v-model="formData.roll" type="text" id="form1Example3" class="form-control" />
            </div>
            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block" style="background-color: #007bff;">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Custom styles for the form */
.form-control {
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  background-color: #fff;
  transition: border-color 0.3s;
}

.form-label {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>

