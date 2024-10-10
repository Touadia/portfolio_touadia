<template>
  <div>
    <!-- Première Partie : Photo, Description, et Téléchargement du CV -->
    <ProfileSection />


    <!-- Deuxième Partie : Compétences et Outils -->
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
        <!-- Ajoute plus de compétences et d'outils ici -->
      </div>
    </section>

    <!-- Troisième Partie : Centres d'Intérêt et Personnes Inspirantes -->
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
</style>
