<template>
  <div class="bg-indigo-300 max-full h-full">
    <img alt="" class="max-full w-full  relative z-0" src="../../public/Watch.png"
    display: block >
    <img alt="" class="absolute object-center z-10 top-2/3 items-center" src="../../public/Group 4.png">
  </div>
  <div class="bg-zinc-900">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 class="text-xl font-montserrat font-medium tracking-tight text-blue-600 sm:text-xl">à propos de la montre</h2>
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">La meilleur et à la mode Smart Watch pour une vie sans encombre</h2>
        <p class="mt-4 text-white">Au cours des années, des millions de consommateurs se sont progressivement tournés vers la personnalisation des produits.
C’est pourquoi nous allions notre savoir faire et votre style afin de créer la montre qui répond à vos besoins.
</p>

        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
      <div class="grid grid-cols-1 sm:gap-6">
        <img src="../../public/Group 99.png" alt="Walnut card tray filled with cards and card angled in dedicated groove."  />
      </div>
    </div>
  </div>


</template>
