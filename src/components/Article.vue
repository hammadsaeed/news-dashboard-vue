<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col >
        <div v-if='this.loading'>
          <Loading />
        </div>
        <v-layout v-else class="d-flex flex-lg-row flex-sm-column flex-column"  >
          <v-img
            :aspect-ratio="16/9"
            width="70%"
            :src="data.urlToImage"
            @click="gotoContact()"
            class="img"
            @mouseover="hover = true" @mouseleave="hover = false"
          >
            <v-expand-transition
              :href="data.url"
            >
              <template>
                <div
                  class="align-icon"
                  v-if="hover"
                >
                  <v-icon
                    dark
                    right
                    @click="gotoContact()"
                  >
                    mdi-open-in-new
                  </v-icon>
                </div>
              </template>
            </v-expand-transition>
          </v-img>
          <v-flex class="pl-5 d-flex flex-column justify-space-around">
            <div>
              <div class="headline mb-1 pink--text">
                {{data.title.split('-').slice(0, -1).join("-")}}
              </div>
              <div   class="d-flex justify-space-between mb-5">
                <div class="text-Caption mb-1">{{data.source.name}}</div>
                <div class="text-Caption mb-1">
                  {{this.date(data.publishedAt)}}
                </div>
              </div>
            </div>
            <div class="headline mb-1">{{data.description}}</div>
          <v-card-actions  class="justify-end">
            <v-btn
              :color='this.$vuetify.theme.defaults.accent'
              text
              class='button'
              @click="gotoContact()"
            >
              Read More
            </v-btn>
          </v-card-actions>

          </v-flex>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Loading from './Loading';

export default {
  name: 'Article',
  props: ['id', 'type'],
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: true,
      data: {},
      hover: false,
      date(d) {
        const date = new Date(d.substring(0, d.length - 1));
        return date.toString().slice(0, 24);
      },
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
  mounted() {
    this.requestData();
  },
  watch: {
    loading(updatedState) {
      this.isLoading = updatedState;
      if (!updatedState) {
        this.requestData();
      }
      return updatedState;
    },
  },
  methods: {
    async requestData() {
      if (this.$store.state.articles) {
        let tempData;
        switch (this.type) {
          case 'article':
            tempData = this.$store.state.articles;
            break;
          case 'history':
            tempData = this.$store.state.history;
            break;
          case 'search':
            tempData = this.$store.state.searchResults;
            break;
          default:
            tempData = this.$store.state.articles;
        }
        tempData.forEach((article) => {
          if (JSON.stringify(`${article.author}-${article.publishedAt}`) === this.id) {
            this.data = article;
          }
        });
        this.isLoading = false;
      }
    },
    gotoContact() {
      if (this.data) {
        const payload = this.data;
        this.$store.dispatch('updateHistory', payload);
        window.open(this.data.url);
      }
    },
  },
};

</script>

<style scoped>
  .img {
    cursor: pointer;
    align-self: center;
    margin-bottom: 0.5em;
  }
  .align-icon {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .button{
    width: 30%;
    background-color: #CCC5B9
  }
</style>
