<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String, // rounded, square, primary
    },
  },
};
</script>

<style scoped>
button {
  font-size: 2rem;
  background-color: #eaeef499;
  color: #0072e3;
  font-size: 1.5rem;
  font-weight: lighter;
  border: 0;
  border-radius: 7px;
}

button:hover {
  background-color: #eaeef4;
  cursor: pointer;
}
</style>
