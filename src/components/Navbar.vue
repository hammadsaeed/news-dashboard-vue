<template>
  <v-app-bar
    class="flex-grow-0"
    :color="this.$vuetify.theme.defaults.font"
    scroll-target="#scrolling-techniques"
  >
    <v-toolbar-title
      class='headline ml-10 mt-6 black--text text--lighten-0 '
    >News Dashboard</v-toolbar-title>

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
};
</script>
