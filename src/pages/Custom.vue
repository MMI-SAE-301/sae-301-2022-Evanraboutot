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
                <img src="../../src/assets/Group-103.png" alt="montre connectée" />
            </div>
        </div>
    </div>
    <div class="bg black">
        <h1></h1>
    </div>
    <div
        class="mx-auto grid w-full max-w-2xl grid-cols-2 gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8 bg-slate-300">
        <FormMontre></FormMontre>


    </div>
    <Suspense>
        <router-view />
    </Suspense>
    <footer class="bg-[#030509]">

        <div
            class="mx-auto grid max-w-2xl font-montserrat grid-cols-1 gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
            <h2 class="text-center text-5xl font-hairline tracking-tight text-white sm:text-5xl">Penser. Créer.
                Profiter.
            </h2>
            <p class=" text-center text-gray-400 font-montserrat font-light">Nous sommes une équipe diversifiée et
                passionnée
                qui prend en charge votre conception et vous permet de mettre en œuvre la montre qui vous correspond.
            </p>
        </div>
        <div class="mx-auto grid w-28 b-5 gap-x-8">
            <button type="button" item
                class="py-2 px-3 text-black bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <img src="../assets/PngItem_175396.png" aria-hidden="true" class="mr-2 -ml-1 w-5 h-5">
                Contact
            </button>

        </div>
        <img src="../assets/MMI_dut_small_white.png" aria-hidden="true" class=" w-36 h-36 ml-24">
    </footer>
</template>