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
    <div class="seatCardInfo">
        <h4>{{ nombreObra }}</h4>
        <p>Fecha: {{ date }}</p>
        <div class="seatInfo">
            <p>Sala: {{ sala }}</p>
            <p>Asiento: {{ asientoId }}</p>
        </div>
        <p>Precio: {{ precio }}€</p>
    </div>
</template>
<style scoped>
    .seatCardInfo{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        height: 200px;
        width: 350px;
        margin-bottom: 24px;
        border: 1px solid grey;
        border-radius: 25px;
    }

    .seatInfo{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 70%;
    }
</style>