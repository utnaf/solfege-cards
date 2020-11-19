<template>
  <div class="scene">
    <div
      class="card"
      v-bind:class="{ 'is-flipped': isFlipped }"
      v-on:click="flip"
    >
      <div class="card__face card__face-front">
        <img class="card__image" :src="getImage(note.image)" />
      </div>
      <div class="card__face card__face-back">
        {{ note.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      isFlipped: false,
      interval: null,
    };
  },
  methods: {
    flip: function() {
      clearInterval(this.interval);
      this.isFlipped = !this.isFlipped;
      this.interval = setInterval(() => (this.isFlipped = false), 3000);
    },
    getImage: function(pic) {
      return require("../assets/cards/" + pic);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scene {
  width: 120px;
  height: 180px;
  perspective: 360px;
  margin: 1rem;
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

.card__image {
  height: 60%;
}
</style>
