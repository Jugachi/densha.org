<template>
  <v-layout row wrap justify-center>
    <v-flex xs8 md2 order-md2>
      <lazy-component>
        <v-img :src="image" :class="_class" />
      </lazy-component>
    </v-flex>
    <v-flex xs8 md6 order-xs2 order-md1 text-xs-right pr-2>
      <h2>{{ title }}</h2>
      <div v-html="text" />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['image', 'class', 'title', 'text']
};
</script>
