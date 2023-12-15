<script setup>
import HeroBanner from '@/assets/banner_img.png';

// Social Links - Update this links to your link
const FacebookLink = 'https://www.facebook.com/itsarielbatoon';
const LinkedinLink = 'https://www.linkedin.com/in/ariel-batoon-679688286/';
const GithubLink = 'https://github.com/arielbatoon09';


</script>

<template>
    <section class="mx-auto max-w-screen-xl px-4 flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row py-16">
        <!-- content - start -->
        <div class="flex flex-col justify-between xl:w-5/12">
            <div></div>

            <div class="sm:text-center lg:py-12 lg:text-left xl:py-24">

                <h1 class="text-gray-800 text-4xl font-light mb-8"><span class="font-bold">GrowthOps Asia</span> Developer
                </h1>
                <p class="text-2xl mb-8">A 22-year-old <span class="font-bold">Full-stack Web Developer</span> based in
                    Cebu, Philippines.</p>

                <div class="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                    <router-link to="/contact" href="#" class="flex gap-3 items-center rounded-lg bg-gray-900 hover:bg-gray-800 px-8 py-4 text-center text-base font-semibold text-white outline-none 
                        transition duration-100">
                        <svg class="w-[20px] h-[20px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 20 20">
                            <path fill="currentColor"
                                d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z" />
                        </svg>
                        <span>Book a Meeting</span>
                    </router-link>

                    <router-link to="/about"
                        class="flex gap-3 items-center inline-block rounded-lg bg-gray-100 px-8 py-4 text-center text-base font-semibold text-gray-800 outline-none 
                        transition duration-100 hover:bg-gray-200">
                        <svg class="w-[20px] h-[20px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span>About Me</span>
                    </router-link>
                </div>
            </div>

            <!-- Social Media -->
            <div></div>
        </div>
        <div class="h-auto overflow-hidden rounded-lg bg-gray-800 xl:w-1/2">
            <img :src="HeroBanner" loading="lazy" alt="Ariel Batoon" class="h-full w-full object-cover object-top" />
        </div>
    </section>
</template>