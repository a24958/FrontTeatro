<script setup lang="ts">
import ContactContainer from './ContactContainer.vue'
import ContactForm from './ContactForm.vue'
</script>

<template>
    <section class="contacto-section">
        <ContactContainer></ContactContainer>
        <ContactForm></ContactForm>
    </section>
</template>

<style scoped>
.contacto-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>