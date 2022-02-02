<template>
  <v-container>
    <div v-if='this.loading'>
      <Loading />
    </div>
    <v-row class="text-center d-flex flex-column" v-else>
      <h1> didnt fail </h1>
    </v-row>
  </v-container>
</template>

<script>
import Loading from './Loading';

export default {
  name: 'Dashboard',
  components: {
    Loading,
  },
  data() {
    return {
      selectedSource: {},
      data: {},
    };
  },
  mounted() {
    this.$store.dispatch('fakeUrl');
  },
  computed: {
    loading() {
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
