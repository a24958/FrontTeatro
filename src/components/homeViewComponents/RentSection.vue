<template>
    <section class="alquiler-section">
        <article class="alquiler-container">
            <img src="../../assets/images/ALQUILER.jpg" alt="">
            <h2>Alquila el teatro</h2>
            <p>Galactic ofrece la posibilidad de alquilar sus diferentes espacios para eventos de todo tipo, acordes con la magnitud de la firma o empresa que así lo requiera, en base a al tamaño de los diferentes espacios, servicios, y equipamiento humano y técnico.</p>
            <button><a href="#">Mas información &#10140;</a></button>
        </article>
    </section>
</template>

<style scoped>
.alquiler-container button a{
    text-decoration: none;
    color: white;
}

.alquiler-container button{
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

.alquiler-section {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.alquiler-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 350px;
}
.alquiler-container img {
  width: 350px;
}
.alquiler-container h2 {
  color: #3385D9;
  text-align: center;
  margin-bottom: 0;
}
.alquiler-container p {
  width: 350px;
  text-align: center;
  margin-bottom: 32px;
}

@media screen and (min-width: 1000px){
  .alquiler-container img {
    width: 700px;
  }
  .alquiler-container p {
    width: 700px;
  }
}
</style>