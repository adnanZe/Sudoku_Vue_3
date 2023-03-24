<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      validator(value) {
        return ["rounded", "square", "primary"].includes(value);
      },
    },
  },
};
</script>

<style scoped>
button {
  background-color: #eaeef499;
  color: #0072e3;
  font-weight: lighter;
  font-size: 2rem;
  border: 0;
  padding: 0;
  border-radius: 7px;
}

button:hover {
  cursor: pointer;
}

.rounded {
  border-radius: 50%;
}

.square {
  /* escape from warning */
  margin: 0;
}

.primary {
  background-color: #0072e3;
  color: white;
  font-size: 1.3rem;
}

.primary:hover {
  background-color: #0040aa;
}
</style>
