<template>
    <div class="">
        <div class="pt-20 container mx-auto px-4 bg ">
            <h2 class="text-center text-3xl font-bold">Category</h2>
            <div class="grid mt-10 grid-cols-4 gap-4">
                <div v-for="category in getAllCategory.data.slice(0,12)" :key="category.id">

                    <a href="#"
                        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            :src="category.banner" alt="">
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ category.name
                            }}</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('category', ['getAllCategory']),
    },
    methods: {
        ...mapActions('category', ['fetchCategory']),
    },
    created() {
        this.fetchCategory();
    },
};
</script>``