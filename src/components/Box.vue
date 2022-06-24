<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot> </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxAlura",
  data() {
    return {
      estilos: {
        color: "var(--texto-primario)",
        background: "var(--bg-box-primario)",
      },
    };
  },
});
</script>