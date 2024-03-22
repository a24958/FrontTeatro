<script setup lang="ts">
const props = defineProps<{
    asientoId: number,
    nombreObra: string,
    date: Date,
    precio: number
    sala: number,
}>()
</script>
<template>
    <div>
        <h4>{{ nombreObra }}</h4>
        <p>Fecha: {{ date }}</p>
        <p>Precio: {{ precio }}</p>
        <p>Sala: {{ sala }}</p>
        <p>Asiento: {{ asientoId }}</p>
    </div>
</template>
<style scoped>
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 150px;
    }
</style>