<template>
  <the-header></the-header>
  <the-comands></the-comands>
  <the-footer></the-footer>
</template>

<script>
import TheComands from "./components/comannds/TheComands.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
export default {
  components: { TheHeader, TheFooter, TheComands },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
