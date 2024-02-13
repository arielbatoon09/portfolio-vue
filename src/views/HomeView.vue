<script setup>
import MainLayout from '../components/MainLayout.vue';
import HeroBanner from '@/components/HeroBanner.vue';
import HomeProjectsGallery from '@/components/HomeProjectsGallery.vue';

// Page Title of Views
const pageTitle = 'Home'
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
    
    <!-- Hero Banner Section -->
    <HeroBanner />

    <!-- Project Gallery -->
    <HomeProjectsGallery />
  </MainLayout>
</template>