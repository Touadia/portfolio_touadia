<template>
  <div class="container mx-auto p-8">
    <div class="flex flex-col gap-8 lg:flex-row">
      <!-- Première Colonne : Photo et Description -->
      <div class="w-full lg:w-1/3">
        <!-- Ajout de lg:w-1/2 pour rééquilibrer la première colonne -->
        <div class="grid grid-cols-1 gap-8">
          <!-- Photo Container (avec taille ajustée) -->
          <div
            class="photo overflow-hidden rounded-lg bg-gray-100 p-0 shadow-md"
          >
            <img
              src="assets/IMG_4120.png"
              alt="Your Photo"
              class="w-full rounded-lg object-cover shadow-md"
            />
          </div>

          <!-- Description Container -->
          <div class="description rounded-lg p-6 shadow-md">
            <h3 class="text-2xl font-bold">Développeuse Mobile Flutter</h3>
            <p class="mt-4 text-gray-700">
              Je suis une développeuse spécialisée en Flutter, avec une forte
              expertise en gestion de projets et en transformation digitale.
              J'accompagne les entreprises dans la création d'applications
              mobiles innovantes pour optimiser leurs processus internes.
            </p>
          </div>
        </div>
      </div>

      <!-- Deuxième Colonne : Container Unique plus large -->
      <div class="w-full lg:w-2/3">
        <!-- Augmenté à lg:w-1/2 pour élargir le container unique -->
        <div class="container h-full rounded-lg bg-gray-200 p-6 shadow-md">
          <h3 class="mb-4 text-xl font-bold">Mes Compétences & Outils</h3>
          <div class="w-full lg:w-1/2">
    <div class="grid grid-rows-3 gap-4">
      <!-- Première Ligne (la plus grande) : Container dynamique -->
      <div class="dynamic-container flex-grow rounded-lg bg-gray-200 p-6 shadow-md relative">
        <div v-if="currentContent === 'content1'">
          <h3 class="text-xl font-bold">Contenu 1</h3>
          <p>Ceci est le premier contenu affiché dans le container.</p>
        </div>
        <div v-else>
          <h3 class="text-xl font-bold">Contenu 2</h3>
          <p>Ceci est le deuxième contenu affiché dans le container.</p>
        </div>

        <!-- Bouton pour changer le contenu (placé en bas à gauche du container) -->
        <div class="absolute bottom-4 left-4">
          <button @click="toggleContent" class="bg-blue-500 text-white px-4 py-2 rounded-lg">
            {{ buttonText }}
          </button>
        </div>
      </div>

      <!-- Deuxième et Troisième Lignes sur la même ligne -->
      <div class="flex gap-4">
        <!-- Deuxième Ligne -->
        <div class="second-row flex-1 rounded-lg bg-gray-100 p-6 shadow-md">
          <h3 class="text-xl font-bold">Deuxième Ligne</h3>
          <p>Ceci est le contenu de la deuxième ligne.</p>
        </div>

        <!-- Troisième Ligne -->
        <div class="third-row flex-1 rounded-lg bg-gray-100 p-6 shadow-md">
          <h3 class="text-xl font-bold">Troisième Ligne</h3>
          <p>Ceci est le contenu de la troisième ligne.</p>
        </div>
      </div>
    </div>
  </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Définit l'état actuel du contenu affiché dans le container dynamique
const currentContent = ref('content1');

// Texte du bouton qui change en fonction du contenu
const buttonText = ref('Afficher Contenu 2');

// Fonction pour basculer entre les contenus
const toggleContent = () => {
  if (currentContent.value === 'content1') {
    currentContent.value = 'content2';
    buttonText.value = 'Afficher Contenu 1';
  } else {
    currentContent.value = 'content1';
    buttonText.value = 'Afficher Contenu 2';
  }
};
</script>

<style scoped>
.description {
  background-color: #f5f5f5;
  border: 2px solid #e5e5e5;
  transition: all 0.3s ease;
}

.description:hover {
  background-color: #eef4ed;
  border-color: #d0d0d0;
  transform: translateY(-5px);
}

.photo {
  background-color: #0b2545;
  padding-top: 20px;
}

.photo:hover {
  background-color: #0b2545;
  border-color: #d0d0d0;
  transform: translateY(-5px);
}
.dynamic-container {
  height: 300px; /* Hauteur définie pour le container dynamique */
  position: relative; /* Pour positionner le bouton au bas du container */
}

button {
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2563eb; /* Change la couleur de fond au survol */
}
</style>

<!-- <template>
  <div>
    <ProfileSection />


    <section class="skills bg-white py-12">
      <h2 class="mb-8 text-center text-4xl font-bold">
        Mes Compétences & Outils
      </h2>
      <div class="grid grid-cols-1 gap-8 px-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="skill rounded-lg bg-gray-100 p-6 shadow-md">
          <h3 class="mb-2 text-2xl font-bold">Compétence 1</h3>
          <p class="text-gray-700">Description de la compétence 1.</p>
        </div>
        <div class="skill rounded-lg bg-gray-100 p-6 shadow-md">
          <h3 class="mb-2 text-2xl font-bold">Outil 1</h3>
          <p class="text-gray-700">Description de l'outil 1.</p>
        </div>
      </div>
    </section>

    <section class="interests bg-gray-100 py-12">
      <h2 class="mb-8 text-center text-4xl font-bold">
        Centres d'Intérêt & Personnes Inspirantes
      </h2>
      <div class="container mx-auto text-center">
        <p class="mb-6 text-lg text-gray-700">
          Je m'intéresse à la musique, aux voyages, à la technologie et à la
          culture entrepreneuriale. Mes centres d'intérêt m'aident à rester
          créative et motivée.
        </p>
        <p class="mb-6 text-lg text-gray-700">
          Les personnes qui m'inspirent incluent : Elon Musk, Steve Jobs et
          Sheryl Sandberg. Leur vision et leur leadership ont eu un impact
          considérable sur mon parcours professionnel.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
/* Styles pour la section de téléchargement du CV */
.hero {
  padding-top: 40px; /* Réduction du padding en haut */
  padding-bottom: 20px; /* Réduction du padding en bas */
  min-height: auto; /* Ajustement pour réduire la hauteur minimale */
}

.hero img {
  width: 8rem;
  height: 8rem;
}

.skills {
  background-color: #ffffff;
}

.skill {
  background-color: #f8f9fa;
  border-radius: 8px;
}

.interests {
  background-color: #f5f5f5;
}
</style> -->
