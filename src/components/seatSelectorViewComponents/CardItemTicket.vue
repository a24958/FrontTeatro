<script setup lang="ts">
import { seatSelectorFunctionsStore } from '@/stores/storeSeatSelectorFunctions';
import { format } from 'date-fns';
import { storeToRefs } from 'pinia';

const store = seatSelectorFunctionsStore();
const { seats: seatsArray,} = storeToRefs(store)

const props = defineProps<{
    asientoId: number,
    nombreObra: string,
    date: Date,
    precio: number
    sala: number,
}>() 

function defineSeatId(id:number){
    store.setAsientoId(id);
}

function removeCard(id:number){
    store.removeCard(id);
}

function onSelectedCard(id:number){
    store.onSelectedSeat(id);
}

</script>
<template>
    <div class="seatCardInfo">
        <h3>{{ nombreObra }}</h3>
        <span class="close" @click="defineSeatId(asientoId), removeCard(asientoId), onSelectedCard(asientoId)">&times;</span>
        <p class="seatDate"> {{ format(new Date(date), 'dd/MM/yyyy - HH:mm') }}</p>
        <div class="seatInfo">
            <p>Sala: {{ sala }}</p>
            <p>Asiento: {{ asientoId }}</p>
        </div>
        <p>{{ precio }}€</p>
    </div>
</template>
<style scoped>
.seatCardInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 200px;
    width: 350px;
    margin-bottom: 16px;
    border-radius: 16px;
    border-color: #EBEBEB;
    border-style: solid;
}

.seatInfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 40%;
}

.seatDate{
    margin-top: 0px;
}

.seatCardTitle{
    display: flex;
    flex-direction: row;
}

span {
    cursor: pointer;
    position: relative;
    top: -30px;
    right: -150px;
    font-size: 24px;
    color: red;
}

h3 {
    color: #3385D9;
    margin-bottom: 0px;
}

@media screen and (min-width: 800px) {
    .seatCardInfo {
        height: 200px;
        width: 350px;
    }
}

@media screen and (min-width: 1000px) {
    .seatCardInfo {
        height: 200px;
        width: 350px;
    }
}
</style>