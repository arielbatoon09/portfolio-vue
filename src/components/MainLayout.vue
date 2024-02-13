<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const showButton = ref(false);
const props = defineProps({
    pageTitle: String,
});

const goBackToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  showButton.value = window.scrollY > 100;
};

onMounted(() => {
    // Page Title
    document.title = "Ariel Works - " + props.pageTitle;
    window.addEventListener('scroll', handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <Header />

    <main>
        <slot />
    </main>

    <div>
        <button 
            v-if="showButton"
            @click="goBackToTop"
            class="fixed bottom-4 right-4 bg-gray-800 text-white p-2.5 rounded-md shadow-md hover:scale-110 transition-opacity duration-300 z-50">
            <svg class="w-[24px] h-[24px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M9 5 5 1 1 5" />
            </svg>
        </button>
    </div>
    <Footer />
</template>