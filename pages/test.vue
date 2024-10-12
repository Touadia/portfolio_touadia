<template>
    <div>
      <!-- Première Partie : Photo et Description -->
      <ProfileSection />
  
      <!-- Deuxième Partie : Derniers Projets -->
      <section class="projects-preview py-12 bg-white">
        <h2 class="text-4xl font-bold text-center mb-8">Mes Derniers Projets</h2>
  
        <!-- Affichage de quelques projets -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          <div class="project bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="assets/premium_photo-1720287601920-ee8c503af775.jpeg" alt="Project 1" class="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 class="text-2xl font-bold mb-2">Project 1</h3>
            <p class="text-gray-700">Application mobile de livraison de produits alimentaires et de restaurants.</p>
          </div>
          <div class="project bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="assets/premium_photo-1720287601920-ee8c503af775.jpeg" alt="Project 2" class="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 class="text-2xl font-bold mb-2">Project 2</h3>
            <p class="text-gray-700">Application de protection contre l'usurpation d'identité développée avec Flutter.</p>
          </div>
          <div class="project bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="assets/premium_photo-1720287601920-ee8c503af775.jpeg" alt="Project 2" class="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 class="text-2xl font-bold mb-2">Project 3</h3>
            <p class="text-gray-700">Application de protection contre l'usurpation d'identité développée avec Flutter.</p>
          </div>
          <!-- Ajoute plus de projets ici si nécessaire -->
        </div>
  
        <!-- Lien pour voir plus de projets -->
        <div class="text-center mt-8">
          <router-link to="/projects" class="text-blue-600 hover:text-blue-800 text-lg font-semibold">
            Voir plus de projets
          </router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  
  h1 {
    font-size: 2rem; /* Réduire la taille du titre */
  }
  
  p {
    font-size: 1.125rem; /* Réduire la taille du texte */
    max-width: 40rem; /* Limiter la largeur du texte */
  }
  
  .projects-preview {
    background-color: #ffffff;
  }
  
  .project img {
    border-radius: 8px;
  }
  </style>
  

  <!-- <span>+33 07 53 19 62 26</span> -->
  <!-- <a href="www.linkedin.com/in/touadia-koné-b194b51b2" class="text-blue-600 hover:underline"
  target="_blank"> -->
  <!-- <a href="mailto:konetouadia@gmail.com" class="text-blue-600 hover:underline">
    konetouadia@gmail.com
  </a> -->