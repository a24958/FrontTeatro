import { defineStore } from "pinia";
import { reactive } from "vue";


interface Sesion {
    salaId: number;
    nombreObra: string;
    date: Date; 
}
  
interface Buy {
    id: number;
    precio: number;
    asientos: number[];
    sesion: Sesion;
}

interface User {
    id: number,
    email: string,
    password: string,
    nombre: string,
    rol: string
}

function getUserDataFromLocalStorage(): User | null {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
        const userData: User = JSON.parse(userDataString);
        return userData;
    } else {
        return null;
    }
}

  

export const userFunctionsStore = defineStore('userFunctionsStore', () => {
    

    
    var UserBuys = reactive(Array<Buy>());
    var user = getUserDataFromLocalStorage()
    getUserById(user.id);


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
            const json = await response.json();
            console.log(json)
            UserBuys.push(...json);

                
        } catch (error) {
            console.log('Error al hacer la llamada a la API:', error);
            return null; // Retorna null en caso de error
        }
    }
    
    return {UserBuys, getUserById };
});
