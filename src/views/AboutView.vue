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
                        <p class="text-2xl font-semibold text-gray-700 mb-4">I'm a Web Developer specializing in
                            full-stack development using JavaScript and PHP.
                        </p>
                        <p class="text-base text-gray-700">I'm Ariel Batoon, a 22-year-old Full-stack Web Developer based in
                            Cebu, Philippines.
                            Currently employed on <b>GrowthOps Asia</b> as Full-time Web Developer.
                            <br><br>I love building and innovating things, and I usually use Vue and Laravel to build my
                            ideal applications.
                        </p>
                        <div class="mt-6 w-auto sm:w-1/2">
                            <a href="https://drive.google.com/file/d/1N70n5sfM0dojwFOunHFnkcAQ1pSNjW8a/view?usp=sharing" class="flex items-center justify-center gap-3 whitespace-nowrap items-center rounded-lg bg-gray-900 hover:bg-gray-800 px-4 py-4 
                    text-center text-base font-semibold text-white outline-none transition duration-100">
                                <svg class="w-[20px] h-[20px] text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M1 18a.969.969 0 0 0 .933 1h12.134A.97.97 0 0 0 15 18M1 7V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v5M6 1v4a1 1 0 0 1-1 1H1m0 9v-5h1.5a1.5 1.5 0 1 1 0 3H1m12 2v-5h2m-2 3h2m-8-3v5h1.375A1.626 1.626 0 0 0 10 13.375v-1.75A1.626 1.626 0 0 0 8.375 10H7Z" />
                                </svg>
                                <span>View Resume</span>
                            </a>
                        </div>
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
</MainLayout></template>