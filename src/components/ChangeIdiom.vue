<script setup lang="ts">
import { ref } from 'vue'
import { createI18n  } from 'vue-i18n'


const dropdownOpen = ref(false)

const i18n = createI18n({
  locale: 'es',
})
const currentLanguage = ref(i18n.global.locale);

const changeLanguage = (newLocale: string) => {
  i18n.global.locale = newLocale
  currentLanguage.value = newLocale
  dropdownOpen.value = false

}

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}
</script>

<template>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false" @click="toggleDropdown">
        {{ currentLanguage }}
      </button>
      <div class="dropdown-menu" :class="{ show: dropdownOpen }" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#" @click="changeLanguage('en')">English</a>
        <a class="dropdown-item" href="#" @click="changeLanguage('es')">Español</a>
      </div>
    </div>
</template>


<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: .5rem 0;
  margin: .125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
}

.dropdown-menu.show {
  display: block;
}
</style>