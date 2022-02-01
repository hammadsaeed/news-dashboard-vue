<template>
  <v-container>
    <div v-if='this.loading'>
      <Loading />
    </div>
    <v-row class="text-center d-flex flex-column" v-else>
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
import Loading from './Loading';

export default {
  name: 'Dashboard',
  components: {
    NewsTile,
    Loading,
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
    loading() {
      return this.$store.getters.loading;
    },
  },
  watch: {
    loading(updatedState) {
      this.isLoading = updatedState;
      return updatedState;
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
