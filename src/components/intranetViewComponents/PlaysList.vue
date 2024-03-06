<script setup lang="ts">
import { reactive } from "vue";
import { intranetFunctionsStore } from "../../stores/storeIntranetFunctions";
import PlayLine from "./PlayLine.vue";

const intranetFunctions = intranetFunctionsStore();

const plays = intranetFunctions.theaterPlays;

</script>

<template>
  <main>
    <PlayLine v-for="(play, index) in plays" :key="index" :id="play.id" :name="play.name" :description="play.description"
      :price="play.price" :class="{ par: index % 2 === 0, impar: index % 2 != 0 }">
    </PlayLine>
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