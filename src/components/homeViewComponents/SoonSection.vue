<template>
    <section class="proximamente-section">
        <h2 class="proximamente-section_tittle">Proximamente</h2>
        <p class="proximamente-section_description">Estas son las obras que estarán disponibles proximamente para que usted pueda disfrutarlas.</p>
        <div>
            <article class="proximamente-section-article">
                <div class="proximamente-section-article-container">
                    <img src="../../assets/images/ROMEO_JULIETA.jpg" alt="">
                    <h3>Romeo y Julieta</h3>
                    <p>Cuenta la historia de dos jóvenes que, a pesar de la oposición de sus familiares, rivales entre sí, deciden casarse de forma ilegal y vivir juntos.</p>
                </div>
            </article>
            <article class="proximamente-section-article">
                <div class="proximamente-section-article-container">
                    <img src="../../assets/images/CAMINO_ZOO.webp" alt="">
                    <h3>Camino al Zoo</h3>
                    <p>Peter es un hombre casado que trabaja en una pequeña casa editorial y Jerry es un hombre solitario que acaba de regresar del zoológico. Este encuentro desafiará sus percepciones sobre el amor, el fracaso, y la importancia de conectarse con alguien o algo a cualquier costo.</p>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
.proximamente-section-article-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 350px;
}
.proximamente-section-article-container img {
  width: 350px;
  height: 200px;
}
.proximamente-section-article-container h3 {
  color: #3385D9;
  font-weight: bold;
  text-align: start;
  width: 100%;
  margin-bottom: 0px;
}
.proximamente-section-article-container p {
  text-align: start;
  margin-bottom: 48px;
}
.proximamente-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.proximamente-section h2 {
  color: #3385D9;
  text-align: center;
  margin-bottom: 0;
  margin-top: 50px;
}
.proximamente-section p {
  width: 350px;
  margin-bottom: 32px;
}

@media screen and (min-width: 1000px){
  .proximamente-section {
    width: 100%;
  }
  .proximamente-section p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .proximamente-section div {
    display: flex;
  }
  .proximamente-section div article {
    margin-right: 100px;
    margin-left: 100px;
  }
  .proximamente-section div article div img {
    width: 400px;
    height: 250px;
  }
}
</style>