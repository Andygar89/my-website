<template>
  <div class="px-4 pt-24 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div>
      <div class="hidden sm:block" v-if="show">
        <div class="border-b">
          <nav class="flex -mb-px space-x-8" aria-label="Tabs">
            <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" -->
            <a
              v-for="(tab, index) in tabs"
              :key="index"
              href="#"
              class="flex px-1 py-4 text-sm font-medium text-gray-500 transition duration-150 ease-in-out  hover:text-gray-700 hover:border-gray-200 whitespace-nowrap"
              :class="{
                'border-blue-500 text-blue-600': tab.component == activeComponent,
              }"
              @click="setActiveTab(tab.component)"
            >
              <svg-icon class="w-5 h-5 mr-1" :name="tab.icon" />
              {{ tab.name }}
              <span
                v-if="tab.component != 'user-activity'"
                class="
                  bg-gray-100
                  text-gray-900
                  hidden
                  ml-3
                  py-0.5
                  px-2.5
                  rounded-full
                  text-xs
                  font-medium
                  md:inline-block
                "
                :class="{
                  'border-blue-500 text-blue-600 bg-blue-50': tab.component == activeComponent,
                }"
                >{{ tab.count }}</span
              >
            </a>
          </nav>
        </div>
      </div>

      <div class="flex justify-center" v-else>
        <div class="flex flex-col items-center space-y-2 md:space-y-6">
          <img src="/images/searchnft.png" alt="" />
          <span class="w-48 text-xs text-center">This functionality will soon be fully implemented.</span>
          <PrimaryButton type="small" text="Browse available NFTs" @click="$router.push('/')" />
        </div>
      </div>
    </div>
    <component :userNfts="userNfts" :is="activeComponent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import UserNfts from '@/components/Users/UserNfts.vue';
import MyOffers from '@/components/Users/MyOffers.vue';
import ReceivedOffers from '@/components/Users/ReceivedOffers.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import solana from '@/utils/solana';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import UserActivity from '@/components/Users/UserActivity.vue';

export default defineComponent({
  components: {
    SvgIcon,
    UserNfts,
    MyOffers,
    ReceivedOffers,
    UserActivity,
    PrimaryButton,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const userNfts = computed(() => store.getters.userNfts);

    onMounted(async () => {
      // TO DO use this to iterate in frontend
      await store.dispatch('getUserNfts', route.params.id);
      show.value = userNfts.value.length > 0;
      nftCount.value = userNfts.value.length;
    });

    let activeComponent = ref('user-nfts');
    let show = ref(false);
    let nftCount = ref(0);

    const tabs = ref([
      {
        name: 'NFTS',
        icon: 'photograp',
        component: 'user-nfts',
        count: nftCount,
      },
      // {
      //   name: 'My Offers',
      //   icon: 'shopping-bag',
      //   component: 'my-offers',
      //   count: 0,
      // },
      // {
      //   name: 'Received Offers',
      //   icon: 'tag',
      //   component: 'received-offers',
      //   count: 0,
      // },
      // {
      //   name: 'Activity',
      //   icon: 'chart-square-bar',
      //   component: 'user-activity',
      // },
    ]);
    const setActiveTab = (component: string) => {
      activeComponent.value = component;
    };
    return {
      activeComponent,
      tabs,
      setActiveTab,
      userNfts,
      show,
      nftCount,
    };
  },
});
</script>