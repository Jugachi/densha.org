<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/DDD_Logo.png')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to
          <span class="font-weight-light">Densha De D</span>
        </h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with the Densha de D Community
          <br>please join our
          <a href="http://discord.densha.org" target="_blank">Discord Server</a>
        </p>
      </v-flex>
      </v-layout>
      <v-layout>
        <v-flex text-xs-center>
        <h1 class="display-2 font-weight-bold mb-3">
          This website is still work in progress.
        </h1>
        <p class="subheading font-weight-regular">
          We still need to translate a lot of text from Japanese to English.
          <br>
          Our translator is really busy and this will take some time.
          <br>
          Sorry for the inconvenience
        </p>
      </v-flex>
      </v-layout>

      <v-flex mb-5 xs12>
        <v-layout justify-center>
          <a
          class="twitter-timeline"
          href="https://twitter.com/jinushi?ref_src=twsrc%5Etfw"
          target="_blank"
        >Tweets by jinushi </a>
        </v-layout>


      </v-flex>
  </v-container>
</template>
