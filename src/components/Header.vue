<template>
  <div class="header">
    <ul class="header-items header-items__left">
      <li class="header-item">Ciau</li>
      <li class="header-item">Mamma</li>
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

@Component
export default class Header extends Vue {}
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
</style>