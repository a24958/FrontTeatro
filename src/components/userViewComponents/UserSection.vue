<script setup lang="ts">
import { userFunctionsStore } from '../../stores/storeUserFunctions';
const intranetFunctions = userFunctionsStore();

const userId = 1; 
const { getUserById } = intranetFunctions;
const user = getUserById(userId);
</script>

<template>
    <div class="obras-section">
      <div v-if="user">
        <h2>Información del Usuario</h2>
        <p>ID: {{ user.id }}</p>
        <p>Nombre: {{ user.nombre }}</p>
        <h3>Compras:</h3>
        <div v-for="(compra, index) in user.compras" :key="index">
          <p>Compra ID: {{ compra.id }}</p>
          <p>Precio: {{ compra.precio }}</p>
          <p>Asientos: {{ compra.asientos.join(', ') }}</p>
          <h4>Sesión:</h4>
          <p>Sala ID: {{ compra.sesion.salaId }}</p>
          <p>Nombre de la obra: {{ compra.sesion.nombreObra }}</p>
          <p>Fecha: {{ compra.sesion.date }}</p>
        </div>
      </div>
      <div v-else>
        <p>Cargando...</p>
      </div>
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
