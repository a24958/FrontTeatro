<script setup lang="ts">

</script>

<template>
    <article class="contacto-container">
        <h1>Contacto</h1>
        <p>Escribenos un mensaje y estaremos encantados de responderle o también puede venir a visitarnos y le resolveremos
            cualquier tipo de duda.</p>
        <div>
            <a href="https://www.facebook.com/?locale=es_ES"><img src="../../assets/images/facebook.png" alt=""></a>
            <a href="https://twitter.com/?lang=es"><img src="../../assets/images/gorjeo.png" alt=""></a>
            <a href="https://www.instagram.com/"><img src="../../assets/images/instagram.png" alt=""></a>
            <a href="https://www.youtube.com/"><img src="../../assets/images/youtube.png" alt=""></a>
            <a href="https://es.linkedin.com/"><img src="../../assets/images/linkedin.png" alt=""></a>
        </div>
    </article>
</template>

<style scoped>
.contacto-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 350px;
}
.contacto-container h1 {
  font-size: 48px;
  color: #3385D9;
  text-align: center;
  margin-bottom: 0px;
}
.contacto-container p {
  text-align: center;
  margin-bottom: 24px;
}
.contacto-container div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  margin-bottom: 48px;
}
.contacto-container div a img {
  height: 20px;
  width: 20px;
}
</style>