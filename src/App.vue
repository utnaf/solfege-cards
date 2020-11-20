<template>
  <ul id="app" class="grid">
    <li v-for="note in notes" :key="note.id" class="grid__item">
      <Card :note="note" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import Note from "@/entities/Note";
import { shuffle } from "lodash";

@Component({
  components: {
    Card,
  },
  data: () => {
    return {
      notes: shuffle([
        new Note("SI", 0),
        new Note("DO", 1),
        new Note("RE", 1),
        new Note("MI", 1),
        new Note("FA", 1),
        new Note("SOL", 1),
        new Note("LA", 1),
        new Note("SI", 1),
        new Note("DO", 2),
        new Note("RE", 2),
        new Note("MI", 2),
        new Note("FA", 2),
        new Note("SOL", 2),
        new Note("LA", 2),
        new Note("SI", 2),
        new Note("DO", 3),
      ]),
    };
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0;
}

.grid {
  margin: 0;
  padding: 0;
}

.grid__item {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
}
</style>
