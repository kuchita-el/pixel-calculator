<script lang="ts" setup>
const props = defineProps<{ state: "empty" | "filled" | "TBD" }>()
</script>

<template>
  <div class="canvas-pixel" :class="{ 'filled-pixel': props.state === 'filled', 'empty-pixel': props.state === 'empty' }"/>
</template>

<style scoped>
.canvas-pixel {
  aspect-ratio: 1 / 1;
  border: black 1px solid;
}

.filled-pixel {
  background-color: dimgray;
}

.empty-pixel {
  background-image: linear-gradient(to top left, transparent, transparent 46%, dimgray 46%, dimgray 56%, transparent 53%, transparent);
}

</style>
