<template>
 <Home/>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import Home from '@components/home/Home.vue'

@Component({
  components: { Home }
})
export default class IndexPageComponent extends Vue {

}
</script>
