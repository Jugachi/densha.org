<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app-bar dark>
    <v-img src = "/src/assets/DDD_Logo.png" max-height="50" max-width="150" />
    <v-btn @click="$router.push('/')">
      <v-icon start icon="fas fa-home"></v-icon>
      Home
    </v-btn>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          <v-icon start icon="fas fa-train"></v-icon>
          Games
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="game in games"
          :key="game.name"
          @click="$router.push(game.route)"
        >
          <v-list-item-title>{{ game.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          <v-icon start icon="fas fa-gamepad"></v-icon>
          Buy the games
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="site in buyGames"
          :key="site.name"
          @click="confirmNavigation(site.link)"
        >
          <v-list-item-title>{{ site.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          <v-icon start icon="fas fa-music"></v-icon>
          Buy the OST
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="site in buyOst"
          :key="site.name"
          @click="confirmNavigation(site.link)"
        >
          <v-list-item-title>{{ site.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <v-btn @click="goToExternal('https://x.com/jinushi')" class="d-flex align-center">
      Jinushi on
      <v-icon icon="fab fa-x-twitter" class="ml-2"/>
    </v-btn>
    <v-btn @click="goToExternal('https://discord.gg/HQpWW2v')" class="d-flex align-center">
      Discord
      <v-icon icon="fab fa-discord" class="ml-2"/>
    </v-btn>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          <!-- <v-icon start icon="fas fa-language"></v-icon> -->

          {{ getLanguageTag() }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)">
          {{ lang.name }}
        </v-list-item>
<!-- 
        <v-list-item @click="changeLanguage('en')">🇬🇧 English</v-list-item>
        <v-list-item @click="changeLanguage('jp')">🇯🇵 Japanese</v-list-item> -->
      </v-list>
    </v-menu>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="headline">External Link Confirmation</v-card-title>
        <v-card-text>
          You are about to visit an external website. You might need a VPN to access it. Do you want to proceed?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="goToExternal(externalLink)">Yes</v-btn>
          <v-btn color="red darken-1" text @click="dialog = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>

import variables from "@/locales/variables.json";

export default {
  data() {
    return {
      currentIcon: "fas fa-home",
      games: [
        { name: "Lightning Stage", route: "/games/lightning" },
        { name: "Burning Stage", route: "/games/burning" },
        { name: "Climax Stage", route: "/games/climax" },
        { name: "Rising Stage", route: "/games/rising" },
        { name: "Shining Stage", route: "/games/shining" },
        { name: "In Development Stage", route: "/games/dev" },
      ],
      buyGames: [
        { name: "Lightning Stage", link: "https://www.dlsite.com/home/dlaf/=/t/s/link/work/aid/DenshaOrg/locale/en_US/id/RJ217271.html/?locale=en_US" },
        { name: "Burning Stage", link: "https://www.dlsite.com/home/dlaf/=/t/s/link/work/aid/DenshaOrg/locale/en_US/id/RJ227913.html/?locale=en_US" },
        { name: "Climax Stage", link: "https://www.dlsite.com/home/dlaf/=/t/s/link/work/aid/DenshaOrg/locale/en_US/id/RJ242866.html/?locale=en_US" },
        { name: "Rising Stage", link: "https://www.dlsite.com/home/dlaf/=/t/s/link/work/aid/DenshaOrg/locale/en_US/id/RJ242921.html/?locale=en_US" },
        { name: "Shining Stage", link: "https://www.dlsite.com/home/dlaf/=/t/s/link/work/aid/DenshaOrg/locale/en_US/id/RJ293227.html/?locale=en_US" },
      ],
      buyOst: [
        { name: "Lightning Stage", link: "https://www.dlsite.com/home/dlaf/=/t/s/link/work/aid/DenshaOrg/locale/en_US/id/RJ217287.html/?locale=en_US" },
        { name: "Burning Stage", link: "https://www.dlsite.com/home/dlaf/=/t/s/link/work/aid/DenshaOrg/locale/en_US/id/RJ227915.html/?locale=en_US" },
        { name: "Climax Stage", link: "https://www.dlsite.com/home/dlaf/=/t/s/link/work/aid/DenshaOrg/locale/en_US/id/RJ242869.html/?locale=en_US" },
        { name: "Rising Stage", link: "https://www.dlsite.com/home/dlaf/=/t/s/link/work/aid/DenshaOrg/locale/en_US/id/RJ242924.html/?locale=en_US" },
        { name: "Shining Stage", link: "https://www.youtube.com/watch?v=fJqgXqwIlMs" },
      ],

      languages: variables.languages,

      dialog: false,
      externalLink: "",
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.updateIcon(to.name || 'home');
      },
    },
  },
  methods: {
    updateIcon(routeName) {
      if (routeName === "home") {
        this.currentIcon = "fas fa-home";
      } else if (routeName.startsWith("games")) {
        this.currentIcon = "fas fa-gamepad";
      } else if (routeName.startsWith("buy")) {
        this.currentIcon = "fas fa-shopping-cart";
      }
    },
    goToExternal(link) {
      window.open(link, "_blank");
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
    confirmNavigation(link) {
      this.externalLink = link;
      this.dialog = true;
    },
    getLanguageTag() {
      return variables.languages.find((lang) => lang.code === this.$i18n.locale).name;
    },
  },
};
</script>