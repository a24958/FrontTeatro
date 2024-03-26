<script setup lang="ts">
import router from "@/router";
import { sessionFunctionsStore } from "../../stores/storeSessionsFunctions";
import SessionItem from './SessionItem.vue';
import { onBeforeMount, ref, toValue } from "vue";
import { storeToRefs } from "pinia";

const store = sessionFunctionsStore();
const obraId = router.currentRoute.value.params.obraId[0]

onBeforeMount(async () => {
    await store.getPlayById(obraId);
})

const { seatData: data } = storeToRefs(store);
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

</script>
<template >
    <div v-for="element in data" :key="element.id">
        <SessionItem v-for="session in element.sesiones" :key="session.sesionId" :sesion-id="session.sesionId"
            :date="session.date" :salaId="session.salaId" :precio="session.precio"
            :asientos-disponibles="session.asientosDisponibles">
        </SessionItem>
    </div>
</template>
<style scoped></style>

<!-- sesionId: number,
    date: Date,
    salaId: number,
    precio: number,
    asientosDisponibles: number
 -->