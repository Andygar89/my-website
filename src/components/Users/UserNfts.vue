<template>
  <div class="grid gap-4 my-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
    <div v-for="(nft, index) in userNfts" :key="index" class="relative mb-6 group sm:mb-0" @click="toggleModal(nft)">
      <div
        class="relative w-full overflow-hidden transition duration-150 ease-in-out bg-white rounded-lg  h-80 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
      >
        <img :src="nft.media" :alt="nft.collection.name" class="object-cover object-center w-full h-full" />
      </div>
      <h3 class="mt-2 text-base text-gray-900">
        <a href="#"><span class="absolute inset-0"></span>{{ nft.collection.nickname }}</a>
      </h3>
      <p class="text-base font-semibold text-gray-700">
        ◎ {{ nft.sol_price }} <span class="font-light">Current Price</span>
      </p>
    </div>
    <user-nft-modal :active-item="activeItem" v-if="openModal" @close="openModal = false" />
  </div>
</template>

<script lang="ts">
import UserNftModal from '@/components/Modals/UserNftModal.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    UserNftModal,
  },
  props: {
    userNfts: {
      type: Array,
      required: true,
    },
  },
  setup(props, context) {
    const openModal = ref(false);
    let activeItem = ref({});

    const toggleModal = (nft: object) => {
      activeItem.value = nft;

      openModal.value = true;
    };

    return {
      openModal,
      toggleModal,
      activeItem,
    };
  },
});
</script>
