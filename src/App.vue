<template>
  <ul id="app" class="grid">
    <li v-for="note in notes" :key="note.id" class="grid__item">
      <Card :note="note" />
    </li>
  </ul>
</template>

<script>
import Card from "./components/Card.vue";
import Note from "./entities/Note";
import { shuffle } from "lodash";

export default {
  name: "App",
  data: () => {
    return {
      notes: shuffle([new Note("SI"), new Note("RE")]),
    };
  },
  components: {
    Card,
  },
};
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
