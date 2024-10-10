<template>
  <div class="container mx-auto p-8">
    <div class="flex flex-col gap-8 lg:flex-row">
      <!-- Première Partie : 4 containers alignés 2 par 2 -->
      <div class="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:w-2/3">
        <!-- Ligne 1 : Containers 1 et 2 (2 par ligne avec le premier plus large) -->
        <div class="col-span-2 flex gap-8">
          <!-- Premier Container : Plus large -->
          <div
            class="description flex-grow rounded-lg p-6 shadow-md"
            style="flex-basis: 70%"
          >
            <h3 class="text-2xl font-bold">Développeuse Mobile Flutter</h3>
            <p class="mt-4 text-gray-700">
              Je suis une développeuse spécialisée en Flutter, avec une forte
              expertise en gestion de projets et en transformation digitale.
              J'accompagne les entreprises dans la création d'applications
              mobiles innovantes pour optimiser leurs processus internes.
            </p>
          </div>

          <!-- Deuxième Container : Plus étroit mais ajusté -->
          <div
            class="photo w-1/2 overflow-hidden rounded-lg bg-gray-100 p-0 shadow-md"
          >
            <img
              src="assets/IMG_4120.png"
              alt="Your Photo"
              class="h-full w-full object-cover pt-4"
            />
          </div>
        </div>

        <!-- Ligne 2 : Containers 3 et 4 -->
        <div class="container rounded-lg bg-gray-100 p-6 shadow-md">
          <h3 class="text-xl font-bold">Container 3</h3>
          <p>Description du contenu du container 3.</p>
        </div>
        <div class="container rounded-lg bg-gray-100 p-6 shadow-md">
          <h3 class="text-xl font-bold">Container 4</h3>
          <p>Description du contenu du container 4.</p>
        </div>
      </div>

      <!-- Deuxième Partie : Un seul container (tout à droite) -->
      <div class="w-full lg:w-1/3">
        <div class="container h-full rounded-lg bg-gray-200 p-6 shadow-md">
          <h3 class="text-xl font-bold">Container Unique</h3>
          <p>Description du contenu du container unique.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.description {
  background-color: #f5f5f5; /* Couleur de fond personnalisée */
  border: 2px solid #e5e5e5; /* Bordure personnalisée */
  transition: all 0.3s ease; /* Transition pour un effet au hover */
}

.description:hover {
  background-color: #eef4ed; /* Changement de couleur au hover */
  border-color: #d0d0d0; /* Changement de bordure au hover */
  transform: translateY(-5px); /* Légère élévation au hover */
}
.photo {
  background-color: #0b2545;
  padding-top: 100px; /* Ajoute un padding en haut de l'image */
}
.photo:hover {
  background-color: #0b2545; /* Changement de couleur au hover */
  border-color: #d0d0d0; /* Changement de bordure au hover */
  transform: translateY(-5px); /* Légère élévation au hover */
}
</style>
