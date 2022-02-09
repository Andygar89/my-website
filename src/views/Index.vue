<template>
  <div class="w-full h-full bg-white">
    <section id="hero" class="hidden lg:block">
      <div class="relative text-white bg-center bg-no-repeat bg-cover min-w-screen h-bg-height bg-nft-hero">
        <div class="relative max-w-3xl ml-10 xl:ml-32 top-28">
          <h1 class="text-5xl font-semibold leading-relaxed lg:px-2">
            Discover & collect NFTs in the world’s first cross-chain marketplace
          </h1>

          <div class="flex items-center pt-8 space-x-8">
            <router-link to="/collections">
              <PrimaryButton class="px-12" type="big" text="Explore collections" />
            </router-link>

            <a href="#" data-tippy-content="Coming soon">
              <SecondaryButton :disabled="true" class="px-12" type="big" text="Learn more" />
            </a>
          </div>
        </div>
        <img class="relative object-cover ml-10 xl:ml-16 top-44 h-36" src="/images/naked-group.png" alt="" />
      </div>
    </section>

    <section id="hero" class="block lg:hidden">
      <div class="relative flex flex-col items-center text-white bg-linear-gradient">
        <div class="relative max-w-xl md:top-24 top-5">
          <h1 class="text-2xl text-center md:text-5xl">
            Discover & collect NFTs in the world’s first cross-chain marketplace
          </h1>

          <div class="flex items-center justify-center mt-5 space-x-8">
            <PrimaryButton type="big" text="Explore collections" />
            <SecondaryButton :disabled="true" type="big" text="Learn more" />
          </div>
        </div>

        <img class="object-center w-full h-full" src="/images/simon-group.png" alt="Image of NFT For Sale" />
      </div>
    </section>

    <section id="featured-collections">
      <div class="px-4 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-12">
        <div class="max-w-2xl py-8 mx-auto sm:py-12 lg:py-14 md:max-w-none">
          <div class="flex items-center justify-between">
            <h2 id="collections-heading" class="text-3xl font-semibold text-gray-9">Featured Collections</h2>
            <router-link to="/collections">
              <SecondaryButton type="small" :with-icon="true" text="See All" />
            </router-link>
          </div>

          <swiper
            v-if="!isLoading"
            :navigation="featuredController"
            :slides-per-view="3"
            :space-between="50"
            :breakpoints="swiperBreakpoints"
            class="mt-12"
          >
            <swiper-slide v-for="(collection, index) in featuredCollections" :key="index">
              <div class="relative mb-6 group sm:mb-0">
                <div
                  class="relative w-full mb-3 overflow-hidden bg-white rounded-lg  h-80 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 md:aspect-w-1 md:aspect-h-1"
                >
                  <img
                    :src="collection.profile_image"
                    :alt="`${collection.name} Profile Image`"
                    class="object-cover object-center w-full h-full"
                  />
                </div>

                <h3 class="mt-2 text-2xl font-semibold text-gray-9">
                  <router-link
                    :to="`/collections/${collection.slug}`"
                    class="duration-150 ease-in-out focus:outline-none group-hover:text-pink-9"
                    ><span class="absolute inset-0"></span>{{ collection.name }}
                  </router-link>
                </h3>

                <div v-if="collection.is_minting" class="flex items-center mt-2 text-emerald-500">
                  <div class="shrink-0 w-2.5 h-2.5 rounded-full bg-emerald-500 blink" aria-hidden="true"></div>
                  <span class="ml-2 text-sm font-semibold uppercase cursor-pointer text-emerald-500">Minting Live</span>
                </div>

                <div v-if="!collection.published_at" class="flex items-center mt-2">
                  <span class="text-sm font-semibold uppercase text-violet-8">Featured</span>
                </div>

                <p class="mt-2 text-base text-gray-400">
                  {{ collection.description }}
                </p>

                <div class="mt-2">
                  <PrimaryButton
                    v-if="collection.is_minting"
                    @click="goToMint(collection.slug)"
                    class="w-full"
                    type="big"
                    text="Mint Now"
                  />
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="relative mb-6 group sm:mb-0">
                <div
                  class="relative w-full mb-3 overflow-hidden duration-500 bg-white rounded-lg  h-80 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 md:aspect-w-1 md:aspect-h-1 group-hover:shadow-lg group-hover:transition-all"
                >
                  <a href="mailto:chris@meema.io">
                    <div class="flex flex-row justify-center">
                      <img src="/images/get-listed.png" alt="" class="object-cover object-center w-full h-full" />
                      <div class="absolute mt-12 inset-y-40">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-7 w-7 text-pink-8 group-hover:text-pink-9"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <h3 class="mt-2 text-2xl font-semibold text-gray-9">
                  <a href="mailto:chris@meema.io" class="focus:outline-none group-hover:text-pink-9">Get Featured</a>
                </h3>
                <p class="mt-2 text-base text-gray-400">Are you interested in getting featured here?</p>
              </div>
            </swiper-slide>

            <div class="-ml-12 featured-prev swiper-button-prev">
              <button class="border rounded-md focus:ring-2 ring-pink-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 p-2 text-pink-600 transition duration-150 ease-in-out bg-white rounded-md  hover:bg-pink-600 active:bg-800 hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
              </button>
            </div>

            <div class="-mr-12 featured-next swiper-button-next">
              <button class="border rounded-md focus:ring-2 ring-pink-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 p-2 text-pink-600 transition duration-150 ease-in-out bg-white rounded-md  hover:bg-pink-600 active:bg-800 hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </swiper>

          <swiper
            v-else
            :slides-per-view="3"
            :space-between="50"
            auto-height
            :breakpoints="swiperBreakpoints"
            class="mt-12"
          >
            <swiper-slide>
              <swiper-loader />
            </swiper-slide>
            <swiper-slide>
              <swiper-loader />
            </swiper-slide>
            <swiper-slide>
              <swiper-loader />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <section id="popular-collections">
      <div class="px-4 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-12">
        <div class="max-w-2xl py-8 mx-auto sm:py-12 lg:py-14 md:max-w-none">
          <div class="flex items-center justify-between">
            <h2 id="collections-heading" class="flex items-center text-3xl font-semibold text-gray-9">
              Popular Collections

              <span
                data-tippy-content="Do you want to see these collections verified? We do, too! Help us reach out to your favorite collections! 💕"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 ml-4 transition duration-150 ease-in-out text-gray-3 hover:text-gray-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  /></svg
              ></span>
            </h2>

            <router-link to="/collections">
              <SecondaryButton type="small" :with-icon="true" text="See All" />
            </router-link>
          </div>

          <swiper
            v-if="!isLoading"
            :navigation="navController"
            :slides-per-view="3"
            :space-between="50"
            :breakpoints="swiperBreakpoints"
            class="mt-12"
          >
            <swiper-slide v-for="(item, index) in popularCollections" :key="index">
              <div class="relative mb-6 group sm:mb-0">
                <div
                  class="relative w-full mb-3 overflow-hidden bg-white rounded-lg  h-80 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 md:aspect-w-1 md:aspect-h-1"
                >
                  <a :href="item.website" target="_blank">
                    <img :src="item.header_image" alt="" class="object-cover object-center w-full h-full" />
                  </a>
                </div>

                <router-link
                  :to="`/collections/${item.slug}`"
                  class="mt-2 text-2xl font-semibold duration-150 ease-in-out  text-gray-9 group-hover:text-pink-9 focus:outline-none"
                  ><span class="absolute inset-0"></span>{{ item.name }}
                </router-link>

                <p class="mt-2 text-base text-gray-400">
                  {{ item.description }}
                </p>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="relative mb-6 group sm:mb-0">
                <div
                  class="relative w-full mb-3 overflow-hidden duration-500 bg-white rounded-lg  h-80 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 md:aspect-w-1 md:aspect-h-1 group-hover:shadow-lg group-hover:transition-all"
                >
                  <a href="mailto:chris@meema.io">
                    <div class="flex flex-row justify-center">
                      <img src="/images/get-listed.png" alt="" class="object-cover object-center w-full h-full" />
                      <div class="absolute mt-12 inset-y-40">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-7 w-7 text-pink-8 group-hover:text-pink-9"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>

                <h3 class="mt-2 text-2xl font-semibold text-gray-9">
                  <a href="#" class="focus:outline-none group-hover:text-pink-9">Get Featured</a>
                </h3>

                <p class="mt-2 text-base text-gray-400">Are you interested in getting listed here?</p>
              </div>
            </swiper-slide>

            <div class="-ml-12 swiper-button-prev">
              <button class="border rounded-md focus:ring-2 ring-pink-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 p-2 text-pink-600 transition duration-150 ease-in-out bg-white rounded-md  hover:bg-pink-600 active:bg-800 hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
              </button>
            </div>

            <div class="-mr-12 swiper-button-next">
              <button class="border rounded-md focus:ring-2 ring-pink-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 p-2 text-pink-600 transition duration-150 ease-in-out bg-white rounded-md  hover:bg-pink-600 active:bg-800 hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </swiper>

          <swiper
            v-else
            :slides-per-view="3"
            :space-between="50"
            auto-height
            :breakpoints="swiperBreakpoints"
            class="mt-12"
          >
            <swiper-slide>
              <swiper-loader />
            </swiper-slide>
            <swiper-slide>
              <swiper-loader />
            </swiper-slide>
            <swiper-slide>
              <swiper-loader />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <section id="create-nft" class="pt-16">
      <div class="w-full py-12 h-116 md:py-24 md:h-100 bg-linear-dark-gradient">
        <div class="absolute ml-16 -mt-12">
          <img src="/images/bubble1.png" alt="" />
        </div>
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="items-start justify-between md:flex">
            <div class="flex flex-col justify-center mt-4 md:pt-0 lg:block md:w-2/5">
              <h1 class="pb-8 text-3xl font-semibold text-center text-white md:text-left">Create your NFT/s</h1>
              <p class="pb-12 font-bold text-center md:text-left text-gray-5">
                Are you an artist? Join our amazing community-driven marketplace &amp; sell your creative work to
                countless of NFT lovers. Reach out to us via Discord, chat, or e-mail, and we will help you get started!
              </p>

              <div data-tippy-content="Coming Soon" class="xl:w-2/5 lg:w-1/2">
                <!-- TODO: this will link the Launchpad -->
                <PrimaryButton text="Create Now" class="w-full" :disabled="true" />
              </div>
            </div>
            <div class="md:w-3/5">
              <img class="w-full md:-mt-28 lg:-mt-48 xl:-mt-64" src="/images/hand-infinity.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="available-items">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl py-8 mx-auto sm:py-12 lg:py-16 md:max-w-none">
          <div class="flex items-center justify-between">
            <h2 id="collections-heading" class="pt-32 text-3xl font-semibold text-gray-9 lg:pt-0">Available NFTs</h2>
            <SecondaryButton type="small" :with-icon="true" text="See All" />
          </div>
          <swiper :slides-per-view="3" :space-between="50" auto-height :breakpoints="swiperBreakpoints" class="mt-12">
            <swiper-slide>
              <div class="relative mb-6 sm:mb-0">
                <div
                  class="relative w-full mb-3 overflow-hidden bg-white rounded-lg  h-80 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 md:aspect-w-1 md:aspect-h-1"
                >
                  <img src="/images/king-hoodrat.png" alt="" class="object-cover object-center w-full h-full" />
                </div>
                <h3 class="mt-2 text-2xl font-semibold text-gray-9">
                  <a href="#" class="focus:outline-none">Hoodratz</a>
                </h3>
                <div class="flex items-center mt-2 text-emerald-500">
                  <div class="shrink-0 w-2.5 h-2.5 rounded-full bg-emerald-500 blink" aria-hidden="true"></div>
                  <span class="ml-2 text-sm font-semibold uppercase cursor-pointer text-emerald-500">Minting Live</span>
                </div>
                <div class="mt-2">
                  <PrimaryButton @click="goToMint('hoodratz-nft')" class="w-full" type="big" text="Mint Now" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="relative mb-6 sm:mb-0">
                <div
                  class="relative w-full mb-3 overflow-hidden bg-white rounded-lg  h-80 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 md:aspect-w-1 md:aspect-h-1"
                >
                  <img src="/images/hoodie.png" alt="" class="object-cover object-center w-full h-full" />
                </div>
                <h3 class="mt-2 text-2xl font-semibold text-gray-9">
                  <a href="#" class="focus:outline-none">Hoodratz</a>
                </h3>
                <div class="flex items-center mt-2 text-emerald-500">
                  <div class="shrink-0 w-2.5 h-2.5 rounded-full bg-emerald-500 blink" aria-hidden="true"></div>
                  <span class="ml-2 text-sm font-semibold uppercase cursor-pointer text-emerald-500">Minting Live</span>
                </div>
                <div class="mt-2">
                  <PrimaryButton @click="goToMint('hoodratz-nft')" class="w-full" type="big" text="Mint Now" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="relative mb-6 sm:mb-0">
                <div
                  class="relative w-full mb-3 overflow-hidden bg-white rounded-lg  h-80 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 md:aspect-w-1 md:aspect-h-1"
                >
                  <img src="/images/anonymouse.png" alt="" class="object-cover object-center w-full h-full" />
                </div>
                <h3 class="mt-2 text-2xl font-semibold text-gray-9">
                  <a href="#" class="focus:outline-none">Hoodratz</a>
                </h3>
                <div class="flex items-center mt-2 text-emerald-500">
                  <div class="shrink-0 w-2.5 h-2.5 rounded-full bg-emerald-500 blink" aria-hidden="true"></div>
                  <span class="ml-2 text-sm font-semibold uppercase cursor-pointer text-emerald-500">Minting Live</span>
                </div>
                <div class="mt-2">
                  <PrimaryButton @click="goToMint('hoodratz-nft')" class="w-full" type="big" text="Mint Now" />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import MobileSidebar from '@/components/Layouts/MobileSidebar.vue';
