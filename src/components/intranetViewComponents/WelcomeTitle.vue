<script setup lang="ts">
const userData = localStorage.getItem('userData');
const nombre = userData ? JSON.parse(userData).nombre : null;
</script>

<template>
    <h1>Bienvenido {{nombre}}</h1>
</template>

<style scoped>
h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3385D9;
    margin-top: 50px;
}
</style>