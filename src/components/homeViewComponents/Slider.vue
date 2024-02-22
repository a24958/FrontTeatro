<script setup lang="ts">
import { plusSlidesUtils } from "../../utils/utils";
</script>

<template>
    <section class="slider-section">
        <div class="slider-container">
            <div class="slides">
                <div class="slide"><img src="../../assets/images/slider_1.jpg" alt="Imagen 1"></div>
                <div class="slide"><img src="../../assets/images/slider_2.jpg" alt="Imagen 2"></div>
                <div class="slide"><img src="../../assets/images/slider_3.jpg" alt="Imagen 3"></div>
            </div>
    
            <div class="prev" @click="plusSlidesUtils(-1)">&#10094;</div>
            <div class="next" @click="plusSlidesUtils(1)">&#10095;</div>
        </div>
    </section>
</template>

<style scoped>
.slider-container {
  width: 95%;
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
  position: relative;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
}
.slide img {
  width: 100%;
  height: auto;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: #3385D9;
  font-weight: bold;
  font-size: 20px;
  user-select: none;
}

.next {
  right: 0;
}

</style>