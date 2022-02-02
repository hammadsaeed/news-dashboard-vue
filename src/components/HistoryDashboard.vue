<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="grid-column">
        <NewsTile v-for='article in history' :key="article.id" :article='article' type='history'/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsTile from './NewsTile';

export default {
  name: 'HistoryDashboard',
  components: {
    NewsTile,
  },
  computed: {
    history() {
      return this.$store.state.history;
    },
  },
};
</script>

<style scoped>
  .grid-column {
    grid-gap: 0.5em;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
</style>
