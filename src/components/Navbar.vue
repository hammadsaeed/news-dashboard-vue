<template>
  <v-app-bar
    class="flex-grow-0"
    :color="this.$vuetify.theme.defaults.font"
    scroll-target="#scrolling-techniques"
  >
    <v-toolbar-title
      class='headline ml-10 mt-6 black--text text--lighten-0 '
    >News Dashboard</v-toolbar-title>
    <v-spacer />
    <v-col
      cols="10"
      xs="5"
      sm="5"
      md="3"
      class="mx-5"
    >
      <v-text-field
        placeholder="Search"
        dense
        prepend-inner-icon="mdi-magnify"
        class='mt-10'
        solo
        v-model='search'
        v-on:change="getSearch"
      ></v-text-field>
    </v-col>
    <template v-slot:extension>
      <v-tabs align-with-title color='secondary'>
        <v-tab to='/'>List View</v-tab>
        <v-tab to='/history'>History</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>

export default {
  name: 'Navbar',
  data: () => ({
    search: null,
    //
  }),
  methods: {
    async getSearch() {
      if (this.search && this.search !== '' && /\S/.test(this.search)) {
        this.$router.push(`/search/query=${this.search}`);
        this.$store.dispatch('getResults', this.search);
      }
    },
  },
};

</script>
