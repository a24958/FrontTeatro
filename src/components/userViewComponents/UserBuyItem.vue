<script setup lang="ts">

const props = defineProps<{
  id: number,
  precio: number,
  asientos: number[],
  sesion: {
    salaId: number,
    nombreObra: string,
    date: Date
  }
}>() 
</script>

<template>
  <div class="obras-section">
        <p>Compra ID: {{ id }}</p>
        <p>Precio: {{ precio }}</p>
        <p>Asientos: {{ asientos.join(', ') }}</p>
        <h4>Sesión:</h4>
        <p>Sala ID: {{ sesion.salaId }}</p>
        <p>Nombre de la obra: {{ sesion.nombreObra }}</p>
        <p>Fecha: {{ sesion.date }}</p>
    </div>
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
