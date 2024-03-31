<script setup lang="ts">
import SeatSvg from './SeatSvg.vue'
import { seatSelectorFunctionsStore } from "../../stores/storeSeatSelectorFunctions";
import { onBeforeMount, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import router from '@/router';
import CardItemTicketContainer from './CardItemTicketContainer.vue';

const store = seatSelectorFunctionsStore();
const sessionId = router.currentRoute.value.params.sesionId[0];

onBeforeMount(() => {
    store.getSessionById(sessionId)
})

const { sessionData: sessionSeats } = storeToRefs(store)

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

function addCard(asientoId: number, suplemento: number, ocupado: boolean) {
    if (ocupado === false) {
        var ticket: Card = {
            asientoId: asientoId,
            nombreObra: sessionSeats.value![0].nombreObra,
            fecha: sessionSeats.value![0].date!,
            precio: sessionSeats.value![0].precio + suplemento,
            sala: sessionSeats.value![0].salaId,
        }

        const index = seats.findIndex(playTicket => playTicket.asientoId === ticket.asientoId);

        if (index !== -1) {
            seats.splice(index, 1);
        } else {
            seats.push(ticket);
        }
    }
}

</script>
<template>
    <div class="seatSection">
        <div v-for="element in sessionSeats" :key="element.id" class="seatContainer">
            <div v-for="seat in element.asientos" @click="addCard(seat.id, seat.suplemento, seat.ocupado)">
                <SeatSvg :id="seat.id" :type="getSeatType(seat)"></SeatSvg>
            </div>
        </div>
        <CardItemTicketContainer :seats="seats"></CardItemTicketContainer>
    </div>
</template>
<style scoped>
.seatSection {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
}

.seatContainer {
    margin-top: 48px;
    display: flex;
    flex-direction: row-reverse;
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