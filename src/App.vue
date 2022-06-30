<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <Notificacoes />
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Notificacoes from "./components/Notificacoes.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Notificacoes,
  },
  data() {
    return {
      modoEscuroAtivo: false,
    };
  },
  methods: {
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    },
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-box-primario: #faf0ca;
  --bg-barra-primario: #ddfaca;
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-box-primario: #264e14;
  --bg-barra-primario: #530000;
  --bg-primario: #000000;
  --texto-primario: #faf0ca;
  --texto-barra-nav: left;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>
