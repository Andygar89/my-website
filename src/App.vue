<template>
  <div class="overflow-hidden">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Layouts/Header.vue';
import Footer from '@/components/Layouts/Footer.vue';
export default defineComponent({
  components: {
    Header,
    Footer,
  },
  setup() {},
});
</script>

<style>
.blink {
  animation: blinker 2s linear infinite;
}

@keyframes blinker {  
  50% { opacity: 0; }
}
</style>
