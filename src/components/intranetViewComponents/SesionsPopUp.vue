<script setup lang="ts">
import { ref } from 'vue';
import { intranetSesionFunctionsStore } from "../../stores/storeIntranetFunctions";
import { da } from 'vuetify/locale';
import { format, parse } from 'date-fns';

const intranetFunctions = intranetSesionFunctionsStore();
const editSesion = intranetFunctions.apiCallEdit;
const createSesion = intranetFunctions.apiCallCreate;

const emit = defineEmits(['closePopup']);

const props = defineProps<{
    id: number,
    salaId: number,
    obraId: number,
    nombre: string,
    date: Date,
    precio: number,
    isEditing: boolean
}>()

const showPopup = ref(false);
const ObraId = ref(props.salaId);
const SalaId = ref(props.salaId);
const NombreObra = ref(props.nombre);

let fechaStr = '';
let horaStr = '';
let fechaHoraStr = '';


if (props.date) {
    fechaStr = format(new Date(props.date), 'dd/MM/yyyy');
    horaStr = format(new Date(props.date), 'HH:mm');
    fechaHoraStr = format(new Date(props.date), 'dd/MM/yyyy  HH:mm');

}
const Hora = ref(horaStr);
const Fecha = ref(fechaStr);
const FechaHora = ref(fechaHoraStr);


const Precio = ref(props.precio);

const errorMessage = ref('');


const saveData = (id: number) => {

    const horarioEdit = {
        "fecha": Fecha.value,
        "hora": Hora.value,
        "horario": format(new Date(`${Fecha.value} ${Hora.value}`), "dd/MM/yyyy  HH:mm")
    }

    const horarioCreate = {
        "fecha": Fecha.value,
        "hora": Hora.value,
        "horario": format(new Date(`${Fecha.value} ${Hora.value}`), "dd/MM/yyyy  HH:mm")
    }

    const data = {
        "obraId": ObraId.value,
        "horario": FechaHora.value,
        "salaId": SalaId.value,
        "precio": Precio.value,
        "auditoriaUsuario": "Admin"
    }

    const dataCreate = {
        "horario": FechaHora.value,
        "salaId": SalaId.value,
        "nombreObra": NombreObra.value,
        "precio": Precio.value,
        "auditoriaUsuario": "Admin"
    }

    if (!SalaId.value || !Fecha || !Precio.value) {
        if (Precio.value === 0) {
            errorMessage.value = "La duración de una obra no puede ser 0";
            return;
        }

        errorMessage.value = "Todos los campos son obligatorios";
        return;
    }

    if (props.isEditing === true) {
        const fecha = format(new Date(horarioEdit.fecha), 'dd-MM-yyyy');
        const hora = format(new Date(horarioEdit.horario), 'HH:mm');
        data.horario = format(new Date(`${fecha} ${hora}`), "yyyy-MM-dd'T'HH:mm:ss.SSSX");
            editSesion(id, data);
    } else {
        const fecha = format(new Date(horarioCreate.fecha), 'dd-MM-yyyy');
        const hora = format(new Date(horarioCreate.horario), 'HH:mm');
        dataCreate.horario = format(new Date(`${fecha} ${hora}`), "yyyy-MM-dd'T'HH:mm:ss.SSSX");
            createSesion(dataCreate);
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
        <div class="popup-content-label">
            Id Sala:
        </div>
        <input type="text" v-model="SalaId" placeholder="SalaId" :class="{ error: errorMessage && !SalaId }"
            name="SalaId" @focus="hidePlaceholder('SalaId')">
        <div class="popup-content-label">
            Precio:
        </div>
        <input type="text" v-model="Precio" placeholder="Precio" :class="{ error: errorMessage && !Precio }"
            name="Precio" @focus="hidePlaceholder('Precio')">
        <div class="popup-content-label">
            Fecha:
        </div>
        <input type="text" v-model="Fecha" placeholder="01/01/24" :class="{ error: errorMessage && !Fecha }"
            name="Fecha" @focus="hidePlaceholder('Fecha')">
        <div class="popup-content-label">
            Hora:
        </div>
        <input type="text" v-model="Hora" placeholder="HH:mm" :class="{ error: errorMessage && !Fecha }" name="Fecha"
            @focus="hidePlaceholder('Fecha')">
        <div class="popup-content-label" v-if="isEditing == false">
            Nombre Obra:
        </div>
        <input v-if="isEditing == false" type="text" v-model="NombreObra" placeholder="NombreObra"
            :class="{ error: errorMessage && !NombreObra }" name="NombreObra" @focus="hidePlaceholder('NombreObra')">
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


.popup-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.popup-content-label {
    width: 100%;
    text-align: left;
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