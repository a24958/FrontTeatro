<script setup lang="ts">
import SeatSvg from './SeatSvg.vue'
import { seatSelectorFunctionsStore } from "../../stores/storeSeatSelectorFunctions";

const seatSelectorFunctions = seatSelectorFunctionsStore();

const session = seatSelectorFunctions.session;

interface Seat {
    id: number,
    tipoAsiento: number,
    suplemento: number,
    ocupado: boolean
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
</script>
<template>
    <div class="seatContainer">
        <SeatSvg v-for="(seat, index) in session.asientos.reverse()" :id="seat.id" :type="getSeatType(seat)"></SeatSvg>
    </div>
</template>
<style scoped>
.seatContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 70%;
}
</style>