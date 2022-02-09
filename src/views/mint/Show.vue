<template>
  <div class="py-24 border-b lg:pt-24 pt-72 bg-gray-9 border-gray-7">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="absolute ml-128">
        <img src="/images/bubble2.png" alt="" />
      </div>
      <div
        class="relative z-10 flex flex-col py-8 border rounded-lg  lg:flex-row backdrop-blur-md bg-gray-gradient border-gray-7"
      >
        <div
          class="relative z-20 w-2/3 ml-16 -mt-64 overflow-hidden border rounded-lg  md:ml-36 lg:-mt-0 lg:w-1/3 lg:-ml-10 bg-gray-8 backdrop-blur-md border-gray-7 sm:rounded-lg"
        >
          <div class="px-4 py-5 sm:p-6">
            <img src="/images/rat-shadow.png" alt="" />
            <div
              class="relative z-50 flex items-center px-2 py-3 space-x-3 border shadow-sm  border-gray-6 rounded-xl md:py-5 md:px-6 bg-gray-7 backdrop-blur-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <div class="shrink-0">
                <img class="w-10 h-10 rounded-full" src="/images/naked-rat.svg" alt="" />
              </div>
              <div class="flex-1 min-w-0">
                <div class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <div class="flex justify-between">
                    <div>
                      <p class="text-xs font-medium uppercase text-gray-50">collection</p>
                      <p class="text-xs text-gray-100 truncate">@hoodratz</p>
                    </div>
                    <div>
                      <p class="text-xs font-medium uppercase text-gray-50">List Price</p>
                      <p class="text-xs text-gray-100 truncate">1.00 SOL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="collection" class="px-4 pt-12 lg:px-24 md:px-36">
          <h1 class="text-2xl font-semibold md:text-4xl text-gray-50">Mint {{ collection.name }}</h1>
          <p class="pt-4 font-semibold text-gray-5">Public mint is happening now!</p>

          <div class="flex items-center pt-12 space-x-4 lg:pl-16">
            <button @click="decrementMintCount">
              <svg
                class="w-5 h-5 text-pink-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
              </svg>
            </button>

            <input
              type="email"
              name="email"
              id="email"
              class="block w-1/4 h-12 text-center border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              v-model="mintCount"
            />

            <button @click="incrementMintCount">
              <svg
                class="w-5 h-5 text-pink-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </button>

            <div class="w-64 pl-16">
              <p class="md:text-lg text-gray-5">Total Cost:</p>
              <p class="md:text-2xl text-lg font-semibold text-gray-0.5">{{ totalCost }}.00 SOL</p>
            </div>
          </div>

          <div class="pt-12 lg:pl-16">
            <PrimaryButton class="w-full" text="Minting Now" @click="mint" />
          </div>
        </div>
      </div>

      <div class="absolute -mt-20">
        <img src="/images/bubble1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject, onMounted, ref } from 'vue';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Solana from '@/utils/solana';

export default defineComponent({
  components: {
    PrimaryButton,
  },
  setup() {
    onMounted(async () => {
      await checkIfMinting();
    });

    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const { LAMPORTS_PER_SOL } = solanaWeb3;

    let mintCount = ref(1);
    let costPerItem = ref(1);
    let totalCost = ref(1);

    const vueToast = <any>inject('vueToast');
    const walletKey = computed(() => store.getters.walletKey);
    const collection = computed(() => store.getters.collection);

    const mint = async () => {
      if (!walletKey.value) {
        vueToast.error('Please connect your wallet first.');
        return;
      }

      try {
        const { transaction, provider, connection, recentBlockhash, blockhash, signature } = await Solana.mintNft();

        await saveToApi({
          signature: signature,
          sender_wallet: walletKey.value,
          receiver_wallet: import.meta.env.VITE_APP_MARKETPLACE_PUBLIC_KEY,
          amount: LAMPORTS_PER_SOL,
          block: blockhash,
          recent_blockhash: recentBlockhash,
          type: 'Phantom',
          transaction_type: 'Minting',
          token_owner: '',
          sol_fee: LAMPORTS_PER_SOL * 0.000005,
          confirmation_status: 'confirmed',
          price: 1, //Change this
        });
      } catch (error) {
        console.log(error);
      }
    };

    const saveToApi = async (payload: Object) => {
      await store.dispatch('storeMintTransaction', payload);
    };

    let checkIfMinting = async () => {
      store
        .dispatch('checkIfMinting', route.params.slug)
        .then(() => {})
        .catch((err) => {
          if (err.response.status === 404) {
            router.push({ path: '/404' });
          }
        });
    };

    let incrementMintCount = () => {
      mintCount.value++;

      if (mintCount.value >= 10) {
        mintCount.value = 10;
      }

      totalCost.value = costPerItem.value * mintCount.value;
    };

    let decrementMintCount = () => {
      mintCount.value--;

      if (mintCount.value <= 1) {
        mintCount.value = 1;
      }

      totalCost.value = costPerItem.value * mintCount.value;
    };

    return {
      mintCount,
      incrementMintCount,
      decrementMintCount,
      costPerItem,
      totalCost,
      checkIfMinting,
      collection,
      vueToast,
      mint,
      saveToApi,
    };
  },
});
</script>
