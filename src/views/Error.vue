<template>
  <ErrorPage :type='this.type' :message='this.message' />
</template>

<script>
import ErrorPage from '../components/ErrorPage';

export default {
  name: 'Error',
  props: ['type', 'message'],
  components: {
    ErrorPage,
  },
};
</script>
