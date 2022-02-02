<template>
  <v-container fill-height>
    <v-row class='justify-end'>
      <v-col >
      <div v-if='loading'>
        <Loading />
      </div>
      <v-layout v-else-if='data.url' class="d-flex flex-lg-row flex-sm-column flex-column"  >
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
            <p class="headline font-weight-bold mb-1 brown--text lighten-0" >
              {{getTitle() }}
            </p>
            <div class="d-flex justify-space-between mb-5">
               <p class="text-Caption mb-1 grey--text text--lighten-0">{{data.source.name}}</p>
              <p class="text-Caption mb-1 grey--text text--lighten-0">
                {{this.date(data.publishedAt)}}
              </p>
            </div>
          </div>
          <div>
            <div class="headline mb-1 brown--text lighten-1">{{data.description}}</div>
            <p
              class="text-Caption mb-1 grey--text text--lighten-0" v-if=data.author
            >Writthen by : {{data.author}}</p>
          </div>
          <v-card-actions  class="justify-end" align="center">
            <v-btn
              :color='this.$vuetify.theme.defaults.accent'
              text
              class='button'
              @click.stop="dialog = true"
              v-if='isArticle()'
            >
              Edit
            </v-btn>
            <v-btn
              :color='this.$vuetify.theme.defaults.accent'
              text
              class='button'
              @click="gotoContact()"
            >
              Source
            </v-btn>
          </v-card-actions>
          <v-dialog
            v-model="dialog"
            max-width="750"
          >
            <v-card>
              <v-card-title class="text-h5">
                {{getTitle()}}
              </v-card-title>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-text-field
                  placeholder="New Title"
                  class='mx-6 mt-2 justify-center'
                  dense
                  :rules='validationRules'
                  solo
                  v-model='title'
                  @keydown.enter="validate($event)"
                ></v-text-field>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    :color='this.$vuetify.theme.defaults.accent'
                    text
                    class='button'
                    @click="validate"
                  >
                    Update
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
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
      data: {},
      hover: false,
      dialog: false,
      date(d) {
        const date = new Date(d.substring(0, d.length - 1));
        return date.toString().slice(0, 24);
      },
      validationRules: [
        (v) => !!v || 'Title is required',
        (v) => (v && v.length <= 90) || 'Title must be less than 90 characters',
      ],
      title: null,
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    news() {
      return this.$store.getters.news;
    },
  },
  mounted() {
    this.requestData();
  },
  watch: {
    loading(updatedState) {
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
      }
    },
    getTitle() {
      if (this.data.title) {
        return this.data.title;
      }
      return null;
    },
    gotoContact() {
      if (this.data) {
        const payload = this.data;
        this.$store.dispatch('updateHistory', payload);
        window.open(this.data.url);
      }
    },
    isArticle() {
      if (this.type === 'article') return true;
      return false;
    },
    validate(event) {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('updateTitle', { id: JSON.stringify(`${this.data.author}-${this.data.publishedAt}`), title: this.title });
        this.dialog = false;
      }
      if (event) {
        event.preventDefault();
      }
      return this.$refs.form.validate();
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
