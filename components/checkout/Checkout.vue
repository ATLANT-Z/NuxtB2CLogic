<template>
  <article class="layout">
    <CheckoutHeaderComponent></CheckoutHeaderComponent>
    <main class="main-layout">
      <CheckoutContactsComponent></CheckoutContactsComponent>
      <CheckoutOrderComponent></CheckoutOrderComponent>
    </main>
    <CheckoutFooterComponent></CheckoutFooterComponent>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import CheckoutHeaderComponent from "@/components/checkout/CheckoutHeader.vue";
import CheckoutFooterComponent from "@/components/checkout/CheckoutFooter.vue";
import CheckoutContactsComponent from "@/components/checkout/checkout_body/CheckoutContacts.vue";
import CheckoutOrderComponent from "@/components/checkout/checkout_body/CheckoutOrder.vue";

@Component({
  components: {
    SvgIcon,
    CheckoutHeaderComponent,
    CheckoutFooterComponent,
    CheckoutContactsComponent,
    CheckoutOrderComponent,
  },
})
export default class CheckoutComponent extends Vue {}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;

  @include flex-container(column, center, center);
  gap: 64px;
}

.main-layout {
  @extend %width-main;

  @include flex-container(column, center);
  gap: 16px;

  padding: 0 16px;
}
</style>
