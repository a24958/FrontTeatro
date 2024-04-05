<script setup lang="ts">
    import WelcomeTitle from '../components/intranetViewComponents/WelcomeTitle.vue'
    import SesionsList from '../components/intranetViewComponents/SesionsList.vue'
</script>

<template>
    <h1>Sesiones</h1>
    <SesionsList></SesionsList>
</template>

<style scoped>
h1 {
    font-size: 48px;
    color: #3385D9;
    text-align: center;
    margin-bottom: 20px;
}
</style>