<script setup lang="ts">
import router from '@/router';
import CardItemTicket from './CardItemTicket.vue';
import { seatSelectorFunctionsStore } from '@/stores/storeSeatSelectorFunctions';
import { storeToRefs } from 'pinia';
import { ReactiveEffect, onBeforeMount, reactive } from 'vue';

const store = seatSelectorFunctionsStore();
const sessionId = router.currentRoute.value.params.sesionId[0];

onBeforeMount(() => {
    store.getSessionById(sessionId)
})

const { sessionData: sessionSeats } = storeToRefs(store)

interface Card {
    asientoId: number,
    nombreObra: string,
    fecha: Date,
    precio: number,
    sala: number,
}

const props = defineProps<{
    seats: Array<Card>
}>()

</script>
<template>
    <div>
        <CardItemTicket v-for="(ticket, index) in seats" :asiento-id="ticket.asientoId" :date="ticket.fecha"
        :precio="ticket.precio" :sala="ticket.sala" :nombre-obra="ticket.nombreObra"></CardItemTicket>
    </div>
</template>
<style scoped>
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
</style>