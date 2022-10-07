<template>
  <div class="site-content">
    <SvgSprite/>
    <Header/>
    <main class="site-main">
      <Home/>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Home from '@components/home/Home.vue'
import {Component, Vue} from "~/tools/version-types";
import Header from "@components/common/header/Header.vue";
import Footer from "@components/common/footer/Footer.vue";
import SvgSprite from "@shared/components/svg/SvgSprite.vue";

@Component({
  components: {SvgSprite, Footer, Header, Home}
})
export default class IndexPageComponent extends Vue {
  mounted() {
    console.log(this.icons);
  }
}
</script>

<style lang="scss" scoped>
.site-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
