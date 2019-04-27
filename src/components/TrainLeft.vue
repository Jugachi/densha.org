<template>
    <v-layout row wrap justify-center>
        <v-flex xs8 md2>
            <v-img :src="image"></v-img>
        </v-flex>
        <v-flex xs8 md6 pl-2>
            <h2>{{ title }}</h2>
            <div v-html="text"></div>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  props: ['image', 'title', 'text'],
};
</script>
