<template>
  <article class="layout">
    <CheckoutHeaderComponent></CheckoutHeaderComponent>
    <div class="checkout__w">
      <CheckoutInputComponent></CheckoutInputComponent>
    </div>
    <CheckoutFooterComponent></CheckoutFooterComponent>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import CheckoutHeaderComponent from "@/components/checkout/CheckoutHeader.vue";
import CheckoutFooterComponent from "@/components/checkout/CheckoutFooter.vue";
import CheckoutInputComponent from "@/components/checkout/CheckoutInput.vue";

@Component({
  components: {
    SvgIcon,
    CheckoutHeaderComponent,
    CheckoutFooterComponent,
    CheckoutInputComponent,
  },
})
export default class CheckoutComponent extends Vue {}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;

  @include flex-container(column, center);
  gap: 64px;

  padding: 0 64px;
}

.checkout__w {
  background-color: white;
  padding: 32px;
  border-radius: 32px;
}
</style>
