import { defineStore } from "pinia";
import { reactive } from "vue";

interface User {
    id: number,
    email: string,
    password: string,
    nombre: string,
    rol: string
}

export const loginFunctionsStore = defineStore('loginFunctions', () => {
    async function getUser(email: string, password: string) {
        const requestOptions: RequestInit = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }) 
        };

        try {
            const response = await fetch('http://localhost:5169/login', requestOptions);

            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }

            const userData:User = await response.json();
            
            // Guardar datos en el Local Storage
            localStorage.setItem('userData', JSON.stringify(userData));


            return userData;

        } catch (error) {
            console.log('Error al hacer la llamada a la API:', error);
            return false;
        }
    }


    async function postUser(user: string, email: string, password: string) {
        const requestOptions: RequestInit = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const data = {
            "email": email,
            "password": password,
            "nombre": user,
        }

        requestOptions.body = JSON.stringify(data);

        try {
            const response = await fetch(`http://localhost:5169/register`, requestOptions);

            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }

            return true;


        } catch (error) {
            console.log('Error al hacer la llamada a la API:', error);
            return false;
        }
    }

    return { getUser, postUser }
})