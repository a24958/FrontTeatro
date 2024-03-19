import { defineStore } from "pinia";
import { apiCallsFunctionsStore } from "./stroreApiCalls";
import { reactive } from "vue";

interface Play {
    id: number,
    nombre: string,
    descripcion: string,
    rutaFoto: string,
    duracion: number
}

export const obrasFucntionsStore = defineStore('obrasFunctions', () => {
    const apiCallsFunctions = apiCallsFunctionsStore();

    const theaterPlays = reactive(Array<Play>());

    apiCallGet();

    async function apiCallGet() {
        apiCallsFunctions.apiCall('GET', 'Obra', null, theaterPlays,)  
    } 

    return { apiCallGet }
})