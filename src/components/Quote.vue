<template>
  <v-app-bar class="mb-3 blue-grey">
    {{ item.text }}
    <v-spacer />
    <v-btn v-if="showButton" icon @click="emitQuote()">
      <v-icon color="red">mdi-close</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Quote",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    },
    showButton: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  methods: {
    emitQuote() {
      this.$emit("deleteQuote", this.item);
    }
  }
};
</script>

<style scoped></style>
