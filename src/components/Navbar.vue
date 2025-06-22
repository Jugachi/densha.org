<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app-bar dark app>
    <!-- Left Logo -->
    <!-- Left Logo for Desktop -->
    <v-img
      src="/src/assets/DDD_Logo.png"
      max-height="50"
      max-width="150"
      class="ml-2 d-none d-sm-flex"
    />

      <!-- Mobile: Menu Icon Left -->
    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-sm-none" />


      <!-- Mobile: Logo on Right -->
    <v-img
      src="/src/assets/DDD_Logo.png"
      max-height="50"
      max-width="150"
      class="mr-2 d-sm-none"
    />

    <v-spacer/>

    <v-list-item class="mr-2 d-sm-none ml-auto">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" text>
            {{ getLanguageTag() }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)">
            {{ lang.name }}
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item>


    <!-- Desktop Menu -->
    <v-toolbar-items class="d-none d-sm-flex">
      <v-btn @click="$router.push('/')" rounded="0" text>
        <v-icon start icon="fas fa-home" />
        Home
      </v-btn>

      <!-- Games Menu -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" rounded="0" text>
            <v-icon start icon="fas fa-train" />
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

    </v-toolbar-items>

    <v-spacer />

    <!-- Language & External Buttons -->
    <v-toolbar-items class="d-none d-sm-flex">
      <v-btn @click="goToExternal('https://x.com/jinushi')" text>
        Jinushi on
        <v-icon icon="fab fa-x-twitter" class="ml-2" />
      </v-btn>
      <v-btn @click="goToExternal('https://discord.gg/HQpWW2v')" text>
        Discord
        <v-icon icon="fab fa-discord" class="ml-2" />
      </v-btn>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" text>
            {{ getLanguageTag() }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)">
            {{ lang.name }}
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>

  <!-- Mobile Drawer -->
  <v-navigation-drawer v-model="drawer" app temporary class="d-sm-none">



    <v-list style="padding: 1rem;">

      <v-list-item @click="$router.push('/')">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-subheader>Games</v-subheader>
      <v-list-item
        v-for="game in games"
        :key="game.name"
        @click="$router.push(game.route)"
      >
        <v-list-item-title>{{ game.name }}</v-list-item-title>
      </v-list-item>
      <v-subheader>Buy the Games</v-subheader>
      <v-list-item
        v-for="site in buyGames"
        :key="site.name"
        @click="confirmNavigation(site.link)"
      >
        <v-list-item-title>{{ site.name }}</v-list-item-title>
      </v-list-item>
    </v-list>


    <v-list-item>
      <v-btn @click="goToExternal('https://x.com/jinushi')" text>
        Jinushi on
        <v-icon icon="fab fa-x-twitter" class="ml-2" />
      </v-btn>
    </v-list-item>

    <v-list-item>
      <v-btn @click="goToExternal('https://discord.gg/HQpWW2v')" text>
        Discord
        <v-icon icon="fab fa-discord" class="ml-2" />
      </v-btn>
    </v-list-item>
  </v-navigation-drawer>



  <!-- External Link Confirmation Dialog -->
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
</template>


<script>

import variables from "@/locales/variables.json";

export default {
  data() {
    return {
      drawer: false,
      currentIcon: "fas fa-home",
      games: [
        { name: "Lightning Stage", route: "/games/lightning" },
        { name: "Burning Stage", route: "/games/burning" },
        { name: "Climax Stage", route: "/games/climax" },
        { name: "Rising Stage", route: "/games/rising" },
        { name: "Shining Stage", route: "/games/shining" },
        { name: "Gleaming Stage", route: "/games/gleaming" },
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
