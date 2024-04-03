<script setup lang="ts">
import { reactive } from "vue";
import { intranetFunctionsStore } from "../../stores/storeIntranetFunctions";
import PlayLine from "./PlayLine.vue";
import PlayLineTitle from './PlayLineTitle.vue'

import OpenPopUpButton from "./PlaysOpenPopUpButton.vue";

const props = defineProps<{
  id: number,
  nombre: string,
  descripcion: string,
  rutaFoto: string,
  duracion: number,
}>()

const intranetFunctions = intranetFunctionsStore();

const plays = intranetFunctions.theaterPlays;


</script>

<template>
  <main>
    <OpenPopUpButton :id="id" :titulo="nombre" :descripcion="descripcion" :ruta-foto="rutaFoto" :duracion="duracion" :is-editing="false"></OpenPopUpButton>
    <PlayLineTitle></PlayLineTitle>
    <PlayLine v-for="(play, index) in plays" :key="index" :id="play.id" :nombre="play.nombre" :descripcion="play.descripcion" :rutaFoto="play.rutaFoto" :duracion="play.duracion"
      :class="{ par: index % 2 === 0, impar: index % 2 != 0 }">
    </PlayLine>
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