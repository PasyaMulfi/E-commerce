<template>
  <NavbarComponent />
  <router-view />
  <FooterComponent />
</template>

<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>