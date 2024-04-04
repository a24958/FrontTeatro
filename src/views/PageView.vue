<template>
  <div></div>
</template>

<script>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'PageView',
  setup() {
    const route = useRoute();

    // Ejecutar el código cuando el componente se monta y cuando la ruta cambia
    onMounted(() => sendPageView());
    watch(() => route.fullPath, () => sendPageView());

    // Función para enviar el evento de vista de página
    const sendPageView = () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'page_view',
        path: route.fullPath // Puedes enviar la ruta actual si lo necesitas
      });
    };

    return {};
  }
};
</script>
