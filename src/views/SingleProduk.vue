<template>
    
    
    
    <div v-for="gitems in getProdukId">
        {{ gitems.name }}
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    props: ['slug'],
    computed: {
        ...mapState('produk', ['getProdukId']),
    },
    mounted() {
        return this.$store.dispatch('produk/fetchProdukid', this.slug)
    }
};
</script>