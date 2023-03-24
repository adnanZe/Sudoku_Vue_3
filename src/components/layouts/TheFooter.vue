<template>
  <footer>
    <a href="https://github.com/adnanZe/Sudoku_Vue_3" target="_blank">
      <i class="fa-brands fa-github"> </i>
      Check my code
    </a>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

i {
  width: 2rem;
  color: white;
  font-size: 1.5rem;
  margin-right: 0.5rem;
}
</style>
