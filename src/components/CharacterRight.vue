<template>
    <v-layout row wrap justify-center>
        <v-flex xs8 md2 order-md2>
            <v-img :src="image" :class="_class"></v-img>
        </v-flex>
        <v-flex xs8 md6 order-xs2 order-md1 text-xs-right>
            <h2>{{ title }}</h2>
            <div v-html="text"></div>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  props: ['image', '_class', 'title', 'text'],
};
</script>
