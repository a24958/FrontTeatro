<script setup lang="ts">
import { intranetBuyFunctionsStore } from '../../stores/storeIntranetFunctions';
import { format } from 'date-fns';

const props = defineProps<{
    compraId: number,
    usuarioId: number,
    sesionId: number,
    precio: number,
    fecha: Date,
}>()





const intranetFunctions = intranetBuyFunctionsStore();
// const deletePlay = intranetFunctions.apiCallDelete;

</script>

<template>
    <div>
        <p class="id"> {{ compraId }}</p>
        <p class="usuario"> {{ usuarioId }}</p>
        <p class="sesion"> {{ sesionId }} </p>
        <p class="precio"> {{ precio }} </p>
        <p class="fecha"> {{ format(new Date(fecha), 'dd/MM/yyyy - HH:mm') }} </p>
    </div>
</template>

<style scoped>
div {
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.id{
    width: 100px;
    text-align: center;
}

.usuario{
    width: 100px;
    text-align: center;
}

.sesion{
    width: 100px;
    text-align: center;
}

.precio{
    width: 100px;
    text-align: center;
}

.fecha{
    width: 300px;
    text-align: center;
}
@media screen and (min-width: 800px){
    div{
        width: 50%;
    }
}
</style>