<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      persistent
      app
      disable-resize-watcher
      clipped
    >
    <v-list-tile to="/">
              <v-list-tile-title class="font-weight-light text-uppercase">
                Home
              </v-list-tile-title>
            </v-list-tile>
    <v-list-group>
      <v-list-tile slot="activator">
              <v-list-tile-title class="font-weight-light text-uppercase">
                Games
              </v-list-tile-title>
            </v-list-tile>
      <v-list-tile to="/lightning">
              <v-list-tile-title class="font-weight-light text-uppercase">
                Lightning Stage
              </v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/burning">
              <v-list-tile-title class="font-weight-light text-uppercase">
                Burning Stage
              </v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/climax">
              <v-list-tile-title class="font-weight-light text-uppercase">
                Climax Stage
              </v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/rising">
              <v-list-tile-title class="font-weight-light text-uppercase">
                Rising Stage
              </v-list-tile-title>
            </v-list-tile>
    </v-list-group>
    <v-list-group>
      <v-list-tile slot="activator">
              <v-list-tile-title class="font-weight-light text-uppercase">
                Get the game
              </v-list-tile-title>
            </v-list-tile>
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
    </v-list-group>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-title>
        <v-img
          :src="require('@/assets/DDD_Logo.png')"
          class="mr-2"
          contain
          width="150"
        ></v-img>
      </v-toolbar-title>
      <template>
        <v-toolbar-items>
          <v-btn flat class="headline font-weight-light text-uppercase hidden-sm-and-down" to="/">Home</v-btn>
        </v-toolbar-items>
        <!-- Games -->
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-toolbar-items v-on="on">
              <v-btn flat class="headline font-weight-light text-uppercase hidden-sm-and-down">
                Games
                <v-icon right dark>fas fa-caret-down</v-icon>
              </v-btn>
            </v-toolbar-items>
          </template>

          <v-list>
            <v-list-tile to="/lightning">
              <v-list-tile-title class="font-weight-light text-uppercase">
                Lightning Stage
              </v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/burning">
              <v-list-tile-title class="font-weight-light text-uppercase">
                Burning Stage
              </v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/climax">
              <v-list-tile-title class="font-weight-light text-uppercase">
                Climax Stage
              </v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/rising">
              <v-list-tile-title class="font-weight-light text-uppercase">
                Rising Stage
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <!-- Get The Game -->
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-toolbar-items v-on="on">
              <v-btn flat class="headline font-weight-light text-uppercase hidden-sm-and-down">
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
      <v-btn flat href="http://discord.densha.org" target="_blank">
        <span class="mr-2">Discord</span>
        <v-icon>fab fa-discord</v-icon>
      </v-btn>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
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
      drawer: false,
    };
  },
};
</script>
