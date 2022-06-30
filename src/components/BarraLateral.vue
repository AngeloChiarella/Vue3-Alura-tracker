<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="" />
    </h1>
    <button
      v-if="modoEscuroAtivo"
      class="button is-warning"
      @click="alterarTema"
    >
      {{ textoDoBotao }}
    </button>
    <button v-if="!modoEscuroAtivo" class="button is-dark" @click="alterarTema">
      {{ textoDoBotao }}
    </button>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            tarefas
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fas fa-project-diagram"></i>
            projetos
          </router-link>
        </li>
      </ul>
    </nav>
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
h1 {
  text-align: left;
}
strong {
  color: #f95738;
}
header {
  padding: 2.5rem;
  background: var(--bg-barra-primario);
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: 100vh;
    text-align: auto;
  }
}
.panel li {
  margin: 8px;
  text-align: initial;
}
.link {
  color: var(--texto-primario);
}
.link:hover {
  color: var(--texto-primario);
}
.link.router-link-active {
  color:var(--texto-primario)
}
</style>