<template>
  <div style="width: 66%; margin: 1rem auto;">

    <v-tabs v-model="activeTab" grow :color="thisgame.color" style="margin-bottom: 1rem;">
      <v-tab value="game">Game</v-tab>
      <v-tab v-if="game.characters.length" value="characters">Characters</v-tab>
      <v-tab v-if="game.trains.length" value="trains">Trains</v-tab>
      <v-tab v-if="game.guides.length" value="guides">Guides</v-tab>
      <v-tab v-if="game.speedrunning.length" value="speedrunning">Speedrunning</v-tab>
      <div class="text-center">
          <v-btn :color="thisgame.color" style="height: 100%;" @click="buyGameDialog" variant="text">Buy the Game</v-btn>
      </div>
      <div class="text-center">
          <v-btn :color="thisgame.color" style="height: 100%;" @click="buyOstDialog" variant="text">Buy the Ost</v-btn>
      </div>
    </v-tabs>

    <v-tabs-window v-model="activeTab">
      <v-tabs-window-item value="game">
        <v-card class="d-flex flex-wrap flex-1-0 ma-2 pa-2" :style="cardStyle">
        <div class="text-left">
          <div class="d-flex">
            <img :src="gameImagePath" class="gameCover"/>
            <div>
              <h1>{{ game.name }}</h1>
              <p>{{ game.description }}</p>
              <v-responsive v-if="game.name === 'Gleaming Stage'" :aspect-ratio="16/9">
                <iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/n3Q6H3C-SJI" title="Densha de D: Gleaming Stage - Soundtrack" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </v-responsive>
            </div>
          </div>
        </div>
      </v-card>
      </v-tabs-window-item>

      <v-tabs-window-item value="characters">
        <v-card class="d-flex flex-wrap flex-1-0 ma-2 pa-2" :style="cardStyle">
        <div v-if="game.characters.length" class="text-center">
          <div v-for="(character, index) in game.characters" :key="index" class="d-flex">
            <img :src="getCharacterImagePath(character.name)" v-if="(index%2)===0" class="img"/>
            <div :class="[{'align-right': (index%2)!==0}, {'align-left': (index%2)===0}]">
              <h2>{{ character.alias }}</h2>
              <div v-for="(desc, index) in character.description" :key="index" v-html="desc"></div>
            </div>
            <img :src="getCharacterImagePath(character.name)" v-if="(index%2)!==0" class="img"/>
          </div>
        </div>
        </v-card>
      </v-tabs-window-item>

      <v-tabs-window-item value="trains">
        <v-card class="d-flex flex-wrap flex-1-0 ma-2 pa-2" :style="cardStyle">
            <div v-if="game.trains.length" class="text-center">
              <div v-for="(train, index) in game.trains" :key="index" class="d-flex">
                <v-responsive :aspect-ratio="4/3">
                  <img :src="getTrainImagePath(train.name)" v-if="(index%2)===0" class="img"/>
                </v-responsive>
                <div :class="[{'align-right': (index%2)!==0}, {'align-left': (index%2)===0}]">
                  <h2 style="margin: 1rem 1rem 1rem 1rem;">{{ train.alias }}</h2>
                  <div v-for="(desc, index) in train.description" :key="index" v-html="desc" style="margin: 1rem 1rem 1rem 1rem;"></div>
                </div>
                <v-responsive :aspect-ratio="4/3">
                  <img :src="getTrainImagePath(train.name)" v-if="(index%2)!==0" class="img"/>
                </v-responsive>
              </div>
            </div>
        </v-card>
      </v-tabs-window-item>

      <v-tabs-window-item value="guides">
          <v-card class="d-flex flex-wrap" :style="cardStyle">
            <div v-if="game.guides.length" class="text-center">
              <div v-for="(guide, index) in game.guides" :key="index" class="d-flex">
                <v-sheet class ="flex-1-0 ma-2 pa-2">
                    <v-responsive :aspect-ratio="16/9">
                      <iframe style="width: 100%; height: 100%;" :src="guide.link" title="Densha de D: Lightning Stage - How to beat Keisuke" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </v-responsive>
                </v-sheet>
                
                <v-sheet class="ma-2 pa-2 text-left">
                    <h2>{{ guide.title }}</h2>
                    <div v-for="(desc, index) in guide.description" :key="index" v-html="desc" style="margin: 0 0 1rem 0;"></div>
                </v-sheet>
              </div>
            </div>
          </v-card>
      </v-tabs-window-item>

      <v-tabs-window-item value="speedrunning">
        <v-card class="d-flex flex-wrap" :style="cardStyle">
          <div v-if="game.guides.length" class="text-center">
            <div v-for="(speedrun, index) in game.speedrunning" :key="index" class="d-flex">
                <v-sheet class ="flex-1-0 ma-2 pa-2">
                  <v-responsive :aspect-ratio="16/9">
                    <iframe style="width: 100%; height: 100%;" :src="speedrun.link" title="Densha de D: Lightning Stage - How to beat Keisuke" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </v-responsive>
                </v-sheet>
              
                <v-sheet class="ma-2 pa-2 text-left">
                    <h2>{{ speedrun.title }}</h2>
                    <div v-for="(desc, index) in speedrun.description" :key="index" v-html="desc" style="margin: 0 0 1rem 0;"></div>
                </v-sheet>
            </div>
          </div>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>

    <v-snackbar v-model="error" location="center" :timeout="2000" color="red" variant="outlined">
      {{ errorMessage }}
    </v-snackbar>

    <WarningDialog ref="warningDialog" :link="buyGameLink" />
  </div>
