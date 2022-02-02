<template>
  <v-container class="container">
    <img class="image" src='@/assets/alert.png'/>
    <h2 class="text">{{text()}}</h2>
  </v-container>
</template>

<script>

export default {
  name: 'ErrorPage',
  props: ['type', 'message'],
  methods: {
    text() {
      if (this.message) {
        return `${this.type}: ${this.message}`;
      }
      return null;
    },
  },
};
</script>

<style scoped>
  .image {
    width: 30%;
  }
  .container {
    text-align: center;
    margin-top: 10vh;
  }
  .text {
    font-size: 150%;
  }
</style>
