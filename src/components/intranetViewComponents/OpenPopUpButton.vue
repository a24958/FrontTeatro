<script setup lang="ts">
import { ref } from 'vue';

const showPopup = ref(false);
const input1 = ref('');
const input2 = ref('');
const input3 = ref('');

const openPopup = () => {
  showPopup.value = true; // Actualiza el valor de showPopup a true para mostrar el popup
};

const closePopup = () => {
  showPopup.value = false;
};

const saveData = () => {
  console.log('Value 1:', input1.value);
  console.log('Value 2:', input2.value);
  console.log('Value 3:', input3.value);
  closePopup();
};

const hidePlaceholder = (inputName: string) => {
    const inputElement = document.getElementsByName(inputName)[0] as HTMLInputElement;
    inputElement.placeholder = '';
};
</script>

<template>
   <button @click="openPopup">Open Popup</button>
  <div class="popup" v-if="showPopup">
    <div class="popup-content">
      <div class="popup-content-title">
        <h2>Popup Title</h2>
        <span class="close" @click="closePopup">&times;</span>
      </div>
      <input type="text" v-model="input1" placeholder="Enter value 1" name="input1" @focus="hidePlaceholder('input1')">
      <input type="text" v-model="input2" placeholder="Enter value 2" name="input2" @focus="hidePlaceholder('input2')">
      <input type="text" v-model="input3" placeholder="Enter value 3" name="input3" @focus="hidePlaceholder('input3')">
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
    border: 1px solid #3385D9;
}

button {
    margin-top: 10px;
    padding: 8px 16px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: #3385D9;
    color: #fff;
}

button:hover {
    background-color: #0056b3;
}
</style>