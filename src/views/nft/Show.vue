
<template>
  <div v-if="item" class="bg-white">
    <div class="px-4 py-10 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      <!-- Product -->
      <div class="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-y-8 gap-x-8">
        <!-- Product image -->
        <div class="lg:row-end-1 lg:col-span-3">
          <div class="overflow-hidden bg-gray-100 rounded-lg aspect-w-4 aspect-h-3">
            <img
              :src="item.media"
              alt="Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles."
              class="object-cover object-center"
            />
          </div>
        </div>

        <!-- Product details -->
        <div class="w-full mt-5 lg:row-end-2 lg:row-span-2 lg:col-span-4 xl:mt-0 lg:mt-0">
          <div class="flex justify-between">
            <div>
              <h1 class="text-sm text-pink-8">{{ item.collection.name }}</h1>
              <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {{ item.collection.name }} #{{ item.item_count }}
              </h1>
              <p class="mt-2 text-sm text-gray-400">Owned by {{ item.user.wallet_id }}</p>
            </div>
            <div class="flex space-x-2">
              <site-button />
              <share-button />
            </div>
          </div>

          <div class="pt-2 mt-5 border-t border-gray-200">
            <p class="mt-6 text-sm text-gray-400">Current Price</p>
            <p class="mt-2 text-3xl font-bold text-gray-800">
              {{ item.sol_price }} SOL <span class="text-sm font-normal text-gray-400">($2,065.55)</span>
            </p>

            <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-4 sm:grid-cols-2">
              <primary-button text="Buy Now" @click="buyNft" />
              <secondary-button text="Make Offer" :with-icon="false" />
            </div>
          </div>

          <div class="mt-5">
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                class="flex items-center justify-between w-full p-3 border border-gray-200"
                :class="open ? 'rounded-t-lg' : 'rounded-lg'"
              >
                <span class="font-semibold text-gray-900">Offers</span>
                <span class="text-gray-600"
                  ><svg-icon class="w-5 h-5" :name="open ? 'chevron-up' : 'chevron-down'"
                /></span>
              </DisclosureButton>
              <DisclosurePanel class="min-w-full">
                <offers />
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>

        <div class="w-full mx-auto mt-5 lg:max-w-none lg:mt-0 lg:col-span-3">
          <Disclosure v-slot="{ open }">
            <DisclosureButton
              class="flex items-center justify-between w-full p-3 border border-gray-200"
              :class="open ? 'rounded-t-lg' : 'rounded-lg'"
            >
              <span class="font-semibold text-gray-900">Description</span>
              <span class="text-gray-600"
                ><svg-icon class="w-5 h-5" :name="open ? 'chevron-up' : 'chevron-down'"
              /></span>
            </DisclosureButton>
            <DisclosurePanel class="p-3 border border-t-0 border-gray-200 rounded-b-lg">
              <p class="text-sm text-gray-600">
                {{ item.collection.description }}
              </p>
            </DisclosurePanel>
          </Disclosure>

          <Disclosure v-slot="{ open }">
            <DisclosureButton
              class="flex items-center justify-between w-full p-3 mt-5 border border-gray-200"
              :class="open ? 'rounded-t-lg' : 'rounded-lg'"
            >
              <span class="font-semibold text-gray-900">Account Details</span>
              <span class="text-gray-600"
                ><svg-icon class="w-5 h-5" :name="open ? 'chevron-up' : 'chevron-down'"
              /></span>
            </DisclosureButton>
            <DisclosurePanel class="p-3 border border-t-0 border-gray-200 rounded-b-lg">
              <div class="flex flex-col">
                <div class="flex flex-wrap items-center justify-between break-all lg:flex-col lg:items-start">
                  <h1 class="font-bold text-gray-900">Mint Address</h1>
                  <p class="text-sm text-gray-600">{{ item.mint_address }}</p>
                </div>
                <div class="flex flex-wrap items-center justify-between my-3 break-all lg:flex-col lg:items-start">
                  <h1 class="font-bold text-gray-900">Token Address</h1>
                  <p class="text-sm text-gray-600">{{ item.token_owner }}</p>
                </div>
                <div class="flex flex-wrap items-center justify-between break-all lg:flex-col lg:items-start">
                  <h1 class="font-bold text-gray-900">Collection</h1>
                  <p class="text-sm text-gray-600">{{ item.collection.name }}</p>
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
      <TransactionHistory />
    </div>
  </div>
</template>

<script lang="ts">
import TransactionHistory from '@/components/Table/TransactionHistory.vue';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import SecondaryButton from '@/components/Buttons/SecondaryButton.vue';
import ShareButton from '@/components/Buttons/ShareButton.vue';
import SiteButton from '@/components/Buttons/SiteButton.vue';
import Offers from '@/components/Table/Offers.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { defineComponent, computed, inject, onMounted } from 'vue';
import { useStore } from 'vuex';
import Solana from '@/utils/solana';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  components: {
    TransactionHistory,
    PrimaryButton,
    SecondaryButton,
    ShareButton,
    SiteButton,
    Offers,
    SvgIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const walletKey = computed(() => store.getters.walletKey);
    const item = computed(() => store.getters.item);
    const { LAMPORTS_PER_SOL } = solanaWeb3;
    const vueToast = <any>inject('vueToast');

    onMounted(async () => {
      await fetchItem();
    });

    const fetchItem = async () => {
      await store.dispatch('fetchItem', route.params.mint).catch((error) => {
        if (error.response.status === 404) {
          router.push({ path: '/404' });
        }
      });
    };

    const buyNft = async () => {
      if (!walletKey.value) {
        vueToast.error('Please connect your wallet first.');
        return;
      }

      try {
        const mintAddress = 'APtwPyUaTFzn8GFaHHjrgzzkCUzHYbdJtAYW7SrmbApR'; // get from click trigger
        const sellerAddress = '5cSVX68D7XoxK4H2mbxjYqWEh1LrX2R7KniFvofHx9kd'; // get from click trigger

        const { transaction, provider, connection, recentBlockhash, blockhash, signature } = await Solana.buyNft(
          mintAddress,
          sellerAddress
        );

        await saveToApi({
          signature: signature,
          sender_wallet: walletKey.value,
          receiver_wallet: 'qPHc6cq8leni5lugaw6NpBdaFeDJyoovrKrNM3iHg4cqk',
          amount: LAMPORTS_PER_SOL,
          block: blockhash,
          recent_blockhash: recentBlockhash,
          type: 'Phantom',
          transaction_type: 'Buying',
          token_owner: '$2y$10$.q6TlfPDYeLoJR9DjGki6enS46UY1vNk6u.TqEUZ5dG4FscxhDjmS',
          sol_fee: LAMPORTS_PER_SOL * 0.000005,
          confirmation_status: 'confirmed',
          mint_address: mintAddress,
        });
      } catch (error) {
        console.log(error);
      }
    };

    const saveToApi = async (payload: Object) => {
      await store.dispatch('storeBuyTransaction', payload);
    };

    return {
      buyNft,
      saveToApi,
      walletKey,
      vueToast,
      item,
    };
  },
});
</script>
