<script setup lang="ts">
import router from "@/router";
import { sessionFunctionsStore } from "../../stores/storeSessionsFunctions";
import SessionItem from './SessionItem.vue';
import { onMounted, ref, toValue } from "vue";
import { storeToRefs } from "pinia";

// const sessionFunctions = sessionFunctionsStore();

const store = sessionFunctionsStore();

interface Play {
    id: number,
    nombre: string,
    descripcion: string,
    rutaFoto: string,
    duracion: number
    sesiones: Session[]
}

interface Session {
    sesionId: number;
    date: Date;
    salaId: number;
    precio: number;
    asientosDisponibles: number;
}


const { seatData: data } = storeToRefs(store);


</script>
<template >
    <div @click="store.getPlayById()">
        aaaaaaaaaaa
        {{ data }}
    </div>
    <template v-if="data">
        <div v-for="element in data" :key="element.id">
            <div v-for="session in element.sesiones" :key="session.sesionId">
                <SessionItem :sesion-id="session.sesionId" :date="session.date" :salaId="session.salaId"
                    :precio="session.precio" :asientos-disponibles="session.asientosDisponibles">
                    <!-- Your SessionItem content here -->
                </SessionItem>
            </div>
        </div>
    </template>
</template>
<style scoped></style>

<!-- sesionId: number,
    date: Date,
    salaId: number,
    precio: number,
    asientosDisponibles: number
 -->