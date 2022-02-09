<template>
  <div class="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div
        class="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all rounded-lg shadow-xl  bg-gray-8 sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full sm:p-6"
      >
        <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
          <button
            type="button"
            class="transition duration-150 ease-in-out rounded-md text-gray-4 hover:text-gray-2"
            @click="$emit('close')"
          >
            <span class="sr-only">Close</span>
            <!-- Heroicon name: outline/x -->
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          <div class="lg:row-end-1 lg:col-span-5">
            <div class="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1">
              <img
                :src="activeItem.media"
                alt="Deep in the heart of Dingus Forest echoes the sleepless cries of a troop of 10,000 apes. These aren’t just regular apes, however. These are degenerate apes."
                class="object-cover object-center w-full h-full"
              />
            </div>
            <p class="mt-3 text-sm text-gray-3">
              {{ activeItem.collection.description }}
            </p>
          </div>
          <div class="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-7">
            <div class="flex flex-col-reverse">
              <div class="mt-2">
                <h1 class="text-2xl font-extrabold tracking-tight text-gray-1 sm:text-3xl">
                  {{ activeItem.collection.name }} # {{ activeItem.item_count }}
                </h1>
                <h2 id="information-heading" class="sr-only">Token information</h2>
              </div>
              <div>
                <a href="#"
                  ><p class="mt-2 text-lg font-bold text-gray-2">{{ activeItem.collection.name }}</p></a
                >
              </div>
            </div>
            <div class="flex items-center justify-center mt-6">
              <PrimaryButton text="List Now" class="w-full" @click="listNft" />
            </div>
            <div class="pt-10 mt-10 border-t border-gray-200">
              <div class="flex flex-wrap">
                <div
                  v-for="(attribute, index) in activeItem.attributes"
                  :key="index"
                  class="p-2 m-1 border border-gray-500 rounded-lg pointer-events-none w-36"
                  aria-hidden="true"
                >
                  <p class="text-base font-medium text-gray-2">{{ attribute.name }}</p>
                  <p class="mt-1 text-sm text-gray-3">Yellow</p>
                  <p class="mt-1 text-sm text-gray-4">16.6%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from 'vue';
import Solana from '@/utils/solana';
import { useStore } from 'vuex';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';

export default defineComponent({
  components: {
    PrimaryButton,
  },
  props: {
    activeItem: {
      type: Object,
      required: true,
    },
  },
  emits: ['close'],
  setup(props, context) {
    console.log(props);
    const store = useStore();
    const { LAMPORTS_PER_SOL } = solanaWeb3;
    const marketplaceKey = import.meta.env.VITE_APP_SOLANA_MARKETPLACE_KEY;
    const walletKey = computed(() => store.getters.walletKey);
    const vueToast = <any>inject('vueToast');

    const listNft = async () => {
      if (!walletKey.value) {
        vueToast.error('Please connect your wallet first.');
        return;
      }

      try {
        const mintAddress = 'APtwPyUaTFzn8GFaHHjrgzzkCUzHYbdJtAYW7SrmbApR'; // get from the click trigger
        const price = 1; // get from the click trigger
        const { signature, recentBlockhash, blockhash } = await Solana.listNft(mintAddress);

        if (signature) {
          await saveToApi({
            signature: signature,
            sender_wallet: walletKey.value,
            receiver_wallet: import.meta.env.VITE_APP_MARKETPLACE_PUBLIC_KEY,
            amount: LAMPORTS_PER_SOL,
            block: blockhash,
            recent_blockhash: recentBlockhash,
            type: 'Phantom',
            transaction_type: 'Listing',
            token_owner: '$2y$10$.q6TlfPDYeLoJR9DjGki6enS46UY1vNk6u.TqEUZ5dG4FscxhDjmS',
            sol_fee: LAMPORTS_PER_SOL * 0.000005,
            confirmation_status: 'confirmed',
            mint_address: mintAddress,
            price: price,
          });

          vueToast.success('Transaction successfully confirmed!');
        } else {
          vueToast.error('User rejected the request.');
        }
      } catch (error) {
        throw error;
        vueToast.error('Something went wrong with the transaction, please try again.');
      }
    };

    const saveToApi = async (payload: Object) => {
      await store.dispatch('storeListTransaction', payload);
    };

    return {
      listNft,
      saveToApi,
      walletKey,
    };
  },
});
</script>
