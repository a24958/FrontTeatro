<script setup lang="ts">
import { defineProps } from 'vue';
import { intranetSesionFunctionsStore } from "../../stores/storeIntranetFunctions";
import SesionLine from "./SesionLine.vue";
import SesionLineTitle from './SesionLineTitle.vue';
import SesionsOpenPopUpButton from "./SesionsOpenPopUpButton.vue";

const props = defineProps<{
    id: number,
    salaId: number,
    obraId: number,
    nombre: string,
    date: Date,
    precio: number
}>()

const intranetSesionFunctions = intranetSesionFunctionsStore();
const sesions = intranetSesionFunctions.theaterSesions;


</script>

<template>
  <main>
    <SesionsOpenPopUpButton :id="id" :salaId="salaId" :obraId="obraId" :nombre="nombre" :date="date" :precio="precio" :is-editing="false"></SesionsOpenPopUpButton>
    <SesionLineTitle></SesionLineTitle>
    <SesionLine v-for="(sesion, index) in sesions" :key="index" :id="sesion.id" :salaId="sesion.salaId" :obraId="sesion.obraId" :nombre="sesion.nombre" :date="sesion.date" :precio="sesion.precio"
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
