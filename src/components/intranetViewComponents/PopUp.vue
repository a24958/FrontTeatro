<script setup lang="ts">
import { ref } from 'vue';
import { intranetFunctionsStore } from "../../stores/storeIntranetFunctions";

const intranetFunctions = intranetFunctionsStore();
const editPlay = intranetFunctions.apiCallEdit;
const createPlay = intranetFunctions.apiCallCreate;

const emit = defineEmits(['closePopup']);

const props = defineProps<{
  id: number,
  titulo: string,
  descripcion: string,
  rutaFoto: string,
  duracion: number,
  isEditing: boolean
}>()

const showPopup = ref(false);
const Titulo = ref(props.titulo);
const Descripcion = ref(props.descripcion);
const RutaFoto = ref(props.rutaFoto);
const Duracion = ref(props.duracion);
const errorMessage = ref('');



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

  if(props.isEditing === true){
    editPlay(data, id);
  } else{
    createPlay(data);
  }

  emit('closePopup');
};

const hidePlaceholder = (inputName: string) => {
    const inputElement = document.getElementsByName(inputName)[0] as HTMLInputElement;
    inputElement.placeholder = '';
};
</script>

<template>
        <div class="popup-content">
            <div class="popup-content-title">
                <h2>Editar Obra</h2>
                <span class="close" @click="emit('closePopup')">&times;</span>
            </div>
            <input type="text" v-model="Titulo" placeholder="Titulo" :class="{ error: errorMessage && !Titulo }"
                name="Titulo" @focus="hidePlaceholder('Titulo')">
            <input type="text" v-model="Descripcion" placeholder="Descripción"
                :class="{ error: errorMessage && !Descripcion }" name="Descripción" @focus="hidePlaceholder('Descripción')">
            <input type="text" v-model="RutaFoto" placeholder="Ruta Foto" :class="{ error: errorMessage && !RutaFoto }"
                name="RutaFoto" @focus="hidePlaceholder('RutaFoto')">
            <input type="text" v-model="Duracion" placeholder="Duración" :class="{ error: errorMessage && !Duracion }"
                name="Duración" @focus="hidePlaceholder('Duración')">
            <div class="error" v-if="errorMessage">{{ errorMessage }}</div>
            <div>
                <button @click="emit('closePopup')">Cancel</button>
                <button @click="saveData(id)">Save</button>
            </div>
        </div>
</template>

<style scoped>
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