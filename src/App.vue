<template>
  <div id="app">
    <Feedback />
  </div>
</template>

<script>
import Feedback from './components/Feedback.vue';

export default {
  name: 'App',
  components: {
    Feedback,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  height: 100vh;
  color: #34495E;
  background-color: #E5E5E5;
}
</style>
