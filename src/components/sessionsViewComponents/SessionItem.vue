<script setup lang="ts">
import { format } from 'date-fns';
const props = defineProps<{
    sesionId: number,
    date: Date,
    salaId: number,
    precio: number,
    asientosDisponibles: number
}>()

</script>
<template>
    <div class="sessionItem">
        <h3>{{ format(new Date(date), 'dd/MM/yyyy - HH:mm') }}</h3>
        <p>Sala: {{ salaId }}</p>
        <p>Precio: {{ precio }}€</p>
        <p>Asientos Disponibles: {{ asientosDisponibles }}</p>
        <RouterLink :to="'/session/' + sesionId"><button>ESCOJA SU ASIENTO</button></RouterLink>
    </div>
</template>
<style scoped>
.sessionItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 200px;
    width: 350px;
    margin-bottom: 16px;
    border-radius: 16px;
    border-color: #EBEBEB;
    border-style: solid;
    margin-right: 32px;
}

h3 {
    color: #3385D9;
    margin-top: 0px;
    margin-bottom: 0px;
}

p{
    margin-bottom: 0px;
    margin-top: 0px;
}

.sessionItem button {
  padding: 8px;
  background-color: #3385D9; 
  width: 250px;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: #3385D9;
}
</style>