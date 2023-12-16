<script setup>
import { ref, computed, onMounted } from 'vue';
import { useProjectData } from '@/composables/useProjects';
import MainLayout from '@/components/MainLayout.vue';

const pageTitle = 'Projects';
const { data: projectData } = useProjectData();
const data = ref(null);
const selectedFilter = ref('All');


const fetchData = async () => {
  data.value = projectData.value;
};

const setFilter = (filter) => {
  selectedFilter.value = filter;

  console.log(selectedFilter.value);
};

const computedFilterCategory = computed(() => {
  if (selectedFilter.value === 'All') {
    return data.value;
  } else {
    return data.value.filter(project => project.category === selectedFilter.value);
  }
});

onMounted(() => {
  fetchData();
});
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
    <section class="bg-gray-100">
      <div class="mx-auto max-w-screen-lg px-4 pt-16 pb-36">

        <h1 class="text-5xl font-bold text-gray-800 lg:text-7xl w-full lg:mb-16">Projects.</h1>

        <!-- Filter -->
        <div class="mb-7">
          <ul class="flex flex-wrap items-center mt-8 lg:mt-14 gap-x-1.5 gap-y-4 md:gap-x-1 lg:mt-16 lg:gap-2">
            <li>
              <button @click="setFilter('All')"
                class="inline-block rounded-full px-5 py-1.5 text-md transition bg-white text-gray-700 duration-200 ease-in-out hover:bg-gray-50/95"
                :class="selectedFilter === 'All' ? 'font-medium' : 'font-normal'"
                href="#">All Projects
              </button>
            </li>
            <li>
              <button @click="setFilter('Web Development')"
                class="inline-block rounded-full px-5 py-1.5 text-md transition bg-white text-gray-700 duration-200 ease-in-out hover:bg-gray-50/95"
                :class="selectedFilter === 'Web Development' ? 'font-medium' : 'font-normal'"
                href="#">Web Development
              </button>
            </li>
            <li>
              <button @click="setFilter('Application')"
              :class="selectedFilter === 'Application' ? 'font-medium' : 'font-normal'"
                class="inline-block rounded-full px-5 py-1.5 text-md transition bg-white text-gray-700 duration-200 ease-in-out hover:bg-gray-50/95"
                href="#">Application
              </button>
            </li>
          </ul>

        </div>

        <!-- Project List -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 xl:gap-8">
          <a :href="project.path" v-for="project in computedFilterCategory" :key="project.id"
            class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
            <img :src="project.thumbnail" loading="lazy" alt="Photo by Minh Pham"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
            </div>

            <span
              class="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">{{
                project.title }}</span>
          </a>
        </div>

      </div>
    </section>
  </MainLayout>
</template>