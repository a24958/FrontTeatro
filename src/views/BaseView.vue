<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { menuFunctionsStore } from "../stores/storeMenuFunctions";
import { ref } from 'vue';

const menuFunctions = menuFunctionsStore();
const showValue = ref(menuFunctions.showHideNavBar());

</script>   

<template>
    <Header v-if="showValue.showHeader"></Header>
    <RouterView></RouterView>
    <Footer v-if="showValue.showHeader"></Footer>
</template>

<style scoped>

</style>