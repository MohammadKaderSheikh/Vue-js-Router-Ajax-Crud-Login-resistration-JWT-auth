<script setup>
  import Navbar from './Navbar.vue';
  import { ref, onMounted } from 'vue';
  
  // Define a reactive property to store the products
  const products = ref([]);
  
  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      products.value = data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
  // Call the fetchProducts function when the component is mounted
  onMounted(() => {
    fetchProducts();
  });
  </script>

<template>
    <div>
      <Navbar />
      <div class="hero">
        <div class="hero-content">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Discover amazing products and shop with confidence.</p>
        <div class="cta-buttons">
            <button class="btn btn-primary">Shop Now</button>
            <button class="btn btn-secondary">Learn More</button>
        </div>
        </div>
    </div>
      <div class="container mt-5">
        <h1 class="text-center mb-4">Product List</h1>
        <div class="row">
          <div class="col-md-4" v-for="product in products" :key="product.id">
            <div class="card mb-4 shadow-sm">
              <img
                src="data:image/jpeg;base64,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"
                class="card-img-top"
                alt="Product Image"
                style="height: 250px; object-fit: cover;"
              />
              <div class="card-body">
                <h4 class="card-title">{{ product.name }}</h4>
                <p class="card-text">{{ product.description }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button class="btn btn-sm btn-outline-secondary">
                      View Details
                    </button>
                    <button class="btn btn-sm btn-primary">Add to Cart</button>
                  </div>
                  <p class="text-muted">$ {{ product.price }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <style>
  /* Custom styles for the product list */
  .hero {
  background-image: url('data:image/jpeg;base64,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');
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 100px 0;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 30px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ccc;
}

.btn-secondary:hover {
  background-color: #e2e6e9;
}
  .card {
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card-img-top {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
  
  /* Responsive design for smaller screens */
  @media (max-width: 768px) {
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  .product-list {
    margin: 20px;
  }
  </style>
  