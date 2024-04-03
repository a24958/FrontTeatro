import router from "@/router";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

interface Seat {
    id: number,
    tipoAsiento: number,
    suplemento: number,
    ocupado: boolean
}

interface Session {
    id: number,
    salaId: number,
    obraId: number,
    nombreObra: string,
    date: Date | null,
    precio: number,
    sala: null,
    asientos: Array<Seat>
}

interface Card {
    asientoId: number,
    nombreObra: string,
    fecha: Date,
    precio: number,
    sala: number,
}


const session = ref<Session>({
    id: 0,
    salaId: 0,
    obraId: 0,
    nombreObra: "",
    date: null,
    precio: 0,
    sala: null,
    asientos: []
});

const rawData = ref()

const sessionData = ref<Session[]>()

const asientoId = ref(0)

const seats = reactive(Array<Card>())

export const seatSelectorFunctionsStore = defineStore('seatSelectorFunctions', () => {

    function setData(newData: Session[]) {
        sessionData.value = newData
    }

    function setAsientoId(id: number){
        asientoId.value = id
    }

    function onSelectedSeat(id:number){
        var asiento = document.getElementById(`${id}`) as HTMLElement;
        asiento.classList.toggle('selected');
    }
    

    function addCard(asientoId: number, suplemento: number, ocupado: boolean) {
        if (ocupado === false) {
            var ticket: Card = {
                asientoId: asientoId,
                nombreObra: sessionData.value![0].nombreObra,
                fecha: sessionData.value![0].date!,
                precio: sessionData.value![0].precio + suplemento,
                sala: sessionData.value![0].salaId,
            }
    
            const index = seats.findIndex(playTicket => playTicket.asientoId === ticket.asientoId);
    
            if (index !== -1) {
                seats.splice(index, 1);
            } else {
                seats.push(ticket);
            }
        }
    }

    function removeCard(id:number) {
        const seat = seats.find(playTicket => playTicket.asientoId === id);
        const index = seats.findIndex(playTicket => playTicket.asientoId === seat?.asientoId);
    
        if (index !== -1) {
            seats.splice(index, 1);
        }
    }

    async function getSessionById(sessionId: string) {
        const requestOptions: RequestInit = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'text/plain'
            }
        };

        try {
            const response = await fetch(`http://localhost:5169/Sesion/${parseInt(sessionId)}`, requestOptions);

            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }

            const json = await response.json();

            const mappedData = [{
                "id": json["id"],
                "salaId": json["salaId"],
                "obraId": json["obraId"],
                "nombreObra": json["nombreObra"],
                "date": json["date"],
                "precio": json["precio"],
                "sala": json["sala"],
                "asientos": json["asientos"] || [],
            }];
            setData(mappedData);

        } catch (error) {
            console.log('Error al hacer la llamada a la API:', error);
        }
    }

    return { sessionData, seats, asientoId, setAsientoId, getSessionById, addCard, removeCard, onSelectedSeat }
})