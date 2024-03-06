import { defineStore } from "pinia";
import { reactive } from "vue";

function ExceptionNotFound(id: number): void{
    throw `Play with id ${id} not found`
}

interface Play {
    id: number;
    name: string;
    description: string;
    price: number;
}

export const intranetFunctionsStore = defineStore('intranetFunctions', () => {
    const plays:Play[] = [
        { id: 0, name: "El Rey León", description: "Cuenta la historia de dos jóvenes que, a pesar de la oposición de sus familiares, rivales entre sí, deciden casarse de forma ilegal y vivir juntos.", price: 12.50 },
        { id: 1, name: "Cuento de Navidad", description: "Cuenta la historia de dos jóvenes que, a pesar de la oposición de sus familiares, rivales entre sí, deciden casarse de forma ilegal y vivir juntos.", price: 2.00 },
        { id: 2, name: "Hamlet", description: "Cuenta la historia de dos jóvenes que, a pesar de la oposición de sus familiares, rivales entre sí, deciden casarse de forma ilegal y vivir juntos.", price: 50 }
    ];

    const nuevaInfo: Play = { id: 0, name: "Prueba Titulo", description: "Prueba description", price: 10};

    const theaterPlays = reactive(Array<Play>());
    theaterPlays.push(...plays);    

    function deletePlay(id: number) {
        var index = theaterPlays.findIndex(play => play.id === id);
        theaterPlays.splice(index, 1)
    }

    function editPlay(id: number) {
        var play = theaterPlays.find(play => play.id === id);

        if (play !== undefined || play !== null) {
            play!.name = nuevaInfo.name;
            play!.description = nuevaInfo.description;
            play!.price = nuevaInfo.price;
        } else {
            ExceptionNotFound(id);
        }
    }

    return { theaterPlays, deletePlay, editPlay }
});