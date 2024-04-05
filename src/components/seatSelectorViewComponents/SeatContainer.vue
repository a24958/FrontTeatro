<script setup lang="ts">
import SeatSvg from './SeatSvg.vue'
import { seatSelectorFunctionsStore } from "../../stores/storeSeatSelectorFunctions";
import { buysFunctionsStore } from "../../stores/storeBuysFunctions";
import { onBeforeMount, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import router from '@/router';
import CardItemTicketContainer from './CardItemTicketContainer.vue';
import ScenerySvg from './ScenerySvg.vue';
import { eachMonthOfInterval } from 'date-fns';
import { ref } from 'vue';


const store = seatSelectorFunctionsStore();


let sessionId = '';
for (const session of router.currentRoute.value.params.sesionId) {
    sessionId += session 
}


const storeBuys = buysFunctionsStore();

onBeforeMount(() => {
    store.getSessionById(sessionId)
})

const { sessionData: sessionSeats, asientoId: seatId } = storeToRefs(store)

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
const email = ref('');
const nombre = ref('');
const tarjeta = ref('');

function buyTickets() {
    if (!email.value && !nombre.value && !tarjeta.value) {

    } else {
        const userData = localStorage.getItem('userData');
        const userId = userData ? JSON.parse(userData).id : 1;
        const asientos = store.getSeatsIds()


        const data = {
            "sesionId": parseInt(sessionId),
            "asientos": asientos,
            "usuarioId": userId
        }

        storeBuys.postBuy(data);
        store.seats = Array<Card>();
    }

}

</script>
<template>
    <div class="seatSection">
        <div class="test">
            <div v-for="element in sessionSeats" :key="element.id" class="seatContainer">
                <div v-for="seat in element.asientos" @click="store.addCard(seat.id, seat.suplemento, seat.ocupado)">
                    <SeatSvg :id="seat.id" :type="getSeatType(seat)"></SeatSvg>
                </div>
            </div>
            <div class="scenary-svg">
                <ScenerySvg></ScenerySvg>
            </div>

        </div>
        <div class="buy">
            <form class="form" action="">
                <h2>Formulario de Pago</h2>
                <div>
                    <label for="email">Email</label>
                    <input v-model="email" type="text" id="email" name="email" required>
                </div>
                <div>
                    <label for="email">Nombre</label>
                    <input v-model="nombre" type="text" id="name" name="name" required>
                </div>
                <div>
                    <label for="email">Nº de Tarjeta</label>
                    <input v-model="tarjeta" type="number" id="bank" name="bank" required>
                </div>

                <button @click="buyTickets()">COMPRAR &#10140;</button>
            </form>
            <CardItemTicketContainer :seats="store.seats"></CardItemTicketContainer>
        </div>

    </div>
</template>
<style scoped>
h2{
    color:#3385D9
}
.seatSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.seatContainer {
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 500px;
}

.test {
    display: flex;
    flex-direction: column;
}

.scenary-svg {
    transform: scale(0.75);
    margin: 15px;
    display: flex;
    justify-content: center;
}

.form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-color: #EBEBEB;
    border-style: solid;
    border-radius: 12px;
    width: 500px;
}

.form div{
    width: 80%;
    display: flex;
    justify-content: flex-end;
}


.form input {
    height: 20px;
    width: 50%;
    margin-bottom: 20px;
    margin-left: 30px;
    margin-right: 30px;
    border: 2px solid #3385D9;
}

.form button {
    padding: 8px;
    background-color: #3385D9;
    width: 350px;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: #3385D9;
    margin-top: 12px;
    margin-bottom: 48px;
}

@media screen and (min-width: 800px) {
    .seatSection {
        flex-direction: row;
        align-items: start;
    }

    .seatContainer {
        width: 800px;
    }
}

@media screen and (min-width: 1000px) {
    
    .seatSection {
        flex-direction: row;
        align-items: start;
        justify-content: center;
    }

    .seatContainer {
        width: 1000px;
    }

    .scenary-svg{
    transform: scale(1);

    }
}
</style>