<script setup lang="ts">
import router from "@/router";
import { sessionFunctionsStore } from "../../stores/storeSessionsFunctions";
import SessionItem from './SessionItem.vue';
import { onBeforeMount, ref, toValue } from "vue";
import { storeToRefs } from "pinia";
import PlayItem from "../playsViewComponents/PlayItem.vue";

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
<template>
    <section class="sessionContainer">
        <div v-for="element in data" :key="element.id">
            <PlayItem :id="element.id" :nombre="element.nombre" :descripcion="element.descripcion" :duracion="element.duracion" :ruta-foto="element.rutaFoto" :select-seat="false"></PlayItem>
        </div>
        <div v-for="element in data" :key="element.id" class="sessionContainerItem">
            <SessionItem v-for="session in element.sesiones" :key="session.sesionId" :sesion-id="session.sesionId"
                :date="session.date" :salaId="session.salaId" :precio="session.precio"
                :asientos-disponibles="session.asientosDisponibles">
            </SessionItem>
        </div>
    </section>
</template>
<style scoped>
.sessionContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 48px;
}

.sessionContainerItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

@media screen and (min-width: 800px) {
    .sessionContainer {
        flex-direction: row;
        align-items: start;
    }

    .sessionContainerItem {
        flex-direction: row;
        width: 70%;
        flex-wrap: wrap;
        justify-content: start;
    }
}
</style>