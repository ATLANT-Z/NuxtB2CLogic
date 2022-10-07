<template>
  <div class="catalog__item">
    <h4 class="catalog__title">
      <img class="catalog__icon" v-if="item.img" :src="item.img" :alt="item.name"/>
      <span>
        {{ item.name }}
      </span>
      <SvgIcon class="catalog__arrow" v-if="item.children.length" :icon="icons['arrow-right']"/>
    </h4>
    <div class="catalog__children" v-if="item.children.length">
      <CatalogItemComponent v-for="category in item.children"
                            :key="category.id"
                            :item="category"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import {Category} from "@models/catalog/category";
import {Prop} from "vue-property-decorator";

@Component({
  name: "CatalogItemComponent",
  components: {SvgIcon},
})
export default class CatalogItemComponent extends Vue {
  @Prop({required: true}) item: Category;
}
</script>

<style lang="scss" scoped>
.catalog {
  &__title {
    display: flex;
    align-items: center;

    gap: 16px;
    padding: 12px 16px;

    cursor: pointer;

    &:hover {
      background-color: #efefef;
    }

    & & {
      padding: 12px 24px 12px 32px;
    }
  }

  &__icon {
    @include fixedHW(24px, 24px);
  }

  &__arrow {
    @include fixedHW(16px, 16px);
    margin-left: auto;
    color: $color-main;
    @include anim();

    &.active {
      transform: rotate(90deg);
    }
  }

  &__item:hover > &__children {
    display: flex;
  }

  &__children {
    position: absolute;
    min-height: 100%;
    width: 100%;
    top: 0;
    left: 100%;
    z-index: 2;

    padding: 24px 0;

    display: none;
    flex-direction: column;

    background-color: white;
  }
}
</style>
