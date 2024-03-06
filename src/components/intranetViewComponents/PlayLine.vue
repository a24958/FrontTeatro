<script setup lang="ts">
import { intranetFunctionsStore } from '../../stores/storeIntranetFunctions';

const props = defineProps<{
    id: number,
    name: string,
    description: string,
    price: number,
}>()

const intranetFunctions = intranetFunctionsStore();
const deletePlay = intranetFunctions.deletePlay;
const editPlay = intranetFunctions.editPlay;
</script>

<template>
    <div>
        <p class="playLine-name"> {{ name }}</p>
        <p class="playLine-description"> {{ description }}</p>
        <p class="playLine-price"> {{ price }}€</p>
        <button id="edit" @click="editPlay(id)">+</button>
        <button id="delete" @click="deletePlay(id)">-</button>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    padding: 16px;
}

.playLine-name{
    display: block;
    align-items: center;
    justify-content: center;
    width: 75px;
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

#edit{
    margin-right: 8px;
    background-color: orange;
    color: white;
}

#delete{
    background-color: red;
    color: white;
}
</style>