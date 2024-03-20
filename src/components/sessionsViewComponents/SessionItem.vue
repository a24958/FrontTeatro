<script setup lang="ts">
const props = defineProps<{
    sesionId: number,
    date: Date,
    salaId: number,
    precio: number,
    asientosDisponibles: number
}>()

</script>
<template>
    <div>
        <p>{{ date }}</p>
        <p>Sala: {{ salaId }}</p>
        <p>Precio: {{ precio }}€</p>
        <p>Asientos Disponibles{{ asientosDisponibles }}</p>
    </div>
</template>
<style scoped>

</style>