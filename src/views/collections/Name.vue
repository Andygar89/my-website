<template>
  <div v-if="collection">
    <img
      :src="collection.header_image"
      alt=""
      class="object-cover object-center w-full bg-gray-200 border-t border-gray-200 h-52"
    />
    <div class="relative flex flex-col items-center justify-center bg-gray-8">
      <a href="#"
        ><picture
          ><source type="image/webp" />
          <img
            loading="lazy"
            :src="collection.profile_image"
            alt=""
            class="relative object-cover object-center w-40 h-40 bg-gray-300 border-2 border-gray-200 rounded-full shadow-lg  -top-20" /></picture
      ></a>
      <div class="absolute items-center hidden space-x-2 md:flex right-5 top-8">
        <a
          href="#"
          class="inline-flex items-center justify-center p-1 transition duration-150 ease-in-out border rounded-lg  hover:text-gray-7 text-gray-5 border-gray-2 hover:border-gray-5"
        >
          <svg-icon class="h-7 w-7" name="twitter" />
        </a>
        <a
          href="#"
          class="inline-flex items-center justify-center p-1 transition duration-150 ease-in-out border rounded-lg  hover:text-gray-7 text-gray-5 border-gray-2 hover:border-gray-5"
        >
          <svg-icon class="h-7 w-7" name="instagram" />
        </a>
        <a
          href="#"
          class="inline-flex items-center justify-center p-1 transition duration-150 ease-in-out border rounded-lg  hover:text-gray-7 text-gray-5 border-gray-2 hover:border-gray-5"
        >
          <svg-icon class="h-7 w-7" name="globe-alt" />
        </a>
      </div>
      <h1 class="relative text-4xl font-extrabold tracking-tight text-gray-50 -top-16">{{ collection.name }}</h1>
      <div class="relative flex items-center space-x-2 -top-12 sm:hidden">
        <a
          href="#"
          class="inline-flex items-center justify-center p-1 transition duration-150 ease-in-out border rounded-lg  hover:text-gray-7 text-gray-5 border-gray-2 hover:border-gray-5"
        >
          <svg-icon class="h-7 w-7" name="twitter" />
        </a>
        <a
          href="#"
          class="inline-flex items-center justify-center p-1 transition duration-150 ease-in-out border rounded-lg  hover:text-gray-7 text-gray-5 border-gray-2 hover:border-gray-5"
        >
          <svg-icon class="h-7 w-7" name="instagram" />
        </a>
        <a
          href="#"
          class="inline-flex items-center justify-center p-1 transition duration-150 ease-in-out border rounded-lg  hover:text-gray-7 text-gray-5 border-gray-2 hover:border-gray-5"
        >
          <svg-icon class="h-7 w-7" name="globe-alt" />
        </a>
      </div>
      <div class="relative -top-14">
        <dl class="grid grid-cols-4 mt-5">
          <div
            class="px-2 py-2 overflow-hidden transition-shadow duration-500 border-r rounded-l-lg  border-gray-7 sm:p-4 sm:px-8"
          >
            <dd class="text-xl font-semibold text-center text-gray-50">{{ itemCount }}</dd>
            <dt class="mt-1 text-sm font-light text-center text-gray-400 uppercase truncate">items</dt>
          </div>
          <div class="px-2 py-2 overflow-hidden transition-shadow duration-500 border-r border-gray-7 sm:p-4 sm:px-8">
            <dd class="text-xl font-semibold text-center text-gray-50">2.5K</dd>
            <dt class="mt-1 text-sm font-light text-center text-gray-400 uppercase truncate">owners</dt>
          </div>
          <div class="px-2 py-2 overflow-hidden transition-shadow duration-500 border-r border-gray-7 sm:p-4 sm:px-8">
            <dd class="text-xl font-semibold text-center text-gray-50">1.5 SOL</dd>
            <dt class="mt-1 text-sm font-light text-center text-gray-400 uppercase truncate">floor</dt>
          </div>
          <div
            class="px-2 py-2 overflow-hidden transition-shadow duration-500 border-gray-200 rounded-r-lg sm:p-4 sm:px-8"
          >
            <dd class="text-xl font-semibold text-center text-gray-50">4K SOL</dd>
            <dt class="mt-1 text-sm font-light text-center text-gray-400 uppercase truncate">volume</dt>
          </div>
        </dl>
        <h3 class="max-w-2xl ml-2 mr-2 text-base font-normal tracking-tight text-center mt-7 text-gray-4">
          {{ collection.description }}
        </h3>
      </div>
    </div>
    <div class="flex flex-1 border border-gray-200">
      <div class="sticky hidden h-screen pt-5 mr-4 overflow-y-scroll lg:block lg:w-60 xl:w-80 top-16">
        <div class="flex items-center justify-between px-8">
          <h3 class="text-2xl text-gray-9">Filters</h3>
          <button class="text-sm text-pink-8">Clear All</button>
        </div>
        <div class="bg-gray-0.25 h-20 shadow-inner mt-2"></div>
        <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="flex items-center justify-between w-full p-3 border border-l-0 border-r-0 border-gray-0.5"
          >
            <span class="text-sm text-gray-6">STATUS</span>
            <svg-icon class="w-5 h-5 text-opacity-50 text-gray-9" :name="open ? 'minus' : 'plus'" />
          </DisclosureButton>
          <DisclosurePanel></DisclosurePanel>
        </Disclosure>
      </div>
      <main class="flex-1 px-4 pt-6 pb-6 sm:px-6 lg:px-8">
        <div class="flex items-center justify-end">
          <filters />
        </div>
        <div class="grid grid-cols-1 mt-10 gap-y-10 sm:grid-cols-2 gap-x-6 md:grid-cols-3 xl:gap-x-8">
          <a v-for="(item, index) in collectionItems" :key="index" class="group" href="#"
            ><div
              class="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-8 xl:aspect-h-8"
            >
              <router-link :to="`/item/${item.mint_address}`">
                <img
                  loading="lazy"
                  :src="item.media"
                  alt="Degen Ape #9367"
                  class="object-cover object-center w-full h-full group-hover:opacity-60"
                />
              </router-link>
            </div>
            <div class="flex justify-between pl-2 pr-2 mt-4 text-xl">
              <h3 class="flex-1 mr-1 text-base text-gray-400">{{ collection.name }} #{{ item.item_count }}</h3>
              <div class="flex flex-col items-end">
                <h3 class="text-gray-900">{{ item.sol_price }} SOL</h3>
              </div>
            </div>
          </a>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';
import Filters from '@/components/Filters/Filter.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
SwiperCore.use([Navigation]);
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  components: {
    SvgIcon,
    Filters,
    Swiper,
    SwiperSlide,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },
  setup() {
    onMounted(async () => {
      await fetchCollection()
        .then(() => {})
        .catch((error) => {
          if (error.response.status === 404) {
            router.push({ path: '/404' });
          }
        });

      if (!collection || collection.value.is_minting) {
        router.push({ path: '/404' });
      }

      document.title = collection.value.name;
    });

    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const collection = computed(() => store.getters.collection);
    let collectionItems = ref([]);
    const itemCount = computed(() => collectionItems.value.length);
    const fetchCollection = async () => {
      await store.dispatch('fetchCollectionItems', route.params.slug);

      collectionItems.value = collection.value.items;
    };

    const swiperBreakpoints = ref({
      '375': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    });

    return {
      swiperBreakpoints,
      collection,
      collectionItems,
      itemCount,
    };
  },
});
</script>
