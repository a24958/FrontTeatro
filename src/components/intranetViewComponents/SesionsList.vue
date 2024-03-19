<script setup lang="ts">
import { reactive } from "vue";
import { intranetFunctionsStore } from "../../stores/storeIntranetFunctions";
import { intranetSesionFunctionsStore } from "../../stores/storeIntranetFunctions";

import SesionLine from "./SesionLine.vue";
import OpenPopUpButton from "./OpenPopUpButton.vue";

const props = defineProps<{
    id: number,
    salaId: number,
    obraId: number,
    nombre: string,
    date: Date,
}>()


const intranetSesionFunctions = intranetSesionFunctionsStore();

const sesions = intranetSesionFunctions.theaterSesions;


</script>

<template>
  <main>
    <!-- <OpenPopUpButton :id="id" :titulo="nombre" :descripcion="descripcion" :ruta-foto="rutaFoto" :duracion="duracion" :is-editing="false"></OpenPopUpButton> -->
    <SesionLine v-for="(sesion, index) in sesions" :key="index" :id="sesion.id" :salaId="sesion.salaId" :obraId="sesion.obraId" :nombre="sesion.nombre" :date="sesion.date"
      :class="{ par: index % 2 === 0, impar: index % 2 != 0 }">
    </SesionLine>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.par {
  background-color: whitesmoke;
}

.impar {
  background-color: grey;
  color: white;
}
</style>