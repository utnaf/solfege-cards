<template>
  <div class="header">
    <ul class="header-items header-items__left">
      <li class="header-item">
        <strong>Clefs</strong>
      </li>
      <li class="header-item">
        <label>
          <input
            type="checkbox"
            v-model="clefs"
            :value="TREBLE"
            v-on:click="toggleClef"
          />
          Treble
        </label>
      </li>
      <li class="header-item">
        <label>
          <input
            type="checkbox"
            v-model="clefs"
            :value="BASS"
            v-on:click="toggleClef"
          />
          Bass
        </label>
      </li>
      <li class="header-item header-item__separator"></li>
      <li class="header-item">
        <strong>Notation</strong>
      </li>
      <li class="header-item">
        <label>
          <input
            type="radio"
            :value="SOLFEGE"
            v-model="notation"
            v-on:click="setNotation"
          />
          Solfege
        </label>
      </li>
      <li class="header-item">
        <label>
          <input
            type="radio"
            :value="LATIN"
            v-model="notation"
            v-on:click="setNotation"
          />
          Latin
        </label>
      </li>
    </ul>
    <ul class="header-items header-items__right">
      <li class="header-item">
        Made with ❤ by
        <a href="https://twitter.com/utnaf" target="_blank">utnaf</a>. It's
        <a href="https://github.com/utnaf/solfege-cards" target="_blank"
          >Open Sourced</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BASS, TREBLE } from "@/entities/Clef";
import { NOTATION_SOLFEGE, NOTATION_LATIN } from "@/entities/base";
import { MUTATIONS } from "@/store";
import { State } from "vuex-class";

@Component
export default class Header extends Vue {
  BASS: string = BASS;
  TREBLE: string = TREBLE;
  LATIN: string = NOTATION_LATIN;
  SOLFEGE: string = NOTATION_SOLFEGE;

  @State((state) => state.filter_clefs) clefs: Array<string> | undefined;
  @State((state) => state.filter_notation) notation: string | undefined;

  toggleClef(e: Event) {
    const clef = (e.target as HTMLInputElement).value;
    this.$store.commit(MUTATIONS.TOGGLE_CLEF, clef);
  }

  setNotation(e: Event) {
    const notation = (e.target as HTMLInputElement).value;
    this.$store.commit(MUTATIONS.SET_NOTATION, notation);
  }
}
</script>

<style scoped>
.header {
  display: block;
  height: 64px;
  background: #fbfbfb;
  border: 1px solid #eee;
  box-shadow: 0 1px 1px #aaa;
  margin-bottom: 1rem;
  width: 100%;
}

.header-items {
  margin: 0;
  padding: 0;
  list-style: none;
}

.header-items__left {
  float: left;
}

.header-items__right {
  float: right;
}

.header-item {
  margin: 0;
  padding: 0 20px;
  display: inline-block;
  line-height: 64px;
}

.header-item__separator {
  width: 6px;
}

@media (max-width: 1024px) {
  .header-items__right {
    display: none;
  }
}

@media (max-width: 680px) {
  .header {
    height: auto;
    overflow: auto;
  }

  .header-item__separator {
    display: none;
  }

  .header-item {
    width: 20%;
  }
}

@media (max-width: 480px) {
  .header-item {
    line-height: 40px;
  }
  .header-item {
    font-size: 0.8rem;
  }
}
</style>