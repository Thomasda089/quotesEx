<template>
  <v-app>
    <app-header />
    <router-view />
  </v-app>
</template>

<script>
import appHeader from "@/views/Header";

export default {
  name: "app",
  components: {
    appHeader
  }
};
</script>
