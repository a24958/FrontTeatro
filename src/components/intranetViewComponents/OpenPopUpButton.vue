<script setup lang="ts">
import { ref } from 'vue';
import { intranetFunctionsStore } from "../../stores/storeIntranetFunctions";

const intranetFunctions = intranetFunctionsStore();
const editPlay = intranetFunctions.apiCallEdit;

const props = defineProps<{
  id: number,
}>()

const showPopup = ref(false);
const Titulo = ref('');
const Descripcion = ref('');
const RutaFoto = ref('');
const Duracion = ref(0);
const errorMessage = ref('');

const openPopup = () => {
  errorMessage.value = ''
  showPopup.value = true; 
};

const closePopup = () => {
  showPopup.value = false;
};

const saveData = (id: number) => {

  if (!Titulo.value || !Descripcion.value || !RutaFoto.value || !Duracion.value) {
    if(Duracion.value === 0){
      errorMessage.value = "La duración de una obra no puede ser 0";
      return;
    }

    errorMessage.value = "Todos los campos son obligatorios";
    return;
  }

  const data = {
    "nombre": Titulo.value,
    "descripcion": Descripcion.value,
    "rutaFoto": RutaFoto.value,
    "auditoriaUsuario": "Admin",
    "duracion": Duracion.value,
  }

  editPlay(data, id);

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
      <input type="text" v-model="Titulo" placeholder="Titulo" name="Titulo" :class="{ error: errorMessage && !Titulo }" @focus="hidePlaceholder('Titulo')">
      <input type="text" v-model="Descripcion" placeholder="Descripción" :class="{ error: errorMessage && !Descripcion }" name="Descripción" @focus="hidePlaceholder('Descripción')">
      <input type="text" v-model="RutaFoto" placeholder="Ruta Foto" :class="{ error: errorMessage && !RutaFoto }" name="RutaFoto" @focus="hidePlaceholder('RutaFoto')">
      <input type="text" v-model="Duracion" placeholder="Duración" :class="{ error: errorMessage && !Duracion }" name="Duración" @focus="hidePlaceholder('Duración')">
      <div class="error" v-if="errorMessage">{{ errorMessage }}</div>
      <div>
        <button @click="closePopup">Cancel</button>
        <button @click="saveData(id)">Save</button>
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

.error{
  color: red;
  font-weight: bold;
  font-size: large;
}

input.error{
  border: 1px solid red;
}
</style>