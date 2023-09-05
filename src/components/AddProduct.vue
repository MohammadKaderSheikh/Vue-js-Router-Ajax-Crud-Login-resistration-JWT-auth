<template>
    <div>
      <Navbar />
      <div class="container mt-4">
        <h1>Add New Product</h1>
        <form @submit.prevent="addProduct">
          <!-- Product name input -->
          <div class="mb-3">
            <label for="productName" class="form-label">Product Name</label>
            <input
              v-model="newProduct.name"
              type="text"
              class="form-control"
              id="productName"
              required
            />
          </div>
          <!-- Product slug input -->
          <div class="mb-3">
            <label for="productSlug" class="form-label">Product Slug</label>
            <input
              v-model="newProduct.slug"
              type="text"
              class="form-control"
              id="productSlug"
              required
            />
          </div>
          <!-- Product description input -->
          <div class="mb-3">
            <label for="productDescription" class="form-label">Description</label>
            <textarea
              v-model="newProduct.description"
              class="form-control"
              id="productDescription"
              rows="4"
            ></textarea>
          </div>
          <!-- Product price input -->
          <div class="mb-3">
            <label for="productPrice" class="form-label">Price</label>
            <input
              v-model="newProduct.price"
              type="number"
              class="form-control"
              id="productPrice"
              required
            />
          </div>
          <!-- Submit button -->
          <button type="submit" class="btn btn-primary">Add Product</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter, useRoute } from 'vue-router';
  const router = useRouter();
  const route = useRoute();
  import Navbar from '../components/Navbar.vue';
  import { ref } from 'vue';
  
  const newProduct = ref({
    name: '',
    slug: '',
    description: '',
    price: null,
  });
  
  const addProduct = async () => {
  try {
    const authToken = localStorage.getItem('authToken'); // Get the authentication token from localStorage

    if (!authToken) {
      // If the user is not authenticated (token is missing), redirect to the login page
      router.push('/login');
      return;
    }

    const response = await fetch('http://127.0.0.1:8000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`, // Include the token in the Authorization header
      },
      body: JSON.stringify(newProduct.value),
    });

    if (!response.ok) {
      throw new Error('Failed to add product');
    }

    // Reset the form after successful submission
    newProduct.value = {
      name: '',
      slug: '',
      description: '',
      price: null,
    };
    router.push('/product');
    // Redirect or perform other actions if needed
  } catch (error) {
    console.error('Error adding product:', error);
  }
};
  </script>
  