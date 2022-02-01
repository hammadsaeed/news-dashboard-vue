<template>
  <Article :id='this.id' :type='this.type' />
</template>

<script>
import Article from '../components/Article';

export default {
  name: 'Detail',
  props: ['id', 'type'],
  components: {
    Article,
  },
};
</script>
