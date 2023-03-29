<template>
  <header>
    <img src="../../assets/sudokuLogo.png" alt="Sudoku" />
    <h1>Sudoku - Vue 3</h1>
  </header>
</template>

<script>
export default {};
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
  height: 50px;
  filter: invert(100%);
}

h1 {
  margin-left: 1rem;
  color: white;
  font-size: 1.5rem;
}
</style>
