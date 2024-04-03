<script setup lang="ts">

</script>

<template>
    <div>
        <p> SalaId </p>
        <p> Fecha </p>
        <p> Precio </p>
        <p>Opciones</p>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    padding: 16px;
    background-color: grey;
    justify-content: space-around;
    color: white;
    font-size: large;
}

div img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
}

.playLine-name {
    display: block;
    align-items: center;
    justify-content: center;
    width: 125px;
    margin-right: 70px;
}

.playLine-description {
    width: 30%;
    margin-right: 0px;
}

.playLine-price {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    margin-right: 8px;
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