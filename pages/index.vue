<script setup lang="ts">
import ActivityHero from '~/components/activity-hero.vue';

</script>

<template>

    <Head>
        <Title>Home Page | The Nepal Indigenous Nationalities Preservation Association</Title>
        <Meta name="description"
            content="The Nepal Indigenous Nationalities Preservation Association (NINPA) is an organization established in 2003, dedicated to the preservation and promotion of the cultural, social, and economic rights of indigenous communities in Nepal" />
    </Head>
    <div class="max-w-7xl w-full mx-auto">
        <HomeCarousel />
        <div class="my-16 px-6 lg:px-0">
            <AboutHero />
        </div>

        <div class="my-16 px-6 lg:px-0">
            <ActivityHero />
        </div>
    </div>
</template>