<template>
    <Carousel :pictures="pictures"></Carousel>
</template>

<script setup>
import { Carousel } from 'flowbite-vue'

const pictures = [
    {
        'src': 'https://raw.githubusercontent.com/PasyaMulfi/websitekickavenue/main/src/assets/images/disc.jpg',
        'alt': 'Picture 1',
    },
    {
        'src': 'https://raw.githubusercontent.com/PasyaMulfi/websitekickavenue/main/src/assets/images/kids.jpg',
        'alt': 'Picture 2',
    },
    {
        'src': 'https://raw.githubusercontent.com/PasyaMulfi/websitekickavenue/main/src/assets/images/under.jpg',
        'alt': 'Picture 3',
    },
    {
        'src': 'https://raw.githubusercontent.com/PasyaMulfi/websitekickavenue/main/src/assets/images/kids.jpg',
        'alt': 'Picture 4',
    },
]
</script>