<template>
  <v-container>
    <v-row class="text-center">
      <Loading v-if='this.loading'/>
      <v-col class="grid-column" v-else-if='this.search.length'>
        <NewsTile v-for='article in search' :key="article.id" :article='article' type='search'/>
      </v-col>
      <NoData v-else message='No Results For' :search='true'/>
    </v-row>
  </v-container>
</template>

<script>
import NewsTile from './NewsTile';
import Loading from './Loading';
import NoData from './NoData';

export default {
  name: 'SearchResults',
  components: {
    NewsTile,
    Loading,
    NoData,
  },
  computed: {
    search() {
      return this.$store.state.searchResults;
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
  .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
