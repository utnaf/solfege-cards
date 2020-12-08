<template>
  <div class="scene">
    <div
      class="card"
      v-bind:class="{ 'is-flipped': isFlipped }"
      v-on:click="flip"
    >
      <div class="card__face card__face-front">
        <div class="card__notation" :id="notationId"></div>
      </div>
      <div class="card__face card__face-back">
        {{ note.name(notation) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line no-unused-vars
import { INote } from "@/entities/Note";
import { Component, Vue } from "vue-property-decorator";
import Vexflow from "@/helpers/Vexflow";
import { State } from "vuex-class";

const CardProps = Vue.extend({
  props: {
    note: Object as () => INote,
    required: () => true,
  },
});

@Component
export default class Card extends CardProps {
  isFlipped: boolean = false;
  interval: number = 0;

  @State((state) => state.filter_notation) notation: string | undefined;

  mounted() {
    Vexflow(this.notationId, this.note);
  }

  get notationId(): string {
    return "notation-" + this.note.id;
  }

  flip(): void {
    clearInterval(this.interval);
    this.isFlipped = !this.isFlipped;
    this.interval = setInterval(() => (this.isFlipped = false), 3000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scene {
  width: 120px;
  height: 180px;
  perspective: 360px;
  margin: 1rem auto;
  display: block;
}

.card {
  border: 1px solid #000;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card__face {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
}

.card__face-back {
  transform: rotateY(180deg);
  font-size: 2em;
  color: coral;
  font-weight: bold;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card__notation {
  height: 100%;
  width: 100%;
}
</style>
