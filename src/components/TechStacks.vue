<script setup>
import PHPLogo from '@/assets/techstacks/PHP-logo.png';
import JSLogo from '@/assets/techstacks/JavaScript-logo.png';

</script>
<template>
    <section class="bg-gray-100">
        <div class="mx-auto max-w-screen-xl px-4 py-6">
            <div class="flex mb-10">
                <h3 class="bg-black text-white py-2 px-5">Technology Stack</h3>
            </div>

            <div class="grid grid-cols-4 gap-4 w-1/2">
                <div class="bg-white shadow rounded-lg p-4 flex items-center">
                    <img class="object-fit object-center" :src="PHPLogo" alt="PHP" />
                </div>
                <div class="bg-white shadow rounded-lg p-4 flex items-center justify-center">
                    <img class="object-fit object-center h-14" :src="JSLogo" alt="Javascript" />
                </div>
                <div class="bg-white shadow rounded-lg p-4 flex items-center">
                    <img class="object-fit object-center" :src="PHPLogo" alt="PHP" />
                </div>
                <div class="bg-white shadow rounded-lg p-4 flex items-center">
                    <img class="object-fit object-center" :src="PHPLogo" alt="PHP" />
                </div>
                <div class="bg-white shadow rounded-lg p-4 flex items-center">
                    <img class="object-fit object-center" :src="PHPLogo" alt="PHP" />
                </div>
                <div class="bg-white shadow rounded-lg p-4 flex items-center">
                    <img class="object-fit object-center" :src="PHPLogo" alt="PHP" />
                </div>
            </div>
        </div>
    </section>
</template>