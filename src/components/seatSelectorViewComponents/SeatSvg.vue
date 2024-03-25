<script setup lang="ts">
interface SeatStyle {
    back: string,
    seat: string,
    rest: string
}

const props = defineProps<{
    id: number,
    type: SeatStyle
}>()

function selectSeat() {
    var asiento = document.getElementById(`${props.id}`) as HTMLElement;
    asiento.classList.toggle('selected');
}

</script>
<template>

    <svg :id="`${id}`" @click="selectSeat()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 80" width="50" height="40">

        <!-- Respaldo con esquinas redondeadas -->
        <rect id="respaldo" x="5" y="10" width="45" height="40" :fill="`${type.back}`" rx="10" ry="10" />
        <text x="27" y="25" dominant-baseline="middle" text-anchor="middle" fill="white">{{ id }}</text>
        <!-- Base del asiento con esquinas redondeadas -->
        <rect id="base" x="5" y="47" width="45" height="15" :fill="`${type.seat}`" rx="5" ry="5" />
        <!-- Patas con esquinas no redondeadas -->
        <rect id="resto" x="10" y="62" width="10" height="13" :fill="`${type.rest}`"/>
        <rect id="resto" x="35" y="62" width="10" height="13" :fill="`${type.rest}`" />
        <!-- Apoyabrazos izquierdo con esquinas -->
        <rect id="resto" x="0" y="40" width="10" height="15" :fill="`${type.rest}`" rx="2" ry="2" />
        <!-- Apoyabrazos derecho con esquinas -->
        <rect id="resto" x="45" y="40" width="10" height="15" :fill="`${type.rest}`" rx="2" ry="2" />
    </svg>

</template>
<style scoped>
svg {
    transition: transform 0.3s ease;
    
}

svg:hover {
    transform: scale(1.05) translateY(-5px);
}

svg.selected #respaldo {
    fill: #ff8a14;
}

svg.selected #base {
    fill: #eb7600;
}

svg.selected #resto {
    fill: #cc6600;
}

@media screen and (min-width: 800px){
    svg{
        width: 80px;
        height: 60px;
    }
}

@media screen and (min-width: 1000px){
    svg{
        width: 100px;
        height: 80px;
    }
}
</style>