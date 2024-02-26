<script setup lang="ts">

</script>

<template>
    <section class="alquilar-section">
        <article class="alquilar-container">
            <h1>Alquila el teatro</h1>
            <p>Rellena nuestro formulario con los campos necesarios y nos pondremos en contacto contigo lo antes posible.
                Tenemos un amplio Teatro donde podrá alquilarlo para eventos, espectáculos y actividades laborales.</p>
            <button><a href="#">Alquilar &#10140;</a></button>
            <img src="../../assets/images/ALQUILER.jpg" alt="">
        </article>
    </section>
</template>

<style scoped>
.alquilar-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.alquilar-container button {
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

.alquilar-container button a {
    text-decoration: none;
    color: white;
}

.alquilar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 350px;
}

.alquilar-container h1 {
    color: #3385D9;
    text-align: center;
    font-size: 48px;
    margin-bottom: 0px;
}

.alquilar-container p {
    text-align: center;
}

.alquilar-container img {
    height: 300px;
    width: 400px;
}

@media screen and (min-width: 1000px) {
    .alquilar-container {
        width: 700px;
    }

    .alquilar-container img {
        width: 700px;
        height: 500px;
    }

    .alquilar-container p {
        width: 700px;
    }
}</style>