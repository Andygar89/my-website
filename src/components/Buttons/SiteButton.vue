<template>
  <button
    class="inline-flex items-center justify-center p-2 text-gray-700 transition ease-in-out border border-gray-200 rounded-lg  duration h-9 hover:text-gray-900 hover:shadow"
  >
    <svg-icon class="w-5 h-5" name="globe-alt" />
  </button>
</template>

<script lang="ts">
import SvgIcon from '@/components/SvgIcon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    SvgIcon,
  },
});
</script>
