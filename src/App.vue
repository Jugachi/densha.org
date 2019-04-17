<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title>
        <v-img :src="require('@/assets/DDD_Logo.png')" class="mr-2" contain width="150"></v-img>
      </v-toolbar-title>
      <!-- <v-toolbar-title class="headline text-uppercase">
        <span>Densha </span>
        <span class="font-weight-light">De D</span>
      </v-toolbar-title>-->
      <template>
        <v-toolbar-items>
          <v-btn flat class="headline font-weight-light text-uppercase" to="/">Home</v-btn>
        </v-toolbar-items>
        <!-- Games -->
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-toolbar-items v-on="on">
              <v-btn flat class="headline font-weight-light text-uppercase">
                Games
                <v-icon right dark>fas fa-caret-down</v-icon>
              </v-btn>
            </v-toolbar-items>
          </template>

          <v-list>
            <v-list-tile to="/lightning">
              <v-list-tile-title class="font-weight-light text-uppercase">Lightning Stage</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/burning">
              <v-list-tile-title class="font-weight-light text-uppercase">Burning Stage</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/climax">
              <v-list-tile-title class="font-weight-light text-uppercase">Climax Stage</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/rising">
              <v-list-tile-title class="font-weight-light text-uppercase">Rising Stage</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <!-- Get The Game -->
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-toolbar-items v-on="on">
              <v-btn flat class="headline font-weight-light text-uppercase">
                Get The Game
                <v-icon right dark>fas fa-caret-down</v-icon>
              </v-btn>
            </v-toolbar-items>
          </template>

          <v-list>
            <v-list-tile
              href="https://www.dlsite.com/eng/work/=/product_id/RE217271.html"
              target="_blank"
            >
              <v-list-tile-title class="font-weight-light text-uppercase">Lightning Stage</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              href="https://www.dlsite.com/eng/work/=/product_id/RE227913.html"
              target="_blank"
            >
              <v-list-tile-title class="font-weight-light text-uppercase">Burning Stage</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              href="https://www.dlsite.com/eng/work/=/product_id/RE242866.html"
              target="_blank"
            >
              <v-list-tile-title class="font-weight-light text-uppercase">Climax Stage</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              href="https://www.dlsite.com/eng/work/=/product_id/RE242921.html"
              target="_blank"
            >
              <v-list-tile-title class="font-weight-light text-uppercase">Rising Stage</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </template>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
        <v-icon>fas fa-external-link-alt</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      //
    };
  },
};
</script>
