<template>
  <v-card tile flat outlined>
    <v-card-title>Quotes</v-card-title>
    <v-card-text>
      <app-quote
        v-for="quote in quotes"
        :item="quote"
        :key="quote.id"
        v-on:deleteQuote="deleteQuote($event)"
        :show-button="showButton"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import appQuote from "@/components/Quote";

export default {
  name: "QuotesList",
  components: {
    appQuote
  },
  props: {
    showButton: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data: () => ({}),
  computed: {
    quotes() {
      return this.$store.getters.quotes;
    }
  },
  methods: {
    deleteQuote(quote) {
      const record = this.quotes.find(element => element.id === quote.id);
      if (record) {
        const index = this.quotes.indexOf(record);
        this.$store.dispatch("removeQuote", index);
      } else {
        console.warn("Quote N/A", record);
      }
    }
  }
};
</script>

<style scoped></style>
