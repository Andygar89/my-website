<template>
  <div class="pb-10">
    <div class="px-4 pt-24 sm:px-6 sm:flex sm:flex-col sm:items-center sm:justify-center lg:px-8 xl:px-0">
      <h1 class="mt-4 text-6xl font-bold tracking-tight text-gray-8">All Collections</h1>
      <div class="mt-5 mb-10">
        <div class="relative flex items-center mt-1">
          <input
            type="text"
            name="search"
            id="search"
            class="block h-12 pr-12 border-gray-300 rounded-md shadow-sm  w-110 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search Collections..."
          />
          <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <button
              class="inline-flex items-center px-2 font-sans text-sm font-medium text-gray-700 transition duration-150 ease-in-out  hover:text-gray-500"
            >
              <svg-icon class="w-6 h-6" name="search" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 mb-24 xl:max-w-7xl xl:mx-auto">
      <div v-if="isLoading" class="grid grid-cols-1 gap-4 px-4 lg:grid-cols-3 md:grid-cols-2">
        <swiper-loader />
        <swiper-loader />
        <swiper-loader />
      </div>

      <empty-state v-else-if="!isLoading && !publishedCollections.length" />

      <div v-else class="grid grid-cols-1 gap-8 px-4 lg:grid-cols-3 md:grid-cols-2">
        <router-link
          v-for="(collection, index) in publishedCollections"
          :key="index"
          :to="`/collections/${collection.slug}`"
          class="relative flex flex-col items-center justify-center w-full h-full p-6 overflow-hidden transition duration-150 ease-in-out rounded-lg  hover:opacity-75 xl:w-auto bg-gray-50"
        >
          <!-- :style="{ 'background-color': collection.color }" -->
          <span aria-hidden="true" class="absolute inset-0">
            <img
              :src="collection.header_image"
              :alt="`${collection.name} Portrait`"
              class="object-cover object-center w-full h-1/2"
            />
          </span>

          <span aria-hidden="true" class="relative top-32">
            <img
              :src="collection.header_image"
              alt=""
              class="object-cover object-center w-full border-4 rounded-full h-36 text-gray-8"
            />
          </span>

          <div class="relative flex items-center justify-center font-semibold text-gray-8 top-36">
            <div class="flex">
              <div class="flex items-center">
                <div class="shrink-0 w-2.5 h-2.5 rounded-full bg-emerald-700 animate-pulse" aria-hidden="true"></div>
                <span class="ml-2 text-sm uppercase">Live</span>
              </div>
            </div>
          </div>

          <span class="relative mt-40 text-xl font-bold text-center break-all text-gray-8">{{ collection.name }}</span>

          <p class="relative text-sm text-center text-gray-8">
            {{ collection.description }}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import SvgIcon from '@/components/SvgIcon.vue';
import SwiperLoader from '@/components/Loaders/SwiperLoader.vue';
import EmptyState from '@/components/State/EmptyState.vue';

export default defineComponent({
  components: {
    SvgIcon,
    SwiperLoader,
    EmptyState,
  },
  setup() {
    const store = useStore();
    const publishedCollections = computed(() =>
      store.getters.publishedCollections.filter((col) => {
        return !col.is_minting;
      })
    );
    const isLoading = ref(false);

    onMounted(async () => {
      isLoading.value = true;

      await fetchCollections();
      isLoading.value = false;
    });

    const fetchCollections = async () => {
      await store.dispatch('fetchPublishedCollections');
    };

    return {
      fetchCollections,
      publishedCollections,
      isLoading,
    };
  },
});
</script>
