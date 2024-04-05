<script setup lang="ts">
import { format } from 'date-fns';

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
  <div class="compras-section">
    <p class="id">{{ id }}</p>
    <p class='precio'>{{ precio }}</p>
    <p class='asientos'>{{ asientos.join(', ') }}</p>
    <p class='salaId'>{{ sesion.salaId }}</p>
    <p class='nombreObra'>{{ sesion.nombreObra }}</p>
    <p class='date'> {{ format(new Date(sesion.date), 'dd/MM/yyyy - HH:mm') }} </p>
  </div>
</template>
  
<style scoped>
.compras-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.id {
  width: 35px;
}

.precio {
  width: 40px;

}

.asientos {
  width: 60px;

}

.salaId {
  width: 35px;

}

.nombreObra {
  width: 200px;

}

.date {
  width: 200px;

}

@media screen and (min-width: 800px) {
  .compras-section {
    width: 50%;
  }
}
</style>
