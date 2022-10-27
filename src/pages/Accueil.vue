<template>
  <div class="bg-indigo-300 max-full h-full">
    <img alt="" class="max-full w-full  relative z-0" src="../../public/Group 100.png" display: block>
  </div>
  <div class="bg-zinc-900">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 class="text-xl font-montserrat font-medium tracking-tight text-blue-600 sm:text-xl">à propos de la montre
        </h2>
        <h2 class="text-3xl font-montserrat font-bold tracking-tight text-white sm:text-4xl">La meilleur et à la mode
          Smart Watch pour une vie sans encombre</h2>
        <p class="mt-4 text-white font-montserrat font-light">Au cours des années, des millions de consommateurs se sont
          progressivement tournés vers la personnalisation des produits.
          C’est pourquoi nous allions notre savoir faire et votre style afin de créer la montre qui répond à vos
          besoins.</p>
        <ul class="mt-10 grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
          <li class="text-white  font-light">CPU : QUALCOMM</li>
          <li class="text-white  font-light">Matériaux: Fibre de carbone</li>
          <li class="text-white  font-light">Batterie détachable: Non</li>
          <li class="text-white  font-light">Bande matériel: Gel silicone</li>
          <li class="text-white  font-light">Télechargement disponible: Oui</li>
          <li class="text-white  font-light">Mode Internet: 4G</li>
          <li class="text-white  font-light">Type de chargement: Electrique</li>
          <li class="text-white  font-light">Batterie: 300 mAh - 450 mAh</li>
          <li class="text-white  font-light">Groupe d’âge: Adulte</li>
          <li class="text-white  font-light">Compatibilité: Compatible partout</li>
        </ul>

        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>

          </div>

        </dl>
      </div>
      <div class="grid grid-cols-1 sm:gap-6">
        <img src="../../public/Group 99.png"
          alt="Walnut card tray filled with cards and card angled in dedicated groove." />
      </div>
    </div>
  </div>


</template>
