import { defineStore } from "pinia";

export const buysFunctionsStore = defineStore('buysFunctions', () => {
    async function postBuy(data: any) {
        const requestOptions: RequestInit = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        requestOptions.body = JSON.stringify(data);

        try {
            const response = await fetch(`http://localhost:5169/Compra`, requestOptions);
            console.log(response)

            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }

        } catch (error) {
            console.log('Error al hacer la llamada a la API:', error);
        }
    }

    return { postBuy }
})