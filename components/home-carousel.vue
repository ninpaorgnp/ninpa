<template>
    <!-- Slider -->
    <div data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "dotsItemClasses": "hs-carousel-active:bg-secondary-500 hs-carousel-active:border-secondary-500 size-3 border border-gray-400 rounded-full cursor-pointer",
    "isAutoPlay": true,
    "isDraggable": true
  }' class="relative">
        <div class="hs-carousel relative overflow-hidden w-full min-h-[550px]  rounded-none lg:rounded-lg">
            <div
                class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                <!-- First slide -->
                <div class="hs-carousel-slide">
                    <div class="flex justify-center h-full relative">
                        <img src="/slides/s1.webp" alt="Ninpa" class="h-[550px] w-auto object-cover">
                        <!-- Simple overlay -->
                        <!-- <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> -->
                        <!-- Static captions with CSS animations -->
                        <!-- <div
                            class="absolute inset-0 flex flex-col justify-center items-center p-6 text-white bg-slate-400">
                            <h2 class="text-3xl md:text-4xl font-bold mb-2 animate-caption-title">
                                First Slide Heading
                            </h2>
                            <p class="text-lg md:text-xl max-w-md text-center animate-caption-text">
                                Your engaging description for the first slide goes here.
                            </p>
                        </div> -->
                    </div>
                </div>

                <!-- Second slide -->
                <div class="hs-carousel-slide">
                    <div class="flex justify-center h-full relative">
                        <img src="/slides/ss2.webp" alt="Ninpa" class="h-[550px] w-auto object-cover">
                    </div>
                </div>

                <!-- Third slide -->
                <div class="hs-carousel-slide">
                    <div class="flex justify-center h-full relative">
                        <img src="/slides/ss3.webp" alt="Ninpa" class="h-[550px] w-auto object-cover">
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation buttons -->
        <button type="button"
            class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg z-10">
            <span class="text-2xl" aria-hidden="true">
                <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6"></path>
                </svg>
            </span>
            <span class="sr-only">Previous</span>
        </button>
        <button type="button"
            class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg z-10">
            <span class="sr-only">Next</span>
            <span class="text-2xl" aria-hidden="true">
                <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </span>
        </button>

        <!-- Dots pagination -->
        <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2 z-10"></div>
    </div>
    <!-- End Slider -->
</template>
