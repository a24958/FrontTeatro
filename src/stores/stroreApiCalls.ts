import { defineStore } from "pinia";

export const apiCallsFunctionsStore = defineStore('apiCallsFunctions', () => {
    async function apiCall(method:string, url:string, data?:any, dataActions?:Function) {
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
            const response = await fetch(url, requestOptions);
            
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            
            const json = await response.json();
            dataActions;  
            
        } catch (error) {
            console.log('Error al hacer la llamada a la API:', error);
        }
    }

    return { apiCall }
});