<template>
  <div class="input">
    <input
      class="input__field"
      type="text"
      ref="input"
      @input="setInputValue"
      v-model.lazy="inputValue"
      :class="{ filled: inputValue.length }"
    />
    <span class="input__caption">Имя</span>
    <svg
      class="input__clear"
      v-show="inputValue.length"
      @click="clearInputValue"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.758265 11.2426L6.00091 6M11.2435 0.75736L6.00091 6M6.00091 6L0.758265 0.75736M6.00091 6L11.2435 11.2426"
        stroke="#7A7E80"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <!-- <SvgIcon
      class="input__clear"
      icon="cross"
      v-show="inputValue.length"
      @click="clearInputValue"
    /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SvgIcon from "@/_shared/components/svg/SvgIcon.vue";

@Component({
  name: "CheckoutInputComponent",
  components: {
    SvgIcon,
  },
})
export default class CheckoutInputComponent extends Vue {
  $refs: {
    input: HTMLInputElement;
  };

  inputValue: string = "";

  setInputValue() {
    this.inputValue = this.$refs.input.value;
    this.inputValue = this.inputValue.trim();
  }

  clearInputValue() {
    this.inputValue = "";
    console.log(this.inputValue);
  }
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;

  max-width: 363px;
  width: 100%;

  @include flex-container(row, space-between, center);

  background-color: white;

  border: 1px solid $color-border-grey-lighter;
  border-radius: 8px;

  padding: 16px;

  transition: 0.2s ease;

  &:hover {
    border-color: $color-main;
  }

  &:focus-within {
    border-color: $color-main;
  }

  &__field {
    width: 100%;

    @include fontUnify;

    padding-right: 24px;

    &:focus {
      & + .input__caption {
        @include fontUnify(12, 12);

        top: 0px;
        left: 12px;

        background-color: white;

        padding: 0 4px;
      }
    }

    &.filled {
      & + .input__caption {
        @include fontUnify(12, 12);

        top: 0px;
        left: 12px;

        background-color: white;

        padding: 0 4px;
      }
    }
  }

  &__caption {
    @include fontUnify;
    color: $color-text-lighter;

    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);

    pointer-events: none;

    transition: 0.2s ease;
  }

  &__clear {
    width: 20px;
    height: 20px;

    color: $color-text-lighter;

    user-select: none;
    cursor: pointer;
  }
}
</style>
