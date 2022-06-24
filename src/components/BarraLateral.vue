<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="" />
    </h1>
    <button v-if="modoEscuroAtivo" class="button is-warning" @click="alterarTema">
      {{ textoDoBotao }}
    </button>
    <button v-if="!modoEscuroAtivo" class="button is-dark" @click="alterarTema">
      {{ textoDoBotao }}
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ["aoTemaAlterado"],
  data() {
    return {
      modoEscuroAtivo: false,
    };
  },
  computed: {
    textoDoBotao() {
      if (this.modoEscuroAtivo) {
        return "Tema claro";
      }
      return "Tema escuro";
    },
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit("aoTemaAlterado", this.modoEscuroAtivo);
    },
  },
});
</script>

<style scoped>
/* Todo o estilo do componente */

header {
  padding: 1rem;
  background: var(--bg-barra-primario);
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>