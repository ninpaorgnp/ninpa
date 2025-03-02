<template>
    <!-- Hero -->
    <div>
        <h1 class="block text-2xl w-full text-center text-gray-800  lg:text-4xl pb-8 dark:text-white">
            Nepal Indigenous Nationalities Preservation Association (NINPA)</h1>
        <!-- Grid -->
        <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div class="lg:col-span-3">

                <div class="text-lg text-gray-800 dark:text-neutral-400">
                    <div class="mb-3">NINPA is an organization established
                        in 2003, dedicated to the preservation and promotion of the cultural, social, and economic
                        rights of
                        indigenous communities in Nepal.</div>
                    <div class="mb-3"> NINPA works to safeguard the traditions, languages, and lifestyles
                        of Nepal's indigenous nationalities, advocating for their recognition and inclusion in national
                        development.</div>
                    <div class="mb-3">The association also focuses on biodiversity conservation and addressing climate
                        change, recognizing the vital role indigenous communities play in protecting ecosystems and
                        maintaining sustainable environmental practices.</div>
                    <div class="mb-3">NINPA aims to raise awareness about indigenous
                        issues and ensure their representation in policy-making and societal progress.</div>
                    <div class="mb-3">Through various
                        programs and initiatives, NINPA seeks to empower indigenous groups, protect biodiversity, and
                        preserve their unique heritage for future generations.</div>

                </div>

                <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">

                    <NuxtLink
                        class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-secondary-600 text-black hover:bg-secondary-700 focus:outline-none focus:bg-secondary-700 disabled:opacity-50 disabled:pointer-events-none"
                        href="/about" title="Learn more about NINPA">
                        Learn More
                    </NuxtLink>
                </div>

            </div>
            <!-- End Col -->

            <div class="lg:col-span-4 mt-10 lg:mt-0">
                <img class="w-full rounded-xl" src="/about.webp" alt="Ninpa">
            </div>
            <!-- End Col -->
        </div>
        <!-- End Grid -->
    </div>
    <!-- End Hero -->
</template>