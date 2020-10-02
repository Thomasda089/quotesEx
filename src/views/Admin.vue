<template>
  <v-container>
    <v-row>
      <v-col>
        <app-quotes-list show-button />
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>
            <v-color-picker v-model="headerColor" />
            <v-text-field
              v-for="(item, index) in design"
              :key="index"
              dense
              outlined
              :label="item.name"
              v-model="item.color"
              v-on:keydown.enter="setColor()"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import appQuotesList from "@/views/QuotesList";

export default {
  name: "Admin",
  components: {
    appQuotesList
  },
  data: () => ({
    headerColor: { hex: 0 },
    quote: undefined
  }),
  computed: {
    design() {
      return this.$store.getters.design;
    }
  },
  methods: {
    addQuote() {
      this.$store.dispatch("addQuote", this.quote);
      this.quote = undefined;
    },
    setColor() {
      this.$store.dispatch("setColor", this.headerColor.hex);
    }
  }
};
</script>

<style scoped></style>
