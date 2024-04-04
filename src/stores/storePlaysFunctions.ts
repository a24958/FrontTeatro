import { defineStore } from "pinia";
import { reactive } from "vue";
import { apiCallsFunctionsStore } from "./stroreApiCalls";

function ExceptionNotFound(id: number): void{
    throw `Play with id ${id} not found`
}

interface Play {
    id: number,
    nombre: string,
    descripcion: string,
    rutaFoto: string,
    fecha: Date,
    duracion: number
}

interface Sesion {
    id: number,
    salaId: number,
    obraId: number,
    nombreObra: string,
    date: Date,
    precio: number
}

interface Buy {
    compraId: number,
    usuarioId: number,
    sesionId: number,
    precio: number,
    fecha: Date,
}

interface User {
    id: number,
    email: string,
    rol: string,
    nombre: string,
    
}


export const intranetFunctionsStore = defineStore('intranetFunctions', () => {
    const apiCallsFunctions = apiCallsFunctionsStore();

    var theaterPlays = reactive(Array<Play>());

    apiCallGet();

    async function apiCallGet() {
        apiCallsFunctions.apiCall('GET', 'Obra', null, theaterPlays,)  
    } 
    


    return { theaterPlays, apiCallGet }
});