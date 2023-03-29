<template>
  <section>
    <div v-for="cell in cellsState" :key="cell.id">{{ cell.value }}</div>
  </section>
</template>

<script>
export default {
  props: ["cellsState"],
};
</script>

<style scoped>
section {
  margin: 1.5rem 0;
  background-color: #999999;
  display: grid;
  grid-template-columns: repeat(9, 60px);
  grid-template-rows: repeat(9, 60px);
  border: 4px solid black;
  grid-gap: 1px;
  margin-right: 2rem;
}

div {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #0072e3;
}

div:nth-child(19),
div:nth-child(20),
div:nth-child(21),
div:nth-child(22),
div:nth-child(23),
div:nth-child(24),
div:nth-child(25),
div:nth-child(26),
div:nth-child(27),
div:nth-child(46),
div:nth-child(47),
div:nth-child(48),
div:nth-child(49),
div:nth-child(50),
div:nth-child(51),
div:nth-child(52),
div:nth-child(53),
div:nth-child(54) {
  border-bottom: 3px solid black;
}

div:nth-child(3n + 0) {
  border-right: 3px solid black;
}
</style>
