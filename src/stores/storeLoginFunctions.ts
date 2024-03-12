import { defineStore } from "pinia";
import { reactive } from "vue";

interface User {
    UsuarioId: number,
    NombreUsuario: string,
    EmailUsuario: string,
    PasswordUsuario: string,
    Rol: string
}

export const loginFunctionsStore = defineStore('loginFunctions', () => {
    async function getUser(user: string, password: string) {
        const requestOptions: RequestInit = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'text/plain'
            }
        };

        try {
            const response = await fetch(`http://localhost:5169/Usuario?usuario=${user}&password=${password}`, requestOptions);

            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }

            const json = await response.json();
            
            return json
            

        } catch (error) {
            console.log('Error al hacer la llamada a la API:', error);
        }
    }

    return { getUser }
})