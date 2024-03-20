<script setup lang="ts">
import { intranetSesionFunctionsStore } from '../../stores/storeIntranetFunctions';
import SesionsPopUpButton from './SesionsOpenPopUpButton.vue';

const props = defineProps<{
    id: number,
    salaId: number,
    obraId: number,
    nombre: string,
    date: Date,
    precio: number
}>()




const intranetFunctions = intranetSesionFunctionsStore();
const deletePlay = intranetFunctions.apiCallDelete;

</script>

<template>
    <div>
        <p class="playLine-name"> {{ salaId }}</p>
        <p class="playLine-description"> {{ date }} </p>
        <p class="playLine-name"> {{ precio }} </p>
        <div class="playLine-buttonsSection">
            <!-- <button id="edit" @click="editSesion(id)"><img src="../../assets/images/editar.png" alt=""></button> -->
            <SesionsPopUpButton :id="id" :salaId="salaId" :obraId="obraId" :nombre="nombre" :date="date" :precio="precio" :is-editing="true"></SesionsPopUpButton>
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
.playLine-name{
    display: block;
    align-items: center;
    justify-content: center;
    width: 125px;
    margin-right: 25px;
}

.playLine-description{
    width: 25%;
    margin-right: 8px;
}

.playLine-price{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    margin-right: 8px;
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