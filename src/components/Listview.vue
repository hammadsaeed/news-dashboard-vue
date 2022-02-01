<template>
  <v-container>
    <v-row class="text-center d-flex flex-column" >
      <v-col class="grid-column">
        <NewsTile
          v-for='article in articles' :key="article.publishedAt" :article='article' type='article'
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsTile from './NewsTile';

export default {
  name: 'Listview',
  components: {
    NewsTile,
  },
  data() {
    return {
      data: {},
    };
  },
  computed: {
    articles() {
      return this.$store.state.articles;
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
