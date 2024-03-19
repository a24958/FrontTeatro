import { defineStore } from "pinia";

interface Session{
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

var play: Play;
export const sessionFunctionsStore = defineStore('sessionFunctions', () => {

    getPlayById(1);

    async function getPlayById(id:number) {
        const requestOptions: RequestInit = {
            method: 'GET', 
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
            }
        };

    
        try {
            const response = await fetch(`http://localhost:5169/Obra/1`, requestOptions);
            
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            
            const json = await response.json();
            play = {
                id: json["id"],
                nombre: json["nombre"],
                descripcion: json["descripcion"],
                rutaFoto: json["rutaFoto"],
                duracion: json["duracion"],
                sesiones: json["sesiones"],
            };
            
            
            
        } catch (error) {
            console.log('Error al hacer la llamada a la API:', error);
        }
    }

    return { play }
})