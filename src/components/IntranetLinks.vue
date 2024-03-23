<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { menuFunctionsStore } from "../stores/storeMenuFunctions";

const menuFunctions = menuFunctionsStore();
</script>

<template>
    <div class="intranet-content">
        <button class="intranet-content-button">
            <RouterLink to="/intranet/sesions">SESIONES</RouterLink>
        </button>
        <button class="intranet-content-button">
            <RouterLink to="/intranet/plays">OBRAS</RouterLink>
        </button>
        <button class="intranet-content-button">
            <RouterLink to="/intranet/buys">COMPRAS</RouterLink>
        </button>
    </div>
</template>


<style scoped>
.intranet-content {
    display: flex;
    justify-content: space-around;

    align-items: center;
}

.intranet-content-button {
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

 a {
    text-decoration: none;
    color: white;
}
</style>