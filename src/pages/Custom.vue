<script setup lang="ts">
import Montre from '@/components/Montre.vue';
import FormMontre from '@/components/FormMontre.vue'
</script>

<template>

    <div class="bg-[#141414]">
        <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
                <h2 class="text-3xl font-montserrat font-bold tracking-tight text-white sm:text-4xl">Personnaliser la
                    montre qui vibrera au rythme de vos activités</h2>
                <p class="mt-4 text-white font-montserrat font-light">Au cours des années, des millions de consommateurs
                    se sont
                    Au cours des années, des millions de consommateurs se sont progressivement tournés vers la
                    personnalisation des produits.
                    C’est pourquoi nous allions notre savoir faire et votre style afin de créer la montre qui répond à
                    vos besoins.
                </p>
                <p class="mt-4 text-white font-montserrat font-light">Modification possible en fonction des
                    personnalisation proposées par le biai du pannel de couleur.</p>


                <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    <div class="border-t border-gray-200 pt-4">
                        <dt class="font-medium text-gray-900"></dt>
                        <dd class="mt-2 text-sm text-gray-500"></dd>
                    </div>

                </dl>
            </div>
            <div class="grid grid-cols-1 sm:gap-6 absolute right-0 bottom-[-13px]">
                <img src="../../public/Group 103.png" alt="montre connectée" />
            </div>
        </div>
    </div>
    <div>
        <h1></h1>
    </div>
    <div
        class="mx-auto grid w-full max-w-2xl grid-cols-2 gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <FormMontre></FormMontre>

        <router-link to="/Liste">
            <div class=" w-1/3 text-white bg-black font-montserrat font-bold text-lg">Voir ma liste</div>
        </router-link>
    </div>
    <Suspense>
        <router-view />
    </Suspense>
</template>