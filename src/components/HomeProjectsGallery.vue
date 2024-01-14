<script setup>
import { ref, onMounted } from 'vue';
import SampleProject from '@/assets/SampleProject.png'
import { useProjectData } from '@/composables/useProjects';

const { data: projectData } = useProjectData();
const data = ref(null);

const fetchData = async () => {
  data.value = projectData.value;

  console.log(data.value)
};

onMounted(() => {
  fetchData();
});
</script>

<template>
    <div class="bg-gray-100 py-6 sm:py-8 lg:py-48">
        <div
            class="mx-auto max-w-screen-lg px-4 py-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 lg:gap-8 mb-5">
            <div class="flex flex-col gap-2">
                <h2 class="text-4xl font-bold text-gray-800 lg:text-7xl w-full lg:w-1/2">Featured Projects</h2>
            </div>

            <router-link to="/projects"
                class="gap-3 bg-white shadow py-5 px-8 rounded text-base font-medium text-gray-800 hidden lg:flex">
                <svg class="w-[20px] h-[20px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                </svg>
                <span>View More Projects</span>
            </router-link>

            <router-link to="/projects" class="flex hover:border-b pb-4 border-gray-800 gap-3 text-base font-medium text-gray-800 block lg:hidden">
                <svg class="w-[20px] h-[20px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                </svg>
                <span>View More Projects</span>
            </router-link>
        </div>

        <!-- Project Image Gallery -->
        <section class="mx-auto max-w-screen-lg px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
                <!-- Featured Project 1 -->
                <!-- image - start -->
                <a href="https://expensetracker-ariel.netlify.app/"
                    class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                    <img src="https://firebasestorage.googleapis.com/v0/b/project-storage-d94fd.appspot.com/o/portfolio%2Fexpense-tracker.png?alt=media&token=36853b99-6dae-4f4a-97c7-8d628c09c3e0" loading="lazy" alt="Photo by Minh Pham"
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" 
                        />

                    <div
                        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                    </div>

                    <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">01. Expense Tracker Application</span>
                </a>
                <!-- image - end -->

                <!-- Featured Project 2 -->
                <!-- image - start -->
                <a href="https://todoapp-ariel.netlify.app/"
                    class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                    <img src="https://firebasestorage.googleapis.com/v0/b/project-storage-d94fd.appspot.com/o/portfolio%2Ftodoapp-project-mockup.png?alt=media&token=fe3be453-65e9-49bd-8eb8-6239e1295fe3" loading="lazy" alt="Photo by Magicle"
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div
                        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                    </div>

                    <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">02. Simple ToDo Application</span>
                </a>
                <!-- image - end -->

                <!-- Featured Project 3 -->
                <!-- image - start -->
                <a href="https://westislanddigital.com/"
                    class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                    <img src="https://firebasestorage.googleapis.com/v0/b/project-storage-d94fd.appspot.com/o/portfolio%2Fwest-island-digital-project.png?alt=media&token=93c91612-20d6-4be1-b4bd-551fc4aee936" loading="lazy" alt="Photo by Martin Sanchez"
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div
                        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                    </div>

                    <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">03. West Island Digital</span>
                </a>
                <!-- image - end -->

                <!-- Featured Project 4 -->
                <!-- image - start -->
                <a href="https://solafinance.com.au/"
                    class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                    <img src="https://firebasestorage.googleapis.com/v0/b/project-storage-d94fd.appspot.com/o/portfolio%2Fmodern-laptop-mockup-with-airpods.png?alt=media&token=61f8be7c-222f-4ff3-9f21-e4681202f249" loading="lazy" alt="Photo by Lorenzo Herrera"
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div
                        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                    </div>

                    <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">04. Sola Finance</span>
                </a>
                <!-- image - end -->
            </div>
        </section>
    </div>
</template>