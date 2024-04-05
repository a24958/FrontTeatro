<script setup lang="ts">

</script>

<template>
    <div>
        <p class="obra"> Obra </p>
        <p class="sala"> SalaId </p>
        <p class="fecha"> Fecha </p>
        <p class="precio"> Precio </p>
        <p class="playLine-buttonsSection">Opciones</p>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    padding: 16px;
    background-color: #3385D9;
    justify-content: space-around;
    color: white;
    font-size: large;
}

div img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
}

.obra{
    width: 200px;
    text-align: center;
}

.sala{
    width: 100px;
    text-align: center;
}

.fecha{
    width: 200px;
    text-align: center;
}

.precio{
    width: 100px;
    text-align: center;
}

div button {
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 7px;
}

.playLine-buttonsSection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100px;
}

.playLine-buttonsSection button img {
    width: 20px;
    height: 20px;
}

#edit {
    margin-right: 8px;
    background-color: orange;
}

#delete {
    background-color: red;
}

#delete img {
    margin-left: -1px;
}

@media screen and (min-width: 800px) {
    div {
        width: 50%;
    }
}
</style>