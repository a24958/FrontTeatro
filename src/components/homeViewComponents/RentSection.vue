<template>
  <body>
    <canvas id="myCanvas" height="300" width="350"></canvas>
  </body>
</template>

<style scoped>
body {
  margin: 0;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
}

canvas {
  display: block;
  width: 400px;
  align-items: center;
}


</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el canvas y su contexto
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    // Cargar imágenes
    var imgLeft = new Image();
    imgLeft.src = "../../src/assets/images/CaraRosa.jpg";

    var imgRight = new Image();
    imgRight.src = "../../src/assets/images/CaraAzul.jpg";

    // Rutas de las imágenes alternativas
    var imgLeftAlt = "../../src/assets/images/CaraAzul-alreves.jpg";
    var imgRightAlt = "../../src/assets/images/CaraRosa-alreves.jpg";

    // Coordenadas iniciales de las imágenes
    var leftX = -imgLeft.width;
    var rightX = canvas.width;

    // Variable textAnimation declarada aquí para que sea accesible globalmente
    var textAnimation;

    // Función para animar las imágenes
    function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Dibujar las imágenes
            ctx.drawImage(imgLeft, leftX, 20, 100, 100 * imgLeft.height / imgLeft.width);
            ctx.drawImage(imgRight, rightX, 20, 100, 100 * imgRight.height / imgRight.width);

            // Mover las imágenes hacia el centro
            leftX += 2;
            rightX -= 2;

            // Detener la animación cuando las imágenes se encuentren
            if (leftX + 100 >= rightX) {
                // Detener la animación actual
                cancelAnimationFrame(animation);

                var temp = imgLeft.src;
                imgLeft.src = imgLeftAlt;
                imgLeftAlt = temp;

                temp = imgRight.src;
                imgRight.src = imgRightAlt;
                imgRightAlt = temp;

                // Iniciar nueva animación con direcciones opuestas
                animation = requestAnimationFrame(animateReverse);
            } else {
                // Continuar la animación
                animation = requestAnimationFrame(animate);
            }
        }

        // Función para animar las imágenes en dirección opuesta
        function animateReverse() {
            // Limpiar el canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Dibujar las imágenes
            ctx.drawImage(imgLeft, leftX, 20, 100, 100 * imgLeft.height / imgLeft.width);
            ctx.drawImage(imgRight, rightX, 20, 100, 100 * imgRight.height / imgRight.width);

            // Mover las imágenes hacia el centro
            leftX -= 2;
            rightX += 2;

            // Detener la animación cuando las imágenes vuelvan a su posición inicial
            if (leftX <= -imgLeft.width) {
                // Detener la animación actual
                cancelAnimationFrame(animation);

                // Reiniciar la animación original
                leftX = -imgLeft.width;
                rightX = canvas.width;
                animation = requestAnimationFrame(animate);
            } else {
                // Continuar la animación
                animation = requestAnimationFrame(animateReverse);
            }
        }

        // Coordenadas iniciales del texto
        var xPos = 50;
        var xVel = 2;

        var animatingText = false;
        // Función para animar el texto
        function animateText() {
            var xPos = 50;
            
            var xVel = 2;

            function drawText() {
                ctx.clearRect(0, 200, canvas.width, 60); // Limpiar el área donde se dibuja el texto
                ctx.font = "30px Roboto"; // Ajustar el tamaño de fuente
                ctx.fillStyle = "black";
                ctx.fillText("GALACTIC", xPos, 250); // Dibujar el texto

                xPos += xVel;

                // Cambiar la dirección cuando el texto llegue a los bordes del canvas
                if (xPos + ctx.measureText("GALACTIC").width >= canvas.width || xPos <= 0) {
                    xVel *= -1;
                }

                textAnimation = requestAnimationFrame(drawText);
            }

            drawText();
            animatingText = true;
        }

        // Iniciar la animación de las imágenes
        animate();

        // Agregar event listener para iniciar la animación del texto cuando se pasa el ratón por encima
        canvas.addEventListener('mouseenter', function () {
          if (!animatingText) {
            animateText();
            
          }
        });
        // Iniciar la animación de las imágenes
        var animation = requestAnimationFrame(animate);
      });        
</script>
