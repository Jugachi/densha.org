<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-card-title class="headline">External Link Confirmation</v-card-title>
      <v-card-text>
        You are about to visit an external website. You might need a VPN to access it. Do you want to proceed?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="confirm">Yes</v-btn>
        <v-btn color="red darken-1" text @click="dialog = false">No</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    confirm() {
      window.open(this.link, "_blank");
      this.dialog = false;
    }
  }
};
</script>