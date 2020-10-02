<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            outlined
            label="Quote"
            v-model="quote"
            v-on:keydown.enter="addQuote()"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <app-quotes-list />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import appQuotesList from "@/views/QuotesList";

export default {
  name: "Welcome",
  components: {
    appQuotesList
  },
  data: () => ({
    quote: undefined
  }),
  methods: {
    addQuote() {
      this.$store.dispatch("addQuote", this.quote);
      this.quote = undefined;
    }
  }
};
</script>

<style scoped></style>
