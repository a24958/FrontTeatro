<script setup lang="ts">
import { reactive } from "vue";
import { intranetUserFunctionsStore } from "../../stores/storeIntranetFunctions";
import UserLine from "./UserLine.vue";
import UserLineTitle from './UserLineTitle.vue'

import OpenPopUpButton from "./PlaysOpenPopUpButton.vue";

const props = defineProps<{
  id: number,
    email: string,
    password: string,
    nombre: string,
}>()

const intranetFunctions = intranetUserFunctionsStore();

const users = intranetFunctions.theaterUsers;


</script>

<template>
  <main>
    <!-- <OpenPopUpButton :id="id" :titulo="nombre" :descripcion="descripcion" :ruta-foto="rutaFoto" :duracion="duracion" :is-editing="false"></OpenPopUpButton> -->
    <UserLineTitle></UserLineTitle>
    <UserLine v-for="(user, index) in users" :key="index" :id="user.id" :email="user.email" :password="user.password" :nombre="user.nombre"
      :class="{ par: index % 2 === 0, impar: index % 2 != 0 }">
    </UserLine>
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