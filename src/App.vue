<template>
  <the-header></the-header>
  <main>
    <the-commands></the-commands>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheCommands from "./components/commands/TheCommands.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
export default {
  components: { TheHeader, TheFooter, TheCommands },
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
