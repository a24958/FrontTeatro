import router from "@/router";
import { defineStore } from "pinia";
import { ref } from "vue";

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

export const seatSelectorFunctionsStore = defineStore('seatSelectorFunctions', () => {

    function setData(newData: Session[]) {
        sessionData.value = newData
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

    return { sessionData, getSessionById }
})