<template>
  <article class="layout">
    <header class="header">
      <SvgIcon class="header__logo" :icon="icons['logo-short']" />
      <div class="header__contact">
        <a class="header__contact-link" href="tel:0800309988">
          <SvgIcon class="header__contact-img" :icon="icons['phone-line']" />
          0800309988
        </a>
      </div>
    </header>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Component({
  components: {
    SvgIcon,
  },
})
export default class CheckoutComponent extends Vue {}
</script>

<style lang="scss" scoped></style>
