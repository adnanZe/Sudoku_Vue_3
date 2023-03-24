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
  font-size: 1.5rem;
  font-weight: lighter;
  border: 0;
  border-radius: 7px;
  padding: 0.5rem 1rem;
}

button:hover {
  cursor: pointer;
}

.rounded {
  border-radius: 50%;
}

.square {
  /* added to escape from warning */
  margin: 0;
}

.primary {
  background-color: #0072e3;
  color: white;
}

.primary:hover {
  background-color: #0040aa;
}
</style>
