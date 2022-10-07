<template>
  <header class="site-header" ref="header">
    <section class="site-header__white-row" :class="{hidden: !isShowTop}">
      <div class="site-header__row-in-w">
        <div class="site-header__contact-list">
          <a class="site-header__contact-item" href="tel:0800309988">
          <SvgIcon :icon="icons['phone-line']"/>
          0800309988
          </a>
        </div>
        <nav class="site-header__nav">
          <a class="site-header__nav-item" href="#">
          Блог
          </a>
          <a class="site-header__nav-item" href="#">
          О нас
          </a>
          <a class="site-header__nav-item" href="#">
          Сотрудничество
          </a>
          <a class="site-header__nav-item" href="#">
          Контакты
          </a>
        </nav>
      </div>
    </section>
    <section class="site-header__sticky-row" ref="stickyRow">
      <div class="site-header__row-in-w">
        <div class="site-header__menu-catalog-btns-w">
          <MenuBtnComponent/>
          <CatalogComponent/>
        </div>
        <a class="site-header__logo-w" href="#">
        <SvgIcon class="site-header__logo" :icon="icons['logo-short']"/>
        </a>
        <div class="site-header__search-lang-w">
          <Search/>
          <HeaderLang/>
        </div>
        <HeaderProductBtns/>
      </div>
    </section>
    <nav class="site-header__breadcrumbs" :class="{hidden: !isShowBreadcrumbs}">
      <div class="site-header__row-in-w breadcrumbs">
        <a class="breadcrumbs__item ui-link" href="#">
        Главная
        </a>
        <SvgIcon class="breadcrumbs__arrow" :icon="icons['arrow-right']"></SvgIcon>
        <a class="breadcrumbs__item ui-link" href="#">
        Продукция
        </a>
      </div>
    </nav>
    <Menu/>
  </header>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import CatalogComponent from "@components/common/header/catalog/HeaderCatalog.vue";
import MenuBtnComponent from "@components/common/header/menu/MenuBtn.vue";
import Search from "@components/common/header/Search.vue";
import HeaderLang from "@components/common/header/HeaderLang.vue";
import HeaderProductBtns from "@components/common/header/HeaderProductBtns.vue";
import {headerViewService} from "@services/header/view/header.view.service";
import Menu from "@components/common/header/menu/Menu.vue";

enum DIR {
  UP = 1,
  DOWN = 2
}

@Component({
  name: "HeaderComponent",
  components: {Menu, HeaderProductBtns, HeaderLang, Search, MenuBtnComponent, CatalogComponent, SvgIcon},
})
export default class HeaderComponent extends Vue {
  declare $refs: {
    header: HTMLElement,
    stickyRow: HTMLElement
  }

  isShowTop: boolean = true;
  isShowBreadcrumbs: boolean = true;

  lastScroll: number = 0;
  dir: DIR = DIR.UP;

  calcIsShow() {
    if (window.scrollY < 60) {
      this.isShowTop = true;
      this.isShowBreadcrumbs = true;
      return;
    }

    this.isShowBreadcrumbs = false;

    if (Math.abs(this.lastScroll - window.scrollY) < 60) return;

    this.dir = this.lastScroll > window.scrollY ? DIR.UP : DIR.DOWN;
    this.lastScroll = window.scrollY;

    if (this.dir === DIR.UP) {
      this.isShowTop = true;
      return;
    }

    this.isShowTop = false;
  }

  calcHeaderViewState() {
    headerViewService.headerHeight = this.$refs.header.getBoundingClientRect().bottom;
    headerViewService.stickyRowBottom = this.$refs.stickyRow.getBoundingClientRect().bottom;
  }

  onScroll() {
    this.calcIsShow();
    this.calcHeaderViewState();
  }

  onResize() {
    this.calcIsShow();
    this.calcHeaderViewState();
  }

  mounted() {
    this.onResize();
    addEventListener('resize', this.onResize);
    addEventListener('scroll', this.onScroll);
  }

  unmounted() {
    removeEventListener('resize', this.onResize);
    removeEventListener('scroll', this.onScroll);
  }
}
</script>

<style lang="scss" scoped>
.site-header {
  position: sticky;
  top: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 100;

  &__white-row {
    max-height: 64px;
    height: 32px;
    width: 100%;

    background-color: white;

    @include anim();

    &.hidden {
      max-height: 0;
      padding: 0;
      overflow: hidden;
      visibility: hidden;
    }

    @include mobile() {
      display: none;
    }
  }

  &__sticky-row {
    width: 100%;
    height: 56px;
    background-color: #393d38;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    @include bigMobile() {
      gap: 8px;
    }
  }

  &__row-in-w {
    height: 100%;
    display: flex;
    align-items: center;
    gap: inherit;

    @include width-pad-main();

    margin: 0 auto;
  }

  &__logo-w {
    @include fixedHW(48px, 48px);
    display: flex;

    @include mobile() {
      display: none;
    }
  }

  &__logo {
    height: 100%;
    width: 100%;
    color: white;
  }

  &__menu-catalog-btns-w {
    position: relative;
    max-height: 56px;
    height: 100%;
    width: 370px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    @include smallestScreen() {
      width: 300px;
    }

    @include mobile() {
      width: auto;
    }

    z-index: 2;
  }

  &__search-lang-w {
    flex-grow: 1;
    display: flex;
    justify-content: center;

    gap: inherit;
  }

  &__contact-list {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-left: auto;

    @include font(12, 14);
  }

  &__nav-item {
    display: flex;
  }

  &__breadcrumbs {
    width: 100%;

    @include anim();

    &.hidden {
      @include anim(0s);
      opacity: 0;
      visibility: hidden;
    }
  }
}

.breadcrumbs {
  display: flex;
  align-items: center;

  padding: 16px;

  gap: 8px;

  &__item {
    @include font(14, 16);
  }

  &__arrow {
    height: 16px;
    color: $color-main;
  }
}
</style>
