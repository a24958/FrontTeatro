<script setup lang="ts">
import { format } from 'date-fns';

const props = defineProps<{
  id: number,
  nombre: string,
  descripcion: string,
  rutaFoto: string,
  duracion: number,
  nextSession: Date,
  showPlayInformation: boolean,
}>()

</script>
<template>
  <article class="obras-container">
    <div>
      <img :src="`${rutaFoto}`" alt="">
      <h2>{{ nombre }}</h2>
      <p>{{ descripcion }}</p>
      <p v-if="showPlayInformation === true">{{ format(new Date(nextSession), 'dd/MM/yyyy') }}</p>
      <p>{{ duracion }} Minutos</p>
      <RouterLink v-if="showPlayInformation === true" :to="'/play/'+ id"><button>COMPRAR</button></RouterLink>
    </div>
  </article>
</template>
<style scoped>
.obras-container div button {
  padding: 8px;
  background-color: #3385D9; 
  width: 350px;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: #3385D9;
  margin-top: 12px;
  margin-bottom: 48px;
}

.obras-container div button a {
  text-decoration: none;
  color: white;
}

.obras-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 425px;
}

.obras-container div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  border-color: #EBEBEB;
  border-style: solid;
  width: 350px;
  height: 850px;
  margin-bottom: 64px;
}

.obras-container div h2 {
  color: #3385D9;
  margin-bottom: 0;
  text-align: center;
}

.obras-container div p {
  text-align: center;
  width: 250px;
  margin-top: 0;
  margin-bottom: 0;
  text-align: start;
}

.obras-container div button {
  width: 280px;
  margin-bottom: 16px;
  margin-top: 0;
  cursor: pointer;
}

.obras-container div img {
  width: 350px;
  height: 450px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  mask-image: linear-gradient(black 90%, transparent);
}</style>