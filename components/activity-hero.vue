<template>
    <!-- Icon Blocks -->
    <div>
        <h1 class="block text-2xl w-full text-center text-gray-800  lg:text-4xl pb-8 dark:text-white">
            Our Latest Activities</h1>
        <p>Nepal Indigenous Nationalities Preservation Association (NINPA)
            Established in 2003, NINPA is committed to protecting and promoting the rights of Indigenous Peoples in
            Nepal while enhancing their capacities. Our mission also focuses on conserving biological diversity and
            addressing climate change challenges through community-driven initiatives.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 mt-8">
            <!-- Card -->
            <a v-for="activity of activites" :key="activity.text"
                class="group flex gap-y-6 size-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-5"
                href="#" :title="activity.title">
                <img :src="`/${activity.year}.png`" alt="Image" class="size-12 mr-2" />

                <div>
                    <div>
                        <h3 class="block text-gray-800 text-xl mb-1">{{ activity.title }}</h3>
                        <p class="text-gray-600">{{ activity.text }}</p>
                    </div>

                    <div class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
                        Learn more
                        <svg class="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </div>
                </div>
            </a>
            <!-- End Card -->

        </div>
    </div>
    <!-- End Icon Blocks -->
</template>

<script setup>
const activites = [
    {
        year: 2022,
        title: "Capacity",
        text: "Capacity building and awareness programs with Indigenous communities; Communication, Education, and Public Awareness (CEPA) initiatives for Indigenous youth; Income-generating programs for the poorest of the poor, supporting biodiversity conservation."
    },
    {
        year: 2023,
        title: "Empowerment",
        text: "Continued awareness and advocacy programs to empower Indigenous Peoples; Organic agriculture training for Indigenous communities in the Himalayan region."
    },
    {
        year: 2024,
        title: "Resilience",
        text: "Strengthening traditional knowledge and biodiversity conservation efforts; Climate change awareness programs in the Himalayan region to enhance Indigenous resilience."
    }
]
</script>


✅