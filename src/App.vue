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
import BaseNotes from "@/entities/base";

@Component({
  components: {
    Card,
  },
  data: () => {
    return {
      notes: shuffle([
        new Note(BaseNotes.Si, 3),
        new Note(BaseNotes.Do, 4),
        new Note(BaseNotes.Re, 4),
        new Note(BaseNotes.Mi, 4),
        new Note(BaseNotes.Fa, 4),
        new Note(BaseNotes.Sol, 4),
        new Note(BaseNotes.La, 4),
        new Note(BaseNotes.Si, 4),
        new Note(BaseNotes.Do, 5),
        new Note(BaseNotes.Re, 5),
        new Note(BaseNotes.Mi, 5),
        new Note(BaseNotes.Fa, 5),
        new Note(BaseNotes.Sol, 5),
        new Note(BaseNotes.La, 5),
        new Note(BaseNotes.Si, 5),
        new Note(BaseNotes.Do, 6),
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
