<script setup lang="ts">
//@ts-nocheck
import { type Montre, colors, materiaux } from "@/types";
import { ref } from "vue";
import FormKitListColors from "./FormKitListColors.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import MontreVue from '@/components/Montre.vue';
let user = supabase.auth.user()

const router = useRouter();

const props = defineProps<{
    data?: Montre;
    id?: string;
}>();

const montre = ref<Montre>(props.data ?? {});

async function upsertMontre(dataForm, node) {
    const { data, error } = await supabase.from("montre").upsert(dataForm);
    if (error) node.setErrors([error.message]);
    else {
        node.setErrors([]);
        router.push({ name: "montre" });
    }
}

if (props.id) {
    // On charge les données de la maison
    let { data, error } = await supabase
        .from("montre")
        .select("*")
        .eq("id_montre", props.id);
    if (error || !data)
        console.log("n'a pas pu charger le table montre :", error);
    else montre.value = data[0];
}
</script>

<template>
    <div class="flex justify-center mt-16 gap-11">
        <div class="">
            <MontreVue class="w-52" v-bind="montre" id="profil" />
        </div>

        <div class="flex flex-col justify-center">
            <FormKit type="form" v-model="montre" @submit="upsertMontre" :submit-attrs="{
                classes: {
                    input: `text-[#FFFFFF] bg-black bouton`
                }
            }">

                <!-- <FormKit name="id_user" label="id_user" type="text" :value="user.id" outer-class="hidden" /> -->


                <FormKitListColors name="bracelet" label="Bracelet" />
                <FormKitListColors name="boitier" label="Boitier" />
                <FormKitListColors name="ecran" label="Ecran" />
                <!-- matériaux -->
                <!-- <FormKit name="materiaux" label="Matériaux" value='#FFFFFF' type="radio" :options="materiaux"
                :sections-schema="{
                    inner: {$el : null},
                    decorator: {$el:null},
                }" input-class="peer sr-only" options-class="flex gap-1">
                <template #label="context">
                    <img :src="context.option.value"
                        class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600" />
                    <span class="sr-only">{{context.option.label}}</span>
                </template>
            </FormKit> -->

            </FormKit>
        </div>
        <router-link to="/Liste">
            <button
                class=" justify-center w-48 text-white bg-black font-montserrat font-bold text-center text-lg py-8 px-8 rounded-3xl">
                Voir ma
                liste
            </button>
        </router-link>
    </div>
</template>

<style>
.formkit-options {
    display: flex;
    gap: 20px;
}

.formkit-option label {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.formkit-fieldset .formkit-legend {
    color: black;
    font-weight: lighter;
    font-family: 'Montserrat', sans-serif;

}

.bouton {
    height: 80px;
    width: 300px;
    border-radius: 5px;
    margin-top: 20px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
}
</style>