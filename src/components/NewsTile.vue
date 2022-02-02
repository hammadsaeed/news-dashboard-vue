<template>

    <v-lazy
      v-model="isActive"
      :options="{
        threshold: .9
      }"
      min-height="100"
      transition="fade-transition"
    >
      <v-card
        class="mx-auto mb-4 mx-2"
        :elevation="hover ? 20 : 2"
        max-width="300"
        max-height="350"
        @mouseover="hover = true" @mouseleave="hover = false"
      >
        <v-img
          class="align-end cursor: pointer"
          height="200px"
          :src="article.urlToImage"
          style="{cursor: pointer}"
        >
          <v-expand-transition
            :href="article.url"
          >
            <template>
              <div
              class="text-right"
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
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="black lighten-1"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>

        <v-card-text class="text--primary">
          <p
            class='text-subtitle-2 mb-0 text-wrap'
          >
            {{article.title.split('-').slice(0, -1).join("-")}}
          </p>
           <p class='mb-1 text-wrap'>{{article.title.split('-').pop()}}</p >
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="orange"
            text
            :to="{
              path: `${type}/${JSON.stringify(`${article.author}-${article.publishedAt}`)}`,
              params: 'dsadasd'
            }"
          >
            Read More
          </v-btn>

          <v-btn
            color="orange"
            text
          >
            Edit
          </v-btn>
        </v-card-actions>

      </v-card>
  </v-lazy>
</template>

<script>

export default {
  props: ['article', 'type'],
  methods: {
    gotoContact() {
      const payload = this.article;
      this.$store.dispatch('updateHistory', payload);
      window.open(this.article.url);
    },
  },
  data() {
    return {
      toggle: false,
      isActive: false,
      hover: false,
    };
  },
};

</script>

<style scoped>
  .text-wrap {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
            line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: start;
  }
</style>
