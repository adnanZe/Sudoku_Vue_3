<template>
  <header>
    <img src="../../assets/sudokuLogo.png" alt="Sudoku" />
    <h1>Sudoku - Vue 3</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
header {
  background-color: #0072e3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
}

img {
  height: 30px;
}

h1 {
  margin-left: 1rem;
  color: white;
}
</style>
