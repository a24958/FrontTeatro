<script setup lang="ts">
import { intranetFunctionsStore } from '../../stores/storeIntranetFunctions';
import PlayItem from './PlayItem.vue'

const intranetFunctions = intranetFunctionsStore();

const plays = intranetFunctions.theaterPlays;

</script>
<template>
    <section class="obras-section">
        <PlayItem v-for="(play, index) in plays" :id="play.id" :nombre="play.nombre" :descripcion="play.descripcion" :duracion="play.duracion" :ruta-foto="play.rutaFoto"></PlayItem>
    </section>
</template>
<style scoped>
.obras-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}
</style>