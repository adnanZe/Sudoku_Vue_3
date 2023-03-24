<template>
  <section>
    <base-button mode="primary" class="ratio3to1" @click="$emit('new-game')"
      >New Game</base-button
    >
    <base-button mode="rounded" class="ratio1to1" @click="$emit('undo')">
      <i class="fa-solid fa-rotate-left"></i
    ></base-button>
    <base-button mode="rounded" class="ratio1to1" @click="$emit('erase')">
      <i class="fa-solid fa-eraser"></i>
    </base-button>
    <base-button mode="rounded" class="ratio1to1" @click="$emit('takeNotes')">
      <i class="fa-solid fa-pencil"></i
    ></base-button>
    <base-button
      v-for="number in 9"
      :key="number"
      mode="square"
      class="ratio1to1"
      @click="$emit('addNumber', number)"
    >
      {{ number }}
    </base-button>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  // emits: ["new-game", "undo", "erase", "take-notes", "add-number"],
});
</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(3, 75px);
  gap: 2%;
}

.ratio1to1 {
  aspect-ratio: 1/1;
}

.ratio3to1 {
  grid-column: 1 / 4;
  aspect-ratio: 4 / 1;
}
</style>
