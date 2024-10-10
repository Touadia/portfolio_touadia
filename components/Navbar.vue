<template>
    <header class="header">
      <!-- Home Icon to navigate to the Home page -->
      <router-link to="/" class="home-icon">
        <i class="fas fa-home"></i> <!-- FontAwesome icon for home -->
      </router-link>
  
      <nav class="nav">
        <ul>
          <li><router-link to="/about">ABOUT ME</router-link></li>
          <li><router-link to="/projects">PROJECTS</router-link></li>
          <li><router-link to="/skills">SKILLS</router-link></li>
          <li><a href="#contact">CONTACT</a></li> <!-- Lien vers le footer -->
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: #8DA9C4;
    border-radius: 20px;

  }
  
  .home-icon {
    font-size: 1.8em;
    color: #000;
    text-decoration: none;
  }
  
  .home-icon:hover {
    color: #007bff; /* Optional hover effect */
  }
  
  .nav ul {
    list-style: none;
    display: flex;
    gap: 30px;
  }
  
  .nav ul li a {
    text-decoration: none;
    color: #000;
    font-size: 1em;
  }
  
  .nav ul li a:hover {
    text-decoration: underline;
  }
  </style>
  