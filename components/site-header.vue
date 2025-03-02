<template>
    <header class="flex flex-col flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full">
        <div class="bg-primary-600 h-2 w-full">&nbsp;</div>
        <nav
            class="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full justify-center items-center my-2 px-4 md:px-6 lg:px-8 mx-auto">

            <div class="lg:col-span-3 flex items-center">
                <a class="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                    href="/" aria-label="Preline">
                    <img src="/logo100.webp" class="h-16 lg:h-28 lg:p-2 [transform:translateZ(0)]" alt="Ninpa" />
                </a>
            </div>

            <!-- Button Group -->
            <div class="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3 ">

                <NuxtLink to="/notifications" title="Notifications"
                    class="flex shrink-0 justify-center items-center gap-2 size-[38px] text-sm font-medium rounded-lg border border-transparent bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none">

                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);">
                        <path
                            d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z">
                        </path>
                    </svg>
                </NuxtLink>
                <NuxtLink to="/contact" title="Contact Us"
                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-secondary-400 text-black hover:bg-secondary-500 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none">
                    Contact
                </NuxtLink>

                <div class="lg:hidden">
                    <button type="button"
                        class="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                        id="hs-navbar-hcail-collapse" aria-expanded="false" aria-controls="hs-navbar-hcail"
                        aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-hcail">
                        <svg class="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <line x1="3" x2="21" y1="12" y2="12" />
                            <line x1="3" x2="21" y1="18" y2="18" />
                        </svg>
                        <svg class="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <!-- End Button Group -->

            <div id="hs-navbar-hcail"
                class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6"
                aria-labelledby="hs-navbar-hcail-collapse">
                <div
                    class="flex flex-col gap-y-4 gap-x-0 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7">
                    <div>
                        <NuxtLink
                            class="mainnav relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-0 before:h-1 before:bg-primary-400 hover:before:w-full transition-all duration-300"
                            to="/">
                            Home
                        </NuxtLink>
                    </div>
                    <div>
                        <NuxtLink
                            class="mainnav relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-0 before:h-1 before:bg-primary-400 hover:before:w-full transition-all duration-300"
                            to="/about">
                            About Us
                        </NuxtLink>
                    </div>
                    <div>
                        <NuxtLink
                            class="mainnav relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-0 before:h-1 before:bg-primary-400 hover:before:w-full transition-all duration-300"
                            to="/activities">
                            Activities
                        </NuxtLink>
                    </div>
                    <div>
                        <NuxtLink
                            class="mainnav relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-0 before:h-1 before:bg-primary-400 hover:before:w-full transition-all duration-300"
                            to="/blog">
                            Blog Articles
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.router-link-active::before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #60a5fa;
    inset-inline-start: 0px;
}

.router-link-active {
    position: relative;
    display: inline-block;
}
</style>