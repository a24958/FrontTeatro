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

export const seatSelectorFunctionsStore = defineStore('loginFunctions', () => {

    const sessionId = router.currentRoute.value.params.sesionId[0];

    async function getSessionById() {
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

            session.value.id = json["id"];
            session.value.salaId = json["salaId"];
            session.value.obraId = json["obraId"];
            session.value.nombreObra = json["nombreObra"];
            session.value.date = json["date"];
            session.value.precio = json["precio"];
            session.value.sala = json["sala"]
            session.value.asientos = json["asientos"] || [];

            return session;


        } catch (error) {
            console.log('Error al hacer la llamada a la API:', error);
        }
    }

    getSessionById();

    return { getSessionById, session }
})