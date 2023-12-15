<script setup>
import TechStacks from '@/components/TechStacks.vue';
import MainLayout from '@/components/MainLayout.vue';
import LaraVueIllustration from '@/assets/UndrawLaravelVueIllus.svg';

// Page Title of Views
const pageTitle = 'About'
</script>

<template>
    <MainLayout :pageTitle="pageTitle">
        <!-- About Text -->
        <section class="bg-gray-100">
            <div class="mx-auto max-w-screen-xl px-4 py-12">
                <div class="flex flex-col-reverse lg:flex-row gap-16 lg:gap-20">
                    <div class="w-full lg:w-1/2">
                        <h1 class="text-4xl font-bold text-gray-800 lg:text-7xl w-full mb-7">About Me</h1>
                        <p class="text-2xl font-semibold text-gray-700 mb-4">I'm a Jr. Web Developer specializing in
                            full-stack development using JavaScript and PHP.
                        </p>
                        <p class="text-base text-gray-700">I'm Ariel Batoon, a 22-year-old Full-stack Web Developer based in Cebu, Philippines.
                            Currently employed on GrowthOps Asia as Full-time Jr. Web Developer.
                            <br><br>I am also a freelance web developer offering front-end, back-end, and full-stack development
                            works. I am dedicated to create high-quality and user-friendly websites that meet my client's needs. 
                            I am passionate about staying up-to-date with the latest trends and technologies in web development and regularly
                            attend gatherings to share my knowledge with fellow developers and expand my skill set.
                            <br><br>In my spare time, I enjoy learning new things and exploring with technology and constantly have
                            to remind myself to keep inspiring myself to go above and beyond.
                        </p>
                    </div>
                    <div class="w-full lg:w-1/2">
                        <img :src="LaraVueIllustration" />
                    </div>
                </div>
            </div>
    </section>

    <!-- Technology Stacks -->
    <TechStacks />
</MainLayout>
</template>