import HeroSection from '@/components/LandingPage/HeroSection.vue';
import MainSection from '@/components/LandingPage/MainSection.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import SecondaryButton from '@/components/Buttons/SecondaryButton.vue';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);
import { useRouter } from 'vue-router';
import tippy, { animateFill } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import { useStore } from 'vuex';
import SwiperLoader from '@/components/Loaders/SwiperLoader.vue';
import EmptyState from '@/components/State/EmptyState.vue';

export default defineComponent({
  components: {
    MobileSidebar,
    HeroSection,
    MainSection,
    SvgIcon,
    SecondaryButton,
    PrimaryButton,
    Swiper,
    SwiperSlide,
    SwiperLoader,
    EmptyState,
  },
  setup() {
    const store = useStore();
    const featuredCollections = computed(() => store.getters.publishedCollections);
    const popularCollections = computed(() => store.getters.popularCollections);
    const dummyComingSoon = computed(() => store.getters.comingSoon);
    const isLoading = ref(false);
    const navController = ref({
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    });
    const featuredController = ref({
      nextEl: '.featured-next',
      prevEl: '.featured-prev',
    });

    onMounted(async () => {
      isLoading.value = true;
      initializeTippy();

      await fetchCollections();
      // todo: we need an isLoading state for featured & popular collections
      isLoading.value = false;
    });

    const initializeTippy = () => {
      setTimeout(() => {
        tippy('[data-tippy-content]', {
          animateFill: true,
          plugins: [animateFill],
        });
      }, 1000);
    };

    const fetchCollections = async () => {
      await store.dispatch('fetchPublishedCollections', { is_featured: true });
      //  TODO: refactor to this call
      // await store.dispatch('fetchPublishedCollections', { is_popular: true });
      await store.dispatch('fetchPopularCollections');
    };

    const router = useRouter();

    let goToMint = (collection: string) => {
      window.open('https://hoodratz.nakednfts.io/', '_blank');
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
      goToMint,
      initializeTippy,
      fetchCollections,
      featuredCollections,
      popularCollections,
      dummyComingSoon,
      isLoading,
      navController,
      featuredController,
    };
  },
});
</script>

<style>
.bg-linear-gradient {
  background: linear-gradient(45deg, #010123 0%, #010124 53.95%, #010125 100%);
}
.bg-linear-light-gradient {
  background: linear-gradient(235.98deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70.2%),
    linear-gradient(151.99deg, rgba(1, 1, 44, 0.01) 0.44%, rgba(2, 2, 35, 0.01) 97.95%);
}
.bg-linear-dark-gradient {
  background: linear-gradient(95.34deg, #010120 1.04%, #07073b 93.77%);
}
.swiper-button-next::after,
.swiper-button-prev::after {
  content: '' !important;
}
.swiper-button-next,
.swiper-button-prev {
  top: 40%;
}

.swiper {
  @apply overflow-visible !important;
}

.swiper-button-prev {
  @apply hidden md:flex !important;
}

.swiper-button-next {
  @apply hidden md:flex !important;
}
</style>
