<template>
  <div>
    <v-toolbar :style="`background-color:${header.color}`">
      <v-toolbar-title>{{ header.title }}</v-toolbar-title></v-toolbar
    >
    <v-tabs align-with-title>
      <v-tab
        v-for="(route, index) in $router.options.routes"
        :to="route.path"
        :key="index"
        >{{ route.name }}</v-tab
      >
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    foo: "red"
  }),
  computed: {
    header() {
      return this.$store.getters.design.header;
    }
  }
};
</script>

<style scoped></style>
