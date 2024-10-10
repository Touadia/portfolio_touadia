<template>
  <div>
    <!-- Première Partie : Photo, Description, et Téléchargement du CV -->
    <section class="hero flex flex-col items-center justify-center bg-gray-100 py-8">
      <img src="assets/premium_photo-1720287601920-ee8c503af775.jpeg" alt="Your Photo" class="rounded-full w-32 h-32 mb-4 shadow-md" />
      <h1 class="text-3xl font-bold mb-2">Touadia KONE</h1>
      <p class="text-lg text-center max-w-lg text-gray-700">
        Je suis une développeuse spécialisée en Flutter, passionnée par la transformation digitale et la gestion de projets. J'aide les entreprises à développer des solutions mobiles innovantes pour optimiser leurs processus.
      </p>
      <a href="/documents/cv-touadia.pdf" download class="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Télécharger mon CV
      </a>
    </section>

    <!-- Deuxième Partie : Compétences et Outils -->
    <section class="skills py-12 bg-white">
      <h2 class="text-4xl font-bold text-center mb-8">Mes Compétences & Outils</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        <div class="skill bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 class="text-2xl font-bold mb-2">Compétence 1</h3>
          <p class="text-gray-700">Description de la compétence 1.</p>
        </div>
        <div class="skill bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 class="text-2xl font-bold mb-2">Outil 1</h3>
          <p class="text-gray-700">Description de l'outil 1.</p>
        </div>
        <!-- Ajoute plus de compétences et d'outils ici -->
      </div>
    </section>

    <!-- Troisième Partie : Centres d'Intérêt et Personnes Inspirantes -->
    <section class="interests py-12 bg-gray-100">
      <h2 class="text-4xl font-bold text-center mb-8">Centres d'Intérêt & Personnes Inspirantes</h2>
      <div class="container mx-auto text-center">
        <p class="text-lg text-gray-700 mb-6">
          Je m'intéresse à la musique, aux voyages, à la technologie et à la culture entrepreneuriale. Mes centres d'intérêt m'aident à rester créative et motivée.
        </p>
        <p class="text-lg text-gray-700 mb-6">
          Les personnes qui m'inspirent incluent : Elon Musk, Steve Jobs et Sheryl Sandberg. Leur vision et leur leadership ont eu un impact considérable sur mon parcours professionnel.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero {
  padding-top: 80px;
  padding-bottom: 40px;
  min-height: 50vh;
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
