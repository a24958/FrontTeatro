<script setup lang="ts">
import { intranetSesionFunctionsStore } from '../../stores/storeIntranetFunctions';
import SesionsPopUpButton from './SesionsOpenPopUpButton.vue';
import { format } from 'date-fns';

const props = defineProps<{
    id: number,
    salaId: number,
    obraId: number,
    nombreObra: string,
    date: Date,
    precio: number
}>()




const intranetFunctions = intranetSesionFunctionsStore();
const deletePlay = intranetFunctions.apiCallDelete;

</script>

<template>
    <div>
        <p class="obra"> {{ nombreObra }}</p>
        <p class="sala"> {{ salaId }}</p>
        <p class="fecha"> {{ format(new Date(date), 'dd/MM/yyyy - HH:mm') }} </p>
        <p class="precio"> {{ precio }} </p>
        <div class="playLine-buttonsSection">
            <!-- <button id="edit" @click="editSesion(id)"><img src="../../assets/images/editar.png" alt=""></button> -->
            <SesionsPopUpButton :id="id" :salaId="salaId" :obraId="obraId" :nombreObra="nombreObra" :date="date" :precio="precio" :is-editing="true"></SesionsPopUpButton>
            <button id="delete" @click="deletePlay(id)"><img src="../../assets/images/borrar.png" alt=""></button>
        </div>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    padding: 16px;
}

div img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
}

.obra{
    width: 250px;
    text-align: center;
}

.sala{
    width: 100px;
    text-align: center;
}

.fecha{
    width: 250px;
    text-align: center;
}

.precio{
    width: 100px;
    text-align: center;
}
div button{
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 7px;
}

.playLine-buttonsSection{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100px;
}

.playLine-buttonsSection button img{
    width: 20px;
    height: 20px;
}

#edit{
    margin-right: 8px;
    background-color: orange;
}

#delete{
    background-color: red;
}

#delete img{
    margin-left: -1px;
}

@media screen and (min-width: 800px){
    div{
        width: 50%;
    }
}
</style>