<script setup lang="ts">
import { reactive } from "vue";
import { intranetUserFunctionsStore } from "../../stores/storeIntranetFunctions";
import UserLine from "./UserLine.vue";
import UserLineTitle from './UserLineTitle.vue'
import Navbar from './RoutesIntranet.vue';

const props = defineProps<{
  id: number,
  email: string,
  rol: string,
  nombre: string,
}>()

const intranetFunctions = intranetUserFunctionsStore();

const users = intranetFunctions.theaterUsers;


</script>

<template>
  <main>
    <div>
<Navbar></Navbar>
    </div>
    <div class="elementos">
      <UserLineTitle></UserLineTitle>
    <UserLine v-for="(user, index) in users" :key="index" :id="user.id" :email="user.email" :rol="user.rol" :nombre="user.nombre"
      :class="{ par: index % 2 === 0, impar: index % 2 != 0 }">
    </UserLine>
    </div>

  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.elementos {
  width: 100%;
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