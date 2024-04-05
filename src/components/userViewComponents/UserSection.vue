<script setup lang="ts">
import { reactive } from "vue";
import { userFunctionsStore } from '../../stores/storeUserFunctions';
import UserBuyItem from "./UserBuyItem.vue"
import UserBuyItemTitle from "./UserBuyItemTitle.vue"



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

const userFunctions = userFunctionsStore();
const users = userFunctions.UserBuys;


</script>
<template>
  <main>
    <UserBuyItemTitle></UserBuyItemTitle>
    <UserBuyItem v-for="(user, index) in users" :id="user.id" :precio="user.precio" :asientos="user.asientos" :sesion="user.sesion"
    :class="{ par: index % 2 === 0, impar: index % 2 != 0 }"></UserBuyItem>
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.par {
  background-color: whitesmoke;
}

.impar {
  background-color: grey;
  color: white;
}
</style>