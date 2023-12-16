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
            <div class="mx-auto max-w-screen-lg px-4 pt-16 pb-36 flex flex-col items-center gap-10 lg:gap-40">
                <div class="flex flex-col lg:flex-row gap-16 lg:gap-20">
                    <div class="w-full lg:w-1/2">
                        <h1 class="text-5xl font-bold text-gray-800 lg:text-7xl w-full mb-7">About Me.</h1>
                        <p class="text-2xl font-semibold text-gray-700 mb-4">I'm a Jr. Web Developer specializing in
                            full-stack development using JavaScript and PHP.
                        </p>
                        <p class="text-base text-gray-700">I'm Ariel Batoon, a 22-year-old Full-stack Web Developer based in
                            Cebu, Philippines.
                            Currently employed on <b>GrowthOps Asia</b> as Full-time Jr. Web Developer.
                            <br><br>I love building and innovating things, and I usually use Vue and Laravel to build my
                            ideal applications.
                        </p>


                    </div>
                    <div class="w-full lg:w-1/2 hidden lg:block">
                        <img :src="LaraVueIllustration" />
                    </div>
                </div>

                <!-- Technology Stacks -->
                <div class="w-full lg:w-1/2 text-left lg:text-center">
                    <TechStacks />
                </div>
            </div>
        </section>
    </MainLayout>
</template>