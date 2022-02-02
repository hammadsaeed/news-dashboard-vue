<template>
  <v-container>
    <div v-if='this.loading'>
      <Loading />
    </div>
    <v-row class="text-center d-flex flex-column" v-else>
      <SourceFilter :selectedSource="selectedSource" v-on:selectionChange="updateSource"/>
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
import SourceFilter from './Filter';

export default {
  name: 'Dashboard',
  components: {
    SourceFilter,
    NewsTile,
    Loading,
  },
  data() {
    return {
      selectedSource: {},
      data: {},
    };
  },
  computed: {
    articles() {
      if (this.selectedSource.name) {
        const { articles } = this.$store.state;
        return articles.filter((article) => this.selectedSource.name === article.source.name);
      }
      return this.$store.state.articles;
    },
    loading() {
      if (!this.$store.state.articles.length) {
        this.$store.commit('UPDATE_LOADING');
        this.$store.dispatch('getNewsFeed');
        this.$store.dispatch('getSources');
        this.$store.commit('INITIALISE');
        return null;
      }
      return this.$store.getters.loading;
    },
  },
  watch: {
    loading(updatedState) {
      return updatedState;
    },
  },
  methods: {
    updateSource(variable) {
      this.selectedSource = variable;
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
