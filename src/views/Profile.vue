<template>
    <!-- component -->
    <div class="flex items-center h-screen w-full justify-center">

        <div class="max-w-xs">
            <div class="bg-white shadow-xl rounded-lg py-3">
                <div class="photo-wrapper p-2">
                    <img class="w-32 h-32 rounded-full mx-auto " 
                        src="../assets/images/kickavenue.jpg" alt="Kick Avenue">
                </div>
                <div class="p-2">
                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{{ userInfo.name }}</h3>
                    <div class="text-center text-gray-400 text-xs font-semibold">
                        <p>{{ userInfo.email }}</p>
                        <p>{{ userInfo.id }}</p>    
                    </div>
                    <!-- <table class="text-xs my-3">
                        <tbody>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold">{{ userAddress.city }}, {{ userAddress.state }}</td>
                            </tr>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold"></td>
                            </tr>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold"></td>
                            </tr>
                        </tbody>
                    </table> -->
                    <p class="mt-8 text-lg font-medium"></p>
                <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                    <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                        <div class="flex w-full flex-col px-4 py-4">
                            <span class="font-semibold">{{ userAddress.address }}</span>
                            <span class="float-right text-gray-400">{{ userAddress.postal_code }}</span>
                            <p class="text-lg font-bold">{{ userAddress.city }}, {{ userAddress.state }}</p>
                        </div>
                    </div>
                </div>


                    <div class="text-center my-3">
                        <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                            href="#">View Profile</a>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
    computed: {
        ...mapState("auth", ["userAddress"]),
        ...mapState("auth", ["userInfo"])
    },
    methods: {
        ...mapActions('auth', ['getUserAddress']),
        ...mapActions('auth', ["getUserInfo"])
    },
    mounted() {
        this.getUserAddress();
        this.getUserInfo();
       
    }
};
</script>

