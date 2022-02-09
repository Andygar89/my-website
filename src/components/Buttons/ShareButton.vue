<template>
  <Popover class="relative">
    <PopoverButton>
      <button
        class="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out border border-gray-200 rounded-lg  h-9 hover:text-gray-900 hover:shadow"
      >
        <svg-icon class="w-5 h-5" name="share" />
      </button>
    </PopoverButton>

    <PopoverPanel class="absolute z-10 right-0 top-12">
      <div class="flex flex-col bg-gray-8 text-white p-3 rounded-lg w-52 space-y-2">
        <a class="hover:text-gray-4 inline-flex items-center" :href="'https://www.facebook.com/sharer/sharer.php?u='+fullUrl" target="_blank"><svg-icon class="w-7 h-7 mr-1" name="facebook" /> Share on Facebook</a>
        <a class="hover:text-gray-4 inline-flex items-center" :href="'http://twitter.com/share?url='+fullUrl" target="_blank"><svg-icon class="w-7 h-7 mr-1" name="twitter-circle" /> Share on Twitter</a>
        <a class="hover:text-gray-4 inline-flex items-center" href="#" @click="copy"><svg-icon class="w-7 h-7 mr-1" name="document-duplicate" /> Copy to Clipboard</a>
      </div>
    </PopoverPanel>
  </Popover>
</template>

<script lang="ts">
import SvgIcon from '@/components/SvgIcon.vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  components: {
    SvgIcon,
    Popover,
    PopoverButton,
    PopoverPanel,
  },
  setup() {
    const fullUrl = window.location.href;
    const copy = () => {
      navigator.clipboard.writeText(window.location.href);
    };

    return {
      fullUrl,
      copy,
    };
  },
});
</script>
