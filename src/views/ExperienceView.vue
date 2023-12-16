<script setup>
import MainLayout from '@/components/MainLayout.vue';

// Page Title of Views
const pageTitle = 'Experience'
</script>

<template>
    <MainLayout :pageTitle="pageTitle">
        <!-- About Text -->
        <section class="bg-gray-100">
            <div class="mx-auto max-w-screen-lg px-4 pt-16 pb-36">
                <h1 class="text-5xl font-bold text-gray-800 lg:text-7xl w-full mb-10">Experience.</h1>

                <div class="grid grid-cols-1 max-w-xl">
                    <div class="relative border p-6 rounded-md shadow-xl bg-white z-10">

                        <h1 class="font-semibold text-xl">Jr. Web Developer</h1>
                        <p class="text-gray-500">GrowthOps Asia</p>
                        <p class="text-gray-600 my-4">
                            Optimize web applications, collaborate on coding and testing for API integration, assess UI/UX
                            feasibility, ensure compatibility, and provide technical support for frontend and backend
                            issues.
                        </p>
                        <p class="text-gray-400 text-sm mt-4">November 2022 - Present</p>
                    </div>
                    <div class="divider-container flex flex-col items-center -mt-2">
                        <div class="w-4 h-4 bg-black rounded-full relative z-10">
                            <div class="w-4 h-4 bg-black rounded-full relative z-10 animate-ping"></div>
                        </div>
                        <div class="w-1 h-24 bg-gray-200 rounded-full -mt-2"></div>
                    </div>

                    <div class="relative border p-6 rounded-md shadow-xl bg-white z-10">
                        <h1 class="font-semibold text-xl">TheWebsiteBuilders</h1>
                        <p class="text-gray-500">Project Manager / Web Developer - Freelance</p>
                        <p class="text-gray-600 my-4">
                            Effectively manage projects as a Project Manager, conduct Quality Assurance on deliverables
                            before client submission, and maintain consistent communication and alignment with clients.
                        </p>
                        <p class="text-gray-400 text-sm mt-4">February 2023 - Ended</p>
                    </div>

                    <div class="divider-container flex flex-col items-center -mt-2">
                        <div class="w-4 h-4 bg-black rounded-full relative z-10">
                            <div class="w-4 h-4 bg-black rounded-full relative z-10 animate-ping"></div>
                        </div>
                        <div class="w-1 h-24 bg-gray-200 rounded-full -mt-2"></div>
                    </div>
                    <div class="relative experience-card border p-6 rounded-md shadow-xl bg-white z-10">
                        <h1 class="font-semibold text-xl">College</h1>
                        <p class="text-gray-500">Cordova Public College</p>
                        <p class="text-gray-600 my-4">Bachelor's degree in Information Technology.</p>
                    </div>
                </div>
            </div>
        </section>
</MainLayout>
</template>