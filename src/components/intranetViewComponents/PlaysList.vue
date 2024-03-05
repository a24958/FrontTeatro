<script setup lang="ts">
import { reactive } from 'vue'

interface Play {
  name: string;
  description: string;
  price: number;
}

const plays: Play[] = [
    { name: "El Rey León", description: "Cuenta la historia de dos jóvenes que, a pesar de la oposición de sus familiares, rivales entre sí, deciden casarse de forma ilegal y vivir juntos.", price: 12.50 },
    { name: "Cuento de Navidad", description: "Cuenta la historia de dos jóvenes que, a pesar de la oposición de sus familiares, rivales entre sí, deciden casarse de forma ilegal y vivir juntos.", price: 2.00 },
    { name: "Hamlet", description: "Cuenta la historia de dos jóvenes que, a pesar de la oposición de sus familiares, rivales entre sí, deciden casarse de forma ilegal y vivir juntos.", price: 50 }
];
</script>

<template>
    <div>
        <table>
            <tbody>
                <tr v-for="(play, index) in plays" :key="index" :class="{ 'fila-par': index % 2 === 0, 'fila-impar': index % 2 !== 0 }">
                    <td>{{ play.name }}</td>
                    <td>{{ play.description }}</td>
                    <td>{{ play.price }}</td>
                    <td><button>Modificar</button></td>
                    <td><button>Eliminar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
div{
    display: flex;
    align-items: center;
    justify-content: center;
}

table {
  width: 80%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
}

.fila-par {
  background-color: #f0f0f0; 
}

.fila-impar {
  background-color: #ffffff;
}
</style>