import { defineStore } from "pinia";
import { reactive } from "vue";

function ExceptionNotFound(id: number): void{
    throw `Play with id ${id} not found`
}

interface Play {
    id: number,
    nombre: string,
    descripcion: string,
    rutaFoto: string,
}

export const intranetFunctionsStore = defineStore('intranetFunctions', () => {
    async function apiCallGet() {
        const requestOptions: RequestInit = {
            method: 'GET', 
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        try {
            const response = await fetch('http://localhost:5169/Obra', requestOptions);
            
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            
            const json = await response.json();  
            theaterPlays.push(...json);
            
        } catch (error) {
            console.log('Error al hacer la llamada a la API:', error);
        }
    }

    const theaterPlays = reactive(Array<Play>()); 

    async function deletePlay(id: number) {
        const requestOptions: RequestInit = {
            method: 'DELETE', 
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        try {
            const response = await fetch(`http://localhost:5169/Obra/${id}`, requestOptions);
            
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            
            var index = theaterPlays.findIndex(play => play.id === id);
            theaterPlays.splice(index, 1)
            
        } catch (error) {
            console.log('Error al hacer la llamada a la API:', error);
        }
    }

    function editPlay(id: number) {
        var play = theaterPlays.find(play => play.id === id);

        // if (play !== undefined || play !== null) {
        //     play!.name = nuevaInfo.name;
        //     play!.description = nuevaInfo.description;
        //     play!.price = nuevaInfo.price;
        // } else {
        //     ExceptionNotFound(id);
        // }
    }

    return { theaterPlays, deletePlay, editPlay, apiCallGet }
});