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

var hayCompras = false;
if(users.length > 0){
  hayCompras = true;
}

</script>
<template>
  <main>
    <!-- <div v-if="hayCompras"> -->
      <UserBuyItemTitle></UserBuyItemTitle>
      <UserBuyItem  v-for="(user, index) in users" :id="user.id" :precio="user.precio" :asientos="user.asientos" :sesion="user.sesion"
    :class="{ par: index % 2 === 0, impar: index % 2 != 0 }"></UserBuyItem>
    <!-- </div> -->
    <!-- <div v-if="!hayCompras">
      <h2>Todavia no has realizado ninguna compra</h2>
    </div> -->
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2{
  font-size: 36px;
    color: #3385D9;
    text-align: center;
    margin-bottom: 20px;
}

.par {
  background-color: whitesmoke;
}

.impar {
  background-color: grey;
  color: white;
}
</style>