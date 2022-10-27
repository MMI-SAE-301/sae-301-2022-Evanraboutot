<template>
  <div class="relative overflow-hidden bg-[#131C32]"></div>

  <div>
    <div class="relative px-4 pt-6 h-24 sm:px-6 lg:px-8 bg-[#131C32]">
      <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
        <div class="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
          <div class="flex w-full items-center justify-between md:w-auto">
            <a href="#">
              <img alt="watch image" class="h-8 w-auto sm:h-10" src="../public/Group-97.png">
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <button type="button"
                class="inline-flex items-center justify-center rounded-md bg-bl p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false">
                <span class="sr-only"></span>
                <!-- Heroicon name: outline/bars-3 -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
          <a href="/Accueil" class="items-center font-medium text-white hover:bg-stone-800">Accueil</a>

          <a href="/custom" class="items-center font-medium text-white hover:bg-stone-800">Personnalisation</a>

          <a href="/" class="items-center font-medium text-white hover:bg-stone-800">Connexion</a>
        </div>
      </nav>
    </div>
  </div>
  <!-- Affiche les pages -->
  <Suspense>
    <router-view />
  </Suspense>

</template>

<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/20/solid'
</script>
