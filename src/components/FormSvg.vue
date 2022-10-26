<script setup lang="ts">
    import type { ChaussureSvg} from "@/types-svg";
    import { ref } from "vue";
    import SvgDessus from "../components/SvgDessus.vue";
    import Svgprofil from "../components/SvgProfil.vue";

    const chaussure = ref<ChaussureSvg>({});
   </script>


   <template>
 <div class="p-2">
 <ul class="flex gap-1">
 <li><a
href="#profil">Profil</a></li>
 <li><a
href="#dessus">Dessus</a></li>
 </ul>
 <div class="carousel w-64">
 <Svgprofil
class="carousel-item w-64"
v-bind="chaussure" id="profil" />
 <SvgDessus
class="carousel-item w-64"
v-bind="chaussure" id="dessus" />
 </div>
 <form-kit type="form" v-model="chaussure">
<form-kit name="semelle" label="semelle" value="#FFFFFF" type="color"/>
<form-kit name="empeigne" label="empeigne" value="#FFFFFF" type="color"/>
<form-kit name="pointe" label="pointe" value="#FFFFFF" type="color"/>
<form-kit name="oeillet" label="oeillet" value="#FFFFFF" type="color"/>
<form-kit name="bande" label="bande" value="#FFFFFF" type="color"/>
<form-kit name="languette" label="languette" value="#FFFFFF" type="color"/>
<form-kit name="lacet" label="lacet" value="#FFFFFF" type="color"/>
<form-kit name="trimestre" label="trimestre" value="#FFFFFF" type="color"/>
</form-kit>
 </div>
   </template>