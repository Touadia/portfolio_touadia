<template>
    <section class="hero flex items-start justify-start bg-gray-100 py-8">
      <div class="flex w-full flex-col items-start gap-8 px-8 md:flex-row">
        <img
          src="assets/premium_photo-1720287601920-ee8c503af775.jpeg"
          alt="Your Photo"
          class="h-32 w-32 rounded-full shadow-md"
        />
        <div class="flex-grow">
          <h1 class="mb-2 text-3xl font-bold">Touadia KONE</h1>
          <p class="text-lg text-gray-700">
            Je suis une développeuse spécialisée en Flutter, passionnée par la
            transformation digitale et la gestion de projets.
          </p>
          <p class="text-lg text-gray-700">
            J'aide les entreprises à développer des solutions mobiles innovantes
            pour optimiser leurs processus.
          </p>
          <a
            href="/documents/cv-touadia.pdf"
            download
            class="mt-4 inline-block rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .hero {
    padding-top: 40px;
    padding-bottom: 20px;
  }
  
  .hero img {
    width: 8rem;
    height: 8rem;
  }
  </style>
  