<template>
  <v-container class="container">
      <img class="image" src='@/assets/empty-result.png'/>
      <h2 class="text">{{text()}}</h2>
  </v-container>
</template>

<script>
export default {
  name: 'Search',
  props: ['message', 'search'],
  methods: {
    text() {
      if (this.search) {
        return `${this.message} "${this.$route.params.text}"`;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
    .text {
      font-size: 400%;
  }
</style>
