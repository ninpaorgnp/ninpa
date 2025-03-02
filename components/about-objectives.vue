<template>
    <!-- Icon Blocks -->
    <div>
        <!-- Grid -->
        <div class="grid md:grid-cols-2 gap-12">
            <div class="lg:w-3/4">
                <h2 class="text-3xl text-gray-800 lg:text-4xl">
                    The Major Activities of NINPA
                </h2>
                <p class="mt-3 text-gray-800">
                    NINPA is a nonprofit non partisan, national level social organization. Registered under Nepalese
                    Government and affiliated with social welfare council of Nepal and
                    accredited with Convention on Biological Diversity (CBD) in 2005 and World Intellectual Property
                    Organization (WIPO) in 2009.
                </p>
                <p class="mt-5">
                    <a class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                        href="/contact">
                        Contact us
                        <svg class="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </a>
                </p>
            </div>
            <!-- End Col -->
            <div class="space-y-6 lg:space-y-10">
                <!-- Icon Block -->
                <div class="flex gap-x-5 sm:gap-x-8" v-for="goal in goals" :key="goal.title">
                    <!-- Icon -->
                    <span
                        class="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
                        <img class="size-6" :src="`/svgs/${goal.icon}`" alt="Icon" />
                    </span>
                    <div class="grow">
                        <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                            {{ goal.title }}
                        </h3>
                        <p class="mt-1 text-gray-600">
                            {{ goal.text }}
                        </p>
                    </div>
                </div>
                <!-- End Icon Block -->

            </div>
            <!-- End Col -->
        </div>
        <!-- End Grid -->
    </div>
    <!-- End Icon Blocks -->
</template>

<script setup>
const goals = [
    {
        title: "To make the indigenous nationalities",
        text: "residing all over Nepal, self dependent by skill and personality development and organizing income generating program.",
        icon: "award.svg"
    },
    {
        title: "To raise awareness of the rights",
        text: "provided by the constitution and laws of the country to indigenous nationalities and help them gain access to these right.",
        icon: "pyramid.svg"
    },
    {
        title: "To preserve the Language",
        text: "culture, and Traditional knowledge",
        icon: "bookcontent.svg"
    },
    {
        title: "To work for intellectual property right",
        text: "and for the preservation of Bio Diversity.",
        icon: "brain.svg"
    },
    {
        title: "To work for the preservation of the environment",
        text: "and to make the indigenous nationalities aware of the importance of the environment.",
        icon: "leaf.svg"
    },
    {
        title: "Advocacy Program",
        text: "related with UN instrument",
        icon: "microphone.svg"
    },
    {
        title: "Capacity Building Program",
        text: "to the indigenous communities on the issues of UNDRIP, ILO 169, Traditional Knowledge and Biological Diversity.",
        icon: "userok.svg"
    },
    {
        title: "National and International level intervention",
        text: "on the CBD Processes and UN instrument",
        icon: "world.svg"
    },
    {
        title: "Awareness program of equitable sharing",
        text: "and sustainable use of natural resources.",
        icon: "candle.svg"
    },
    {
        title: "To raise issues of Trans national",
        text: "problem to international regime",
        icon: "world.svg"
    }
]
</script>