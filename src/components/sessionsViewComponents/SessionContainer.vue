<script setup lang="ts">
import { sessionFunctionsStore } from "../../stores/storeSessionsFunctions";
import SessionItem from './SessionItem.vue';

const sessionFunctions = sessionFunctionsStore();

var play = sessionFunctions.play;

</script>
<template>
    <SessionItem v-for="(session, index) in play.sesiones" :key="index" :sesion-id="session.sesionId" :sala-id="session.salaId" :date="session.date" :precio="session.precio" :asientos-disponibles="session.asientosDisponibles" ></SessionItem>
</template>
<style scoped>

</style>