</template>

<script>
import WarningDialog from '@/components/WarningDialog.vue';
import variables from '@/locales/variables.json';

export default {
  
  data() {
    return {
      activeTab: 'game',
      game: {
        name: "",
        description: "",
        characters: [],
        trains: [],
        guides: [],
        speedrunning: [],
      },
      buyGameLink: "",
    

      error: false,
      errorMessage: "",
    };
  },
  components: {
    WarningDialog
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    gameImagePath() {
      return new URL(`/src/assets/covers/${this.$route.params.slug}_cover.jpg`, import.meta.url).href;
    },
    thisgame() {
      return variables.games.find(game => game.name.toLocaleLowerCase().includes(this.slug)) || {};
    },
    cardStyle() {
      return {
        border: `0.1rem solid ${this.thisgame.color}`
      };
    }
  },
  methods: {

    showError(message) {
      this.error = true;
      this.errorMessage = message;
    },

    getCharacterImagePath(name) {
      const formattedName = name.replace(/\s/g, "_").toLowerCase(); // replace every space with an underscore and convert to lowercase
      return new URL(`/src/assets/characters/${this.$route.params.slug}/${formattedName}.png`, import.meta.url).href;
    },
    getTrainImagePath(name) {
      const formattedName = name.replace(/\D/g, ""); // replace everything that is not a digit with an empty string
      return new URL(`/src/assets/trains/${this.$route.params.slug}/icon_${formattedName}.png`, import.meta.url).href;
    },
    fetchGameData(slug) {
      const gameData = this.$i18n.messages[this.$i18n.locale].games[slug];
      if (gameData) {
        this.game.name = gameData.name;
        this.game.description = gameData.description;
        this.game.characters = gameData.characters || [];
        this.game.trains = gameData.trains || [];
        this.game.guides = gameData.guides || [];
        this.game.speedrunning = gameData.speedrunning || [];
      }
    },
    buyGameDialog() {
      if (this.thisgame.gameLink) {
        this.buyGameLink = this.thisgame.gameLink;
        this.$refs.warningDialog.openDialog();
      } else {
        

        this.showError('No purchase link available for this game.');
      }
    },
    buyOstDialog() {
      if (this.thisgame.ostLink) {
        this.buyGameLink = this.thisgame.ostLink;
        this.$refs.warningDialog.openDialog();
      } else {
        

        this.showError('No purchase link available for this game.');
      }
    },
  },
  watch: {
    slug(newSlug) {
      this.fetchGameData(newSlug);
    },
    "$i18n.locale"() {
      this.fetchGameData(this.slug);
    }
  },
  mounted() {
    this.fetchGameData(this.slug);
  }
};
</script>

<style scoped>
.gameCover {
  width: 256px;
  height: 100%;
  margin: 10px;
}

.align-right {
  text-align: right;
  margin-right: 1rem;
}

.align-left {
  text-align: left;
  margin-left: 1rem;
}

.img {
  margin: 1rem;
  height: fit-content;
  width: fit-content;
}
</style>