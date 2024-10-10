<template>
    <footer id="contact" class="footer bg-gray-900 text-white py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4">Contact Me</h2>
        <p class="mb-2">Phone: +123 456 789</p>
        <p class="mb-2">Email: laurent@example.com</p>
        <p class="mb-4">LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" class="text-blue-400">LinkedIn Profile</a></p>
        
        <!-- Other contact methods can be added here -->
        
        <div class="social-icons mt-4">
          <!-- Add social media icons if necessary -->
          <a href="https://github.com/yourgithub" target="_blank" class="text-gray-400 hover:text-white mx-2">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" class="text-gray-400 hover:text-white mx-2">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .footer {
    background-color: #1f2937;
    color: #fff;
  }
  
  .social-icons a {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    color: #fff;
  }
  
  .social-icons a:hover {
    color: #007bff;
  }
  </style>
  