<script setup lang="ts">
import SeatSvg from './SeatSvg.vue'
import { seatSelectorFunctionsStore } from "../../stores/storeSeatSelectorFunctions";
import { onBeforeMount, reactive } from 'vue';
import CardItemTicket from './CardItemTicket.vue';
import { storeToRefs } from 'pinia';
import router from '@/router';

const store = seatSelectorFunctionsStore();
const sessionId =  router.currentRoute.value.params.sesionId[0];

onBeforeMount(() => {
    store.getSessionById(sessionId)
})

const { sessionData: sessionSeats } = storeToRefs(store)

/* const session = seatSelectorFunctions.session;
 */
interface Seat {
    id: number,
    tipoAsiento: number,
    suplemento: number,
    ocupado: boolean
}

interface Session {
    sesionId: number,
    date: Date,
    salaId: number,
    precio: number,
    asientosDisponibles: number
}

interface Card {
    asientoId: number,
    nombreObra: string,
    fecha: Date,
    precio: number,
    sala: number,
}

interface SeatStyle {
    back: string,
    seat: string,
    rest: string
}

var standarSeat: SeatStyle = {
    back: "#00AA00",
    seat: "#008000",
    rest: "#006600"
}
var takenSeat: SeatStyle = {
    back: "#ff2424",
    seat: "#e00000",
    rest: "#b30000"
}
var vipSeat: SeatStyle = {
    back: "#f2c640",
    seat: "#e5b010",
    rest: "#d2a20f"
}
var disabledSeat: SeatStyle = {
    back: "#294fff",
    seat: "#002fff",
    rest: "#0024c7"
}

function getSeatType(seat: Seat) {

    if (seat.ocupado == true) {
        return takenSeat
    }

    switch (seat.tipoAsiento) {
        case 1:
            return standarSeat;
        case 2:
            return vipSeat;
        case 3:
            return disabledSeat;
        default:
            return takenSeat;
    }

}

let seats = reactive(Array<Card>());

// function addCard(asientoId: number, suplemento: number) {
//     var play: Card = {
//         asientoId: asientoId,
//         nombreObra: sessionSeats.value.nombreObra,
//         fecha: sessionSeats.value.date!,
//         precio: sessionSeats.value.precio + suplemento,
//         sala: sessionSeats.value.salaId,
//     }



//     const index = seats.findIndex(playTicket => playTicket.asientoId === play.asientoId);

//     if (index !== -1) {
//         seats.splice(index, 1);
//     } else {
//         seats.push(play);
//     }
// }
</script>
<template>
        <div v-for="element in sessionSeats" :key="element.id" class="seatContainer">
            <div v-for="seat in element.asientos.reverse()">
                <SeatSvg :id="seat.id" :type="getSeatType(seat)"></SeatSvg>
            </div>
        </div>

    <CardItemTicket v-for="(ticket, index) in seats" :asiento-id="ticket.asientoId" :date="ticket.fecha"
        :precio="ticket.precio" :sala="ticket.sala" :nombre-obra="ticket.nombreObra"></CardItemTicket>
</template>
<style scoped>
.seatContainer {
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 500px;
}

@media screen and (min-width: 800px) {
    .seatContainer {
        width: 800px;
    }
}

@media screen and (min-width: 1000px) {
    .seatContainer {
        width: 1000px;
    }
}
</style>