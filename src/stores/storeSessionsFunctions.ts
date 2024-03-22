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
    sesiones: Session[]
}

const play = ref<Play>({
    id: 0,
    nombre: '',
    descripcion: '',
    rutaFoto: '',
    duracion: 0,
    sesiones: []
});



const rawData = ref()

const seatData = ref<Play[]>()

export const sessionFunctionsStore = defineStore('sessionFunctions', () => {


    function setData(newData: Play[]) {
        seatData.value = newData
    }

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
            const mappedData = [{
                "id": json["id"],
                "nombre": json["nombre"],
                "descripcion": json["descripcion"],
                "rutaFoto": json["rutaFoto"],
                "duracion": json["duracion"],
                "sesiones": json["sesiones"] || [],
            }];
            setData(mappedData);


        } catch (error) {
            console.log('Error al hacer la llamada a la API:', error);
        }
    }


    return { seatData, getPlayById }
})