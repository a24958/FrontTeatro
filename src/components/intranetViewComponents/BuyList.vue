<script setup lang="ts">
import { reactive } from "vue";
import { intranetBuyFunctionsStore } from "../../stores/storeIntranetFunctions";
import BuyLine from "./BuyLine.vue";
import BuyLineTitle from './BuyLineTitle.vue'

import OpenPopUpButton from "./PlaysOpenPopUpButton.vue";

const props = defineProps<{
    compraId: number,
    usuarioId: number,
    sesionId: number,
    precio: number,
    fecha: Date,
}>()

const intranetFunctions = intranetBuyFunctionsStore();

const buys = intranetFunctions.theaterBuys;


</script>

<template>
  <main>
    <!-- <OpenPopUpButton :id="id" :titulo="nombre" :descripcion="descripcion" :ruta-foto="rutaFoto" :duracion="duracion" :is-editing="false"></OpenPopUpButton> -->
    <BuyLineTitle></BuyLineTitle>
    <BuyLine v-for="(buy, index) in buys" :key="index" :compraId="buy.compraId" :usuarioId="buy.usuarioId" :sesionId="buy.sesionId" :precio="buy.precio" :fecha="buy.fecha"
      :class="{ par: index % 2 === 0, impar: index % 2 != 0 }">
    </BuyLine>
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