<template>
  <div id="app" class="container container.is-widescreen">
    <Header></Header>
    <ul id="app" class="grid">
      <li v-for="note in notes" :key="note.id" class="grid__item">
        <Card :note="note" />
      </li>
    </ul>
    <div id="footer">
      Made with ❤ by
      <a href="https://twitter.com/utnaf" target="_blank">utnaf</a>. It's
      <a href="https://github.com/utnaf/solfege-cards" target="_blank"
        >Open Sourced</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import Header from "@/components/Header.vue";
import { shuffle } from "lodash";
// import PianoKeyboard from "vue-piano-keyboard";
import allNotes from "@/helpers/AllNotes";

@Component({
  components: {
    Card,
    Header,
  },
  computed: {
    notes: function () {
      return shuffle(
        allNotes.filter(
          (note) => this.$store.state.filter_clefs.indexOf(note.clef) > -1
        )
      );
    },
  },
})
export default class App extends Vue {}
</script>

<style>
#copy {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.8rem;
  padding: 0.4rem 0 0.2rem 0;
  background: rgba(255, 255, 255, 0.8);
}

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
  padding: 0;
  list-style: none;
  display: inline-block;
  width: 12.5%;
}

#footer {
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  font-size: 0.7rem;
  padding: 0.7rem 0 0.3rem;
}

@media (max-width: 1024px) {
  .grid__item {
    width: 20%;
  }
}

@media (max-width: 680px) {
  .grid__item {
    width: 33.3%;
  }
}

@media (max-width: 480px) {
  .grid__item {
    width: 50%;
  }
}
</style>
