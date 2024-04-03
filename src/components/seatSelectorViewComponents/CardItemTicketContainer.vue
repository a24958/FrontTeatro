<script setup lang="ts">
import CardItemTicket from './CardItemTicket.vue';

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

const emit = defineEmits(['removeTicket']);

const emits = (asientoId: number) => {
    emit('removeTicket', asientoId)
} 

</script>
<template>
    <div>
        <CardItemTicket v-for="(ticket, index) in seats" :asiento-id="ticket.asientoId" :date="ticket.fecha"
            :precio="ticket.precio" :sala="ticket.sala" :nombre-obra="ticket.nombreObra" @remove-ticket="emits(ticket.asientoId)"></CardItemTicket>
    </div>
</template>
<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 28px;
}

@media screen and (min-width: 800px) {
    div {
        margin-right: 48px;
    }
}

@media screen and (min-width: 1000px) {
    div {
        margin-right: 48px;
    }
}
</style>