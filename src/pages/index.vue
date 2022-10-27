<script setup lang="ts">
//@ts-nocheck
import { ref } from "@vue/reactivity";
import { supabase, user } from "@/supabase";

async function signIn(data, node) {
  const { user, error } = await ( nvlUtilisateur.value
    ? supabase.auth.signUp(data)
    :  supabase.auth.signIn(data));
    console.log(user, error);
  if (error) {
    console.error(error);
    node.setErrors([error.message]);
  }
}
const nvlUtilisateur = ref(false);
</script>
<template>
  <body class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" style="font-family:'Lato',sans-serif;">
    <header class="max-w-lg mx-auto">
        <a href="#">
            <h1 class="text-4xl font-bold text-white text-center">Tik-Tak</h1>
        </a>
    </header>

    <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
            <h3 class="font-bold text-2xl">Bienvenue chez Tik-Tak</h3>
            <p class="text-gray-600 pt-2 mb-5">Connecter ou inscriver vous à votre compte.</p>
        </section>

        
        <button class="flex gap-3 font-montserrat border border-Blue-Black-0 rounded-md px-2 py-2" v-if="user"
            @pointerdown="supabase.auth.signOut()">
            Se déconnecter ({{ user.email }})
        </button>

    
                <button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" v-else
            @pointerdown="supabase.auth.signIn({ provider: 'google' })">
          <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
        Connexion Google
</button>

<button  type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" v-if="user"
@pointerdown="supabase.auth.signOut()">
Se déconnecter ({{ user.email }})
          <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
        
</button>
  

<button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"  v-if="user"
            @pointerdown="supabase.auth.signOut()">>
  <svg class="mr-2 w-4 h-4 " aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
Connexion Facebook
</button>

<button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2" v-else
            @pointerdown="supabase.auth.signIn({ provider: 'facebook' })">

  <svg class="mr-2 w-4 h-4 " aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
Connexion Facebook
</button>

        <section class="mt-10 text-gray-700 text-sm font-bold mb-2 ml-3">
          <div class="mt-10 text-gray-700 text-sm font-bold mb-2 ml-3">
    <button v-if="user" @pointerdown="supabase.auth.signOut()">
      Se déconnecter ({{ user.email }})
    </button>
    <FormKit 
      v-else
      type="form"
      :submit-label="nvlUtilisateur ? 'Sinscrire' : 'Se connecter'"
      @submit="signIn"
      >
      <form class="flex flex-col" method="POST" action="#">
      <FormKit class="block text-gray-700 text-sm font-bold mb-2 ml-3" name="email" label="Votre email" type="email" wrapper-class="text-xl w-full " />
      <FormKit name="password" label="Mot de passe" type="password" wrapper-class="text-xl w-full " />
      <formKit class="block text-gray-700 text-sm font-bold mb-2 ml-3"
        label="Nouvel utilisateur ?"
        name="nvlUtilisateur"
        type="checkbox"
        v-model="nvlUtilisateur"
        wrapper-class="w-full flex"
      />
    </form>
    </FormKit>
  </div>

        </section>
    </main>
    <footer class="max-w-lg mx-auto flex justify-center text-white">
        <a href="#" class="hover:underline">Contact</a>
        <span class="mx-3">•</span>
        <a href="#" class="hover:underline">Politique</a>
    </footer>
</body>
  
  
</template>
<style>

[data-invalid] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px red;
}

[data-complete] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px green;
}
[data-complete] .formkit-inner::after {
  content: '✅';
  display: block;
  padding: 0.5em;
}
.body-bg {
    background-color: #9921e8;
    background-image: linear-gradient(315deg, #9921e8 0%, #5f72be 74%);
}

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
