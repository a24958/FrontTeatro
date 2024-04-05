<script setup lang="ts">
const userData = localStorage.getItem('userData');
const nombre = userData ? JSON.parse(userData).nombre : null;
</script>


<template>
    <div>
        <h1>Bienvenido {{ nombre }}</h1>
        <h2>Estas son tus compras</h2>
    </div>
    <div class="compras-section">
        <p class="id">ID</p>
        <p class='precio'>Precio</p>
        <p class='asientos'>Asientos</p>
        <p class='salaId'>Sala</p>
        <p class='nombreObra'>Obra</p>
        <p class='date'> Fecha</p>
    </div>
</template>

<style scoped>
h1 {
    font-size: 48px;
    color: #3385D9;
    text-align: center;
    margin-bottom: 0px;
}

h2{
    font-size: 36px;
    color: #3385D9;
    text-align: center;
    margin-bottom: 20px;
}

p{
    font-size: 20px;
    font-weight: bold;
}
.compras-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}

.id {
    width: 35px;
}

.precio {
    width: 40px;

}

.asientos {
    width: 60px;

}

.salaId {
    width: 35px;

}

.nombreObra {
    width: 200px;

}

.date {
    width: 200px;

}

@media screen and (min-width: 800px) {
    .compras-section {
        width: 50%;
    }
}
</style>