<script setup lang="ts">

</script>

<template>
    <form class="contacto-formulario">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="email">Email</label>
        <input type="text" id="email" name="email" required>

        <label for="telefono">Teléfono</label>
        <input type="text" id="telefono" name="telefono" required>

        <label for="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

        <button>Enviar &#10140;</button>

    </form>
</template>

<style scoped>
.contacto-formulario button {
    padding: 8px;
    background-color: #3385D9;
    width: 350px;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: #3385D9;
    margin-top: 12px;
    margin-bottom: 48px;
}

.contacto-formulario button a {
    text-decoration: none;
    color: white;
}

.contacto-formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 320px;
    height: 450px;
    border-color: #EBEBEB;
    border-style: solid;
    border-radius: 12px;
    margin-bottom: 40px;
}

.contacto-formulario input,
.contacto-formulario label,
.contacto-formulario textarea {
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    align-items: start;
    width: 280px;
}

.contacto-formulario input,
.contacto-formulario textarea {
    border-radius: 8px;
    border-style: solid;
    border-color: #EBEBEB;
    padding: 8px;
}

.contacto-formulario input:focus,
.contacto-formulario textarea:focus {
    border: 1px solid #3385D9;
}

.contacto-formulario button {
    width: 280px;
}
</style>