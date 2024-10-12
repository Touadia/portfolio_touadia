<template>
  <div class="a">
    <!-- Navbar (importée pour être disponible sur toutes les pages) -->
    <Navbar />

    <!-- Le contenu dynamique des pages -->
    <router-view />

    <!-- Optionnel : Ajouter un footer si tu en as besoin -->
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
// Importer la navbar pour l'utiliser globalement
import Navbar from '~/components/Navbar.vue'
// import Footer from '~/components/Footer.vue'

</script>

<style>
/* Global styles */
.a {
  padding: 20px; /* Ajuste la valeur du padding ici */
 }

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}
</style>
