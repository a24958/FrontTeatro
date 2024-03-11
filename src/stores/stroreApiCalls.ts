import { defineStore } from "pinia";
import { reactive } from "vue";

const GET_METHOD = 'GET'
const PUT_METHOD = 'PUT'
const POST_METHOD = 'POST'
const DELETE_METHOD = 'DELETE'

interface Play {
    id: number,
    nombre: string,
    descripcion: string,
    rutaFoto: string,
}

export const apiCallsFunctionsStore = defineStore('apiCallsFunctions', () => { 
    function getCalls(json:any, array:Array<Play>) {
        array.push(...json)
    }

    function deleteCalls(array:Array<Play>, id: number) {
        var index = array.findIndex(item => item.id === id);
        array.splice(index, 1)
    }

    function putCalls(array:Array<Play>, id: number, data: any) {
        var index = array.findIndex(item => item.id === id);
        var editPlay = {
            id: id,
            nombre: data["nombre"],
            descripcion: data["descripcion"],
            rutaFoto: data["rutaFoto"],
        }
        array.splice(index, 1, editPlay)
    }

    async function apiCall(method:string, endpoint:string, data?:any, array?:Array<Play>, id?:number) {
        const requestOptions: RequestInit = {
            method: method, 
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if(data){
            requestOptions.body = JSON.stringify(data);
        }
    
        try {
            const response = await fetch(`http://localhost:5169/${endpoint}`, requestOptions);
            
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }

            switch(method){
                case GET_METHOD: 
                    const json = await response.json();
                    getCalls(json, array!)
                    break
                case DELETE_METHOD:
                    deleteCalls(array!, id!)
                    break
                case PUT_METHOD: 
                    putCalls(array!, id!, data)
            }  
            
        } catch (error) {
            console.log('Error al hacer la llamada a la API:', error);
        }
    }

    return { apiCall }
});