<script setup lang="ts">
import { ref } from 'vue';
import { intranetFunctionsStore } from "../../stores/storeIntranetFunctions";

const intranetFunctions = intranetFunctionsStore();
const editPlay = intranetFunctions.apiCallEdit;

const showPopup = ref(false);
const input1 = ref('');
const input2 = ref('');
const input3 = ref('');

const openPopup = () => {
  showPopup.value = true; 
};

const closePopup = () => {
  showPopup.value = false;
};

const saveData = () => {
  console.log('Titulo:', input1.value);
  console.log('Descripción:', input2.value);
  console.log('Ruta Foto', input3.value);

  const data = {
    "nombre": input1.value,
    "descripcion": input2.value,
    "rutaFoto": input3.value,
    "auditoriaUsuario": "Admin"
  }

  editPlay(data);

  closePopup();
};

const hidePlaceholder = (inputName: string) => {
    const inputElement = document.getElementsByName(inputName)[0] as HTMLInputElement;
    inputElement.placeholder = '';
};
</script>

<template>
  <button @click="openPopup()"><img src="../../assets/images/editar.png" alt=""></button>
  <div class="popup" v-if="showPopup">
    <div class="popup-content">
      <div class="popup-content-title">
        <h2>Popup Title</h2>
        <span class="close" @click="closePopup">&times;</span>
      </div>
      <input type="text" v-model="input1" placeholder="Titulo" name="input1" @focus="hidePlaceholder('input1')">
      <input type="text" v-model="input2" placeholder="Descripción" name="input2" @focus="hidePlaceholder('input2')">
      <input type="text" v-model="input3" placeholder="Ruta Foto" name="input3" @focus="hidePlaceholder('input3')">
      <div>
        <button @click="closePopup">Cancel</button>
        <button @click="saveData">Save</button>
      </div>
    </div>
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

.popup-content-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: black;
}

.popup-content div{
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

input:focus {
  border: 1px solid #3385D9;
}

button {
    cursor: pointer;
    background-color: #3385D9;
    color: #fff;
    margin-right: 8px;
    background-color: orange;
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 7px;
}

button img{
  width: 20px;
  height: 20px;
}

.popup-content div button{
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  color: white;
  background-color: #3385D9;
}
</style>