<script setup lang="ts">
import { ref } from 'vue';
import PopUp from './SesionsPopUp.vue';

const props = defineProps<{
  id: number,
    salaId: number,
    obraId: number,
    nombre: string,
    date: Date,
  isEditing: boolean
}>()

const showPopup = ref(false);
const errorMessage = ref('');

const openPopup = () => {
  errorMessage.value = ''
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
};

function defineImage() {
  if(props.isEditing === true){
    return "/src/assets/images/editar.png"
  }

  if(props.isEditing === false){
    return "/src/assets/images/mas.png"
  }
    
}

const src = defineImage()

</script>

<template>
  <button @click="openPopup()"><img :src="src" alt="" id="image"></button>
  <div class="popup" v-if="showPopup">
    <PopUp :id="id" :salaId="salaId" :obraId="obraId" :nombre="nombre" :date="date" :is-editing="isEditing"
      @close-popup="closePopup">
    </PopUp>
  </div>
</template>

<style scoped>
.popup {
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

.popup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}

.popup-content-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: black;
}

.popup-content div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 150px;
}

.close {
  float: right;
  cursor: pointer;
}

input {
  margin: 10px 0;
  width: 500px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid black;
}

button {
  cursor: pointer;
  color: #fff;
  margin-right: 8px;
  background-color: orange;
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 7px;
}

button img {
  width: 20px;
  height: 20px;
}

.popup-content div button {
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  color: white;
  background-color: #3385D9;
}

.error {
  color: red;
  font-weight: bold;
  font-size: large;
}

input.error {
  border: 1px solid red;
}
</style>