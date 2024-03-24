<script setup lang="ts">
import { intranetUserFunctionsStore } from '../../stores/storeIntranetFunctions';

const props = defineProps<{
    id: number,
    email: string,
    password: string,
    nombre: string,
}>()


const intranetFunctions = intranetUserFunctionsStore();
// const deletePlay = intranetFunctions.apiCallDelete;

</script>

<template>
    <div>
        <p> {{ id }}</p>
        <p> {{ email }}</p>
        <p> {{ password }} </p>
        <p> {{ nombre }} </p>

        <!-- <div class="playLine-buttonsSection">
             <button id="edit" @click="editPlay(id)"><img src="../../assets/images/editar.png" alt=""></button> 
             <OpenPopUpButton :id="id" :titulo="nombre" :descripcion="descripcion" :ruta-foto="rutaFoto" :duracion="duracion" :is-editing="true"></OpenPopUpButton> 
            <button id="delete" @click="deletePlay(id)"><img src="../../assets/images/borrar.png" alt=""></button>
        </div> -->
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
    width: 50%;
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