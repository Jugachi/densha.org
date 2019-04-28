<template>
    <v-layout row wrap justify-center>
        <v-flex xs8 md2>
            <lazy-component>
                <v-img :src="image" :class="_class"></v-img>
            </lazy-component>
        </v-flex>
        <v-flex xs8 md6 pl-2>
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
