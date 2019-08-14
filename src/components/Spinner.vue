<template>
  <v-container>
    <v-row class="justify-center">
      <v-card class="mx-auto" width="20em">
        <v-img src="https://picsum.photos/200/300"></v-img>
        <v-card-title>{{this.$store.state.name}}</v-card-title>
        <v-card-text>I'm card text</v-card-text>
        <v-card-actions class="justify-center">
          <v-btn :href="this.$store.state.url" target="_blank">Website</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row class="justify-center mt-5">
      <v-divider />
    </v-row>
    <v-row class="justify-center mt-3">
      <v-btn>Spin!</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted: function() {
    this.$store.dispatch('search');
  }
};
</script>
