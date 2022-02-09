<template>
  <div class="flex flex-col items-center justify-center">
    <img src="/images/svg/empty-state.svg" alt="" />
    <h1 class="text-3xl text-center text-gray-9">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Collections are coming soon!',
    },
  },
  setup() {},
});
</script>
