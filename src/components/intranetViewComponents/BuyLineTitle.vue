<script setup lang="ts">
import { intranetFunctionsStore } from '../../stores/storeIntranetFunctions';
import OpenPopUpButton from './PlaysOpenPopUpButton.vue';

</script>

<template>
    <div>
        <p class="id"> ID Compra</p>
        <p class="usuario"> ID Usuario</p>
        <p class="sesion"> ID Sesion</p>
        <p class="precio"> Precio </p>
        <p class="fecha"> Fecha</p>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #3385D9;
    justify-content: space-around;
    color: white;
    font-size: large;
}

.id {
    width: 100px;
    text-align: center;
}

.usuario {
    width: 100px;
    text-align: center;
}

.sesion {
    width: 100px;
    text-align: center;
}

.precio {
    width: 100px;
    text-align: center;
}

.fecha {
    width: 300px;
    text-align: center;
}

@media screen and (min-width: 800px) {
    div {
        width: 50%;
    }
}
</style>