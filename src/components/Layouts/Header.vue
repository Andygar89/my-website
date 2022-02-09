<template>
  <header>
    <nav class="border-b bg-yellow-4 border-gray-7">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
          <div class="flex justify-between">
            <div class="flex items-center shrink-0">
              <router-link to="/" class="rounded-md lg:px-2 focus:outline-none focus:bg-pink-custom-2">
                <h1 class="font-serif text-xl uppercase md:text-2xl text-gray-50">
                  <span class="text-red-8"> Andy's<span class="lowercase">website</span> </span>
                </h1>
              </router-link>
            </div>

            <div class="hidden font-gilroy md:ml-6 md:flex md:items-center lg:space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link
                to="/"
                class="
                  px-3
                  py-2
                  font-medium
                  text-gray-100
                  transition
                  duration-150
                  ease-in-out
                  rounded-md
                  focus:outline-none focus:bg-pink-custom-2
                  hover:text-pink-8
                "
                aria-current="page"
              >
                Home
              </router-link>
              <router-link
                to="/collections"
                class="
                  px-3
                  py-2
                  font-medium
                  text-gray-100
                  transition
                  duration-150
                  ease-in-out
                  rounded-md
                  focus:outline-none focus:bg-pink-custom-2
                  hover:text-pink-8
                "
                aria-current="page"
              >
                Explore
              </router-link>

              <!-- <a
                href="#"
                data-tippy-content="Coming soon"
                class="px-3 py-2 font-medium transition duration-150 ease-in-out rounded-md text-gray-5 focus:outline-none focus:bg-pink-custom-2 hover:text-pink-8"
                >Explore
              </a> -->

              <a
                href="#"
                data-tippy-content="Coming soon"
                class="
                  px-3
                  py-2
                  font-medium
                  transition
                  duration-150
                  ease-in-out
                  rounded-md
                  text-gray-5
                  focus:outline-none focus:bg-pink-custom-2
                  hover:text-pink-8
                "
                >Stats</a
              >
            </div>
          </div>
          <!-- <div class="flex items-center justify-center px-2 md:justify-end md:flex-1 lg:ml-6">
            <div class="w-3/4 max-w-lg md:w-full lg:max-w-xs">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-pink-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  name="search"
                  class="block w-full py-3 pl-10 pr-3 text-xs leading-5 text-gray-100 border border-gray-600 rounded-md placeholder-gray-1 bg-blue-4 focus:outline-none focus:text-gray-100 sm:text-sm"
                  placeholder="Search collection"
                  type="search"
                />
              </div>
            </div>
          </div> -->
          <div class="flex items-center mr-2 -ml-2 md:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              class="
                inline-flex
                items-center
                justify-center
                p-2
                text-gray-400
                transition
                duration-150
                ease-in-out
                rounded-md
                hover:text-white hover:bg-gray-700
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
              "
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="showMobile = !showMobile"
            >
              <span class="sr-only">Open main menu</span>

              <!-- hamburger icon -->
              <svg
                v-show="!showMobile"
                class="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!-- x icon -->
              <svg
                v-show="showMobile"
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="items-center hidden md:flex">
            <div class="shrink-0">
              <div v-if="!walletKey">
                <PrimaryButton type="big" text="Message" @click.native="toggleDropdown" />
              </div>
              <div v-else>
                <a
                  @click="toggleDropdown"
                  href="#"
                  class="hidden w-32 text-sm font-medium text-white truncate hover:text-gray-300 lg:block"
                  >{{ walletKey }}</a
                >
              </div>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-class="scale-95 opacity-0 "
                enter-to-class="scale-100 opacity-100 "
                leave-active-class="transition duration-75 ease-in"
                leave-class="scale-100 opacity-100 "
                leave-to-class="scale-95 opacity-0 "
                appear
              >
                <div
                  v-show="dropdown"
                  class="
                    absolute
                    z-10
                    w-48
                    py-1
                    mt-2
                    -ml-10
                    transition
                    duration-150
                    ease-in-out
                    origin-top-right
                    bg-white
                    rounded-md
                    shadow-lg
                    hover:bg-gray-100
                    ring-1 ring-black ring-opacity-5
                    focus:outline-none
                  "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <div v-if="!walletKey">
                    <button
                      href="#"
                      class="flex px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                      @click="connectPhantom"
                    >
                      <img src="/images/phantom.png" width="18" height="18" alt="Phantom" class="mr-2" />
                      <span>Phantom</span>
                    </button>
                  </div>
                  <div v-else class="py-1" role="none">
                    <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                    <router-link
                      :to="`/user/${walletKey}`"
                      @click="toggleDropdown"
                      class="flex px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-200"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Profile
                    </router-link>

                    <a
                      href="#"
                      @click="disconnectWallet"
                      class="flex px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-200"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Disconnect
                    </a>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" v-show="showMobile" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

          <router-link
            to="/"
            class="block px-3 py-2 text-base font-medium text-gray-100 rounded-md hover:bg-gray-700 hover:text-white"
          >
            Home
          </router-link>

          <router-link
            to="/collections"
            class="block px-3 py-2 text-base font-medium text-gray-100 rounded-md hover:bg-gray-700 hover:text-white"
            >Explore</router-link
          >

          <a
            href="#"
            disabled
            class="block px-3 py-2 text-base font-medium text-gray-100 rounded-md hover:bg-gray-700 hover:text-white"
            >Stats</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import Phantom from '@/utils/phantom';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import { inject } from 'vue';

export default defineComponent({
  components: {
    PrimaryButton,
  },
  setup(props, context) {
    const vueToast = <any>inject('vueToast');
    const store = useStore();
    const dropdown = ref(false);
    const showMobile = ref(false);
    const phantomMobile = ref(false);
    const walletKey = computed(() => store.getters.walletKey);

    function toggleDropdown() {
      dropdown.value = !dropdown.value;
    }

    const connectPhantom = async () => {
      toggleDropdown();
      Phantom.redirect();

      try {
        const key = await Phantom.connectWallet();
        await store.dispatch('saveUser', key);

        app.config.globalProperties.$cookie.setCookie('nakedNfts.autoConnect', 1, {
          expire: '7d',
        });

        vueToast.success('Wallet succesfully connected!');
      } catch (e) {
        vueToast.error('Unable to connect to wallet');
      }
    };

    const disconnectWallet = async () => {
      toggleDropdown();
      await Phantom.disconnect();

      await store.dispatch('removeWalletKey');
      app.config.globalProperties.$cookie.setCookie('nakedNfts.autoConnect', 0, {
        expire: '7d',
      });

      vueToast.success('Wallet succesfully disconnected!');
    };

    return {
      dropdown,
      toggleDropdown,
      connectPhantom,
      walletKey,
      disconnectWallet,
      vueToast,
      showMobile,
      phantomMobile,
    };
  },
});
</script>
