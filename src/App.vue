<template>
  <the-header></the-header>
  <main>
    <the-sudoku :cellsState="cellsState"></the-sudoku>
    <the-commands @newGame="onNewGame"></the-commands>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheCommands from "./components/commands/TheCommands.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import TheSudoku from "./components/sudoku-grid/TheSudoku.vue";
import { generateSudokuStates } from "./services/generateSudokuStates.js";

export default {
  components: { TheHeader, TheFooter, TheCommands, TheSudoku },

  data() {
    return {
      cellsState: [],
    };
  },

  methods: {
    onNewGame() {
      console.log("hit new game");
    },
  },

  mounted() {
    this.cellsState = generateSudokuStates();
  },
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

main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 2rem;
}
</style>
