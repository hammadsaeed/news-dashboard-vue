<template>
  <v-container>
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
      class = 'loading'
    ></v-progress-circular>
  </v-container>
</template>

<script>

export default {
  name: 'Loading',
};
</script>

<style scoped>
  .loading {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%,-50%);
  }
</style>
