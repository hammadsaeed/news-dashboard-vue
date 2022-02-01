<template>
  <v-row
    no-gutters
    style='align-self: end'
  >
    <v-sheet
      class="d-flex flex-row my-2"
      align-self="end"
    >
      <v-select
        v-model="data"
        :hint="`${data.name}, ${data.country}`"
        :items="sources"
        color='secondary'
        class='px-4'
        return-object
        item-text="name"
        label="Filter by Source"
        v-on:change="changeRoute($event)"
      ></v-select>
      <v-btn
        :color='this.$vuetify.theme.defaults.accent'
        text
        class='button'
        @click="changeRoute({})"
      >
        Reset
      </v-btn>
    </v-sheet>
  </v-row>
</template>

<script>

export default {
  name: 'SourceFilter',
  props: ['selectedSource'],
  data() {
    return {
      data: {},
      // select: { name: 'all', country: 'en' },
    };
  },
  computed: {
    sources() {
      return this.$store.state.sources;
    },
    loading() {
      return this.$store.getters.loading;
    },

    getSelected() {
      return this.selectedSource;
    },
  },
  watch: {
    loading(updatedState) {
      this.isLoading = updatedState;
      return updatedState;
    },
  },
  methods: {
    changeRoute(event) {
      if (event) {
        this.$emit('selectionChange', event);
        return event;
      }
      return null;
    },
  },
};

</script>
<style scoped>
  .filter-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-left: 60vw;
    width: 35vw;
  }
  .button{
    width: 30%;
    background-color: #CCC5B9;
    align-self: center;
  }
</style>
