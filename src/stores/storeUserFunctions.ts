import { defineStore } from "pinia";
import { reactive } from "vue";


interface Sesion {
    salaId: number;
    nombreObra: string;
    date: Date; 
}
  
interface Compra {
    id: number;
    precio: number;
    asientos: number[];
    sesion: Sesion;
}
  
interface User {
    id: number;
    nombre: string;
    compras: Compra[];
}

export const userFunctionsStore = defineStore('userFunctionsStore', () => {
    async function getUserById(userId: number) {

        try {
            const response = await fetch(`http://localhost:5169/Usuario/${userId}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }

            const userData: User = await response.json();

            
            
            // Guardar datos en el Local Storage
            localStorage.setItem('userData', JSON.stringify(userData));

            return userData;
        } catch (error) {
            console.log('Error al hacer la llamada a la API:', error);
            return null; // Retorna null en caso de error
        }
    }
    
    return {getUserById };
});
