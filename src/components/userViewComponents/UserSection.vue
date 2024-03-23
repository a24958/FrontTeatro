<script setup lang="ts">
import { reactive } from "vue";
import { userFunctionsStore } from '../../stores/storeUserFunctions';
import UserBuyItem from "./UserBuyItem.vue"


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
    <UserBuyItem v-for="(user, index) in users" :id="user.id" :precio="user.precio" :asientos="user.asientos" :sesion="user.sesion"></UserBuyItem>
  </main>
</template>
<style scoped>

</style>