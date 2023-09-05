<script setup>
import { stringifyQuery } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import TheWelcome from '../components/TheWelcome.vue'


import {ref , onMounted } from 'vue';
  const students = ref([]);
  const getPost = async ()=>{
    return fetch('http://127.0.0.1:8000/api/student')
    .then(res => res.json() )
  }
  onMounted(()=> getPost().then(data =>{
    students.value = data 
    
  }))

  const deleteStudent = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/student/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // If the delete request was successful, remove the deleted student from the list
      students.value = students.value.filter((student) => student.id !== id);
    } else {
      throw new Error('Failed to delete student');
    }
  } catch (error) {
    console.error('Error deleting student:', error);
  }
};


onMounted(() => {
    getPost();
});

const token = localStorage.getItem('authToken');
console.log(token);


</script>

<template>
  <Navbar/>
  <div>
    <div  class="container">
    <table class="table">
      <thead>
        <th> Name </th>
        <th> Email </th>
        <th> Roll </th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr   v-for="student in students" :key="student.id" style="border: 2px solid red; padding: 20px;  margin: 20px; border-radius: 5px;">
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.roll }}</td>
          <td>
            <router-link :to="{ name: 'StudentDetails', params: { id: student.id } }" class="btn btn-info m-1">View</router-link>
            <router-link :to="{ name: 'EditStudent', params: { id: student.id } }" class="btn btn-success m-1">Edit</router-link>
            <button class="btn btn-danger m-1" @click="deleteStudent(student.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    </div>
   
  </div>
</template>
