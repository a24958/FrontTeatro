import router from "@/router";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

interface Session {
    sesionId: number,
    date: Date,
    salaId: number,
    precio: number,
    asientosDisponibles: number
}

interface Play {
    id: number,
    nombre: string,
    descripcion: string,
    rutaFoto: string,
    duracion: number
    sesiones: Array<Session>
}

interface PlayResponse {
    play: Play | null;
    error: string | null;
}

const play = ref<Play>({
    id: 0,
    nombre: '',
    descripcion: '',
    rutaFoto: '',
    duracion: 0,
    sesiones: []
});

export const sessionFunctionsStore = defineStore('sessionFunctions', () => {

    const obraId = router.currentRoute.value.params.obraId[0];

    async function getPlayById() {
        const requestOptions: RequestInit = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await fetch(`http://localhost:5169/Obra/${parseInt(obraId)}`, requestOptions);

            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }

            const json = await response.json();
            
            play.value.id = json["id"];
            play.value.nombre = json["nombre"];
            play.value.descripcion = json["descripcion"];
            play.value.rutaFoto = json["rutaFoto"];
            play.value.duracion = json["duracion"];
            play.value.sesiones = json["sesiones"] || [];

            return play

        } catch (error) {
            console.log('Error al hacer la llamada a la API:', error);
        }
    }

    getPlayById();


    return { play, getPlayById }
})