<template>
  <div class="container mx-auto p-8">
    <div class="flex flex-col gap-8 lg:flex-row">
      <!-- Première Partie : 4 containers alignés 2 par 2 -->
      <div class="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:w-2/3">
        <!-- Ligne 1 : Containers 1 et 2 (2 par ligne avec le premier plus large) -->
        <div class="col-span-2 flex gap-8">
          <!-- Premier Container : Plus large -->
          <div class="description flex-grow rounded-lg p-6 shadow-md" style="flex-basis: 70%">
            <h3 class="text-2xl font-bold">Développeuse Mobile Flutter</h3>
            <p class="mt-4 text-gray-700">
              Je suis une développeuse spécialisée en Flutter, avec une forte
              expertise en gestion de projets et en transformation digitale.
              J'accompagne les entreprises dans la création d'applications
              mobiles innovantes pour optimiser leurs processus internes.
            </p>
          </div>

          <!-- Deuxième Container : Plus étroit mais ajusté -->
          <div class="photo w-1/2 overflow-hidden rounded-lg bg-gray-100 p-0 shadow-md">
            <img src="assets/IMG_4120.png" alt="Your Photo" class="h-full w-full object-cover pt-4" />
          </div>
        </div>

        <!-- Ligne 2 : Container 3 et 4 (2 par ligne avec le premier plus large, exactement comme Ligne 1) -->
        <div class="col-span-2 flex gap-8">
          <!-- Container 3 : Plus large -->
          <div class="competences flex-grow rounded-lg p-6 shadow-md" style="flex-basis: 95%">
            <h3 class="text-2xl font-bold">Compétences Techniques</h3>
            <ul class="mt-4 grid list-inside list-disc grid-cols-2 gap-4 text-gray-700">
              <li>Développement Flutter</li>
              <li>Intégration Firebase</li>
              <li>Déploiement sur les stores</li>
              <li>Cadrage de projet</li>
              <li>Notification push</li>
              <li>Connexion avec Google</li>
              <li>Conception UI/UX</li>
              <li>Intégration API Rest</li>
            </ul>
            <br />
            <div class="mt-4 flex items-center gap-4 text-gray-700">
              <img src="assets/premium_photo-1720287601920-ee8c503af775.jpeg" alt="Jenkins"
                class="h-14 w-14 rounded-full border-2 border-gray-300 p-1" />
              <img src="assets/premium_photo-1720287601920-ee8c503af775.jpeg" alt="Jenkins"
                class="h-14 w-14 rounded-full border-2 border-gray-300 p-1" />
              <img src="assets/premium_photo-1720287601920-ee8c503af775.jpeg" alt="Jenkins"
                class="h-14 w-14 rounded-full border-2 border-gray-300 p-1" />
              <img src="assets/premium_photo-1720287601920-ee8c503af775.jpeg" alt="Jenkins"
                class="h-14 w-14 rounded-full border-2 border-gray-300 p-1" />
              <img src="assets/premium_photo-1720287601920-ee8c503af775.jpeg" alt="Jenkins"
                class="h-14 w-14 rounded-full border-2 border-gray-300 p-1" />
            </div>
          </div>

          <!-- Container 4 : Informations de contact -->
          <div class="contact w-1/2 overflow-hidden rounded-lg bg-gray-100 p-6 shadow-md">
            <h3 class="mb-4 text-xl font-bold">Contact</h3>
            <ul class="space-y-4">
              <!-- Téléphone -->
              <li class="flex items-center">
                <img src="assets/icons-téléphone.png" alt="Téléphone" class="mr-2 h-6 w-6" />
                <span>+123 456 789</span>
              </li>

              <!-- LinkedIn -->
              <li class="flex items-center">
                <img src="assets/icons-linkedin.png" alt="LinkedIn" class="mr-2 h-6 w-6" />
                <a href="www.linkedin.com/in/exemple" class="text-blue-600 hover:underline"
                  target="_blank">
                  LinkedIn
                </a>
              </li>

              <!-- Email -->
              <li class="flex items-center">
                <img src="assets/icons-apple-mail.png" alt="E-mail" class="mr-2 h-6 w-6" />
                <a href="mailto:exemple@gmail.com" class="text-blue-600 hover:underline">
                  exemple@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Deuxième Partie : Container Unique (tout à droite) -->
      <div class="w-full lg:w-1/3">
        <div class="container h-full rounded-lg bg-gray-200 p-6 shadow-md">
          <!-- Titre et icône Voir Plus -->
          <div class="mb-4 flex items-center justify-between">
            <h3 class="text-xl font-bold">Récents Projets</h3>
            <a href="/projects" class="flex items-center text-blue-600 hover:underline">
              <span>Voir plus</span>
              <i class="fas fa-arrow-right ml-2"></i>
              <!-- Icône FontAwesome ou tout autre icône -->
            </a>
          </div>

          <!-- Liste des projets avec images -->
          <div class="grid grid-cols-1 gap-4">
            <!-- Projet 1 -->
            <div class="project-item relative">
              <img src="assets/50_1x_shots_so.png" alt="Projet 1"
                class="h-auto w-full rounded-lg shadow-md object-cover" />
              <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <p class="text-white font-bold text-lg">Projet 1</p>
              </div>
            </div>


            <!-- Projet 2 -->
            <div class="project-item relative">
              <img src="assets/50_1x_shots_so.png" alt="Projet 2"
                class="h-auto w-full rounded-lg shadow-md object-cover" />
              <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <p class="text-white font-bold text-lg">Projet 1</p>
              </div>
            </div>

            <!-- Projet 3 -->
            <div class="project-item relative">
              <img src="assets/50_1x_shots_so.png" alt="Projet 3"
                class="h-auto w-full rounded-lg shadow-md object-cover" />
              <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <p class="text-white font-bold text-lg">Projet 1</p>
              </div>
            </div>


            <!-- Ajoute plus de projets ici si nécessaire -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.description {
  background-color: #f5f5f5;
  /* Couleur de fond personnalisée */
  border: 2px solid #e5e5e5;
  /* Bordure personnalisée */
  transition: all 0.3s ease;
  /* Transition pour un effet au hover */
}

.description:hover {
  background-color: #eef4ed;
  /* Changement de couleur au hover */
  border-color: #d0d0d0;
  /* Changement de bordure au hover */
  transform: translateY(-5px);
  /* Légère élévation au hover */
}

.photo {
  background-color: #0b2545;
  padding-top: 100px;
  /* Ajoute un padding en haut de l'image */
}

.photo:hover {
  background-color: #0b2545;
  /* Changement de couleur au hover */
  border-color: #d0d0d0;
  /* Changement de bordure au hover */
  transform: translateY(-5px);
  /* Légère élévation au hover */
}
</style>
