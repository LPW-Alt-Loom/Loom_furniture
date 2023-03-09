<template>
  <div class="header">
    <div class="header__container | container">
      <RouterLink class="header__link header__title" to="/">LOOM</RouterLink>
      <ul id="list" class="header__navigation">
        <li class="header__navigation-item">
          <RouterLink class="header__link" to="/products/all"
            >Catalogue</RouterLink
          >
        </li>
        <li class="header__navigation-item">
          <RouterLink class="header__link" to="/products/all"
            >Créer mon meuble</RouterLink
          >
        </li>
        <li class="header__navigation-item">
          <RouterLink class="header__link" to="/cart">Panier</RouterLink>
        </li>
        <li class="header__navigation-item">
          <RouterLink class="header__link" to="/products/all"
            >Mon profil</RouterLink
          >
        </li>
      </ul>
      <span @click="showMenu" id="burger"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      burger: {},
      list: {},
    };
  },
  mounted() {
    this.burger = document.getElementById("burger");
    this.list = document.getElementById("list");
  },
  methods: {
    showMenu() {
      this.burger.classList.toggle("open");
      this.list.classList.toggle("open");
    },
  },
};
</script>
<style lang="scss">
.header {
  width: 100%;
  height: 90px;
  padding-right: rem(40);
  padding-left: rem(40);
  @media screen and (max-width: 640px) {
    height: 60px;
  }
  background-color: $primary-color;

  &__container {
    display: flex;
    flex-flow: row;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-family: "Krylon", sans-serif;
    font-size: rem(40);
    color: $white;
    z-index: 3;
  }

  &__navigation {
    display: flex;
    flex-flow: row nowrap;
    padding-left: 50px;
    list-style: none;
    @media screen and (max-width: 800px) {
      background-color: $primary-color;
      flex-flow: column;
      gap: 15px;
      position: absolute;
      width: 100%;
      right: 0;
      top: 60px;
      z-index: 2;
      padding: 10px 0;
      transform: scaleY(0);
      transform-origin: center top;
      transition: all 0.3s ease;
      &.open {
        transform: scaleY(1);
      }
      li {
        padding: 10px 0;
        text-align: center;
      }
    }
  }

  &__navigation-item {
    font-family: "pp_moriextralight", sans-serif;
    font-size: rem(20);
    color: $white;
    &:hover {
      color: $toned-color;
    }
    &:not(:first-of-type) {
      @media screen and (min-width: 801px) {
        margin-left: 20px;
      }
    }
    :-webkit-any-link {
      color: $white;
      &:hover {
        color: $toned-color;
      }
    }
  }

  //responsive
  #burger {
    display: none;
    @media screen and (max-width: 800px) {
      width: 30px;
      height: 2px;
      background: white;
      display: inline-block;
      position: relative;
      z-index: 3;
      &::before,
      &::after {
        content: "";
        width: 30px;
        height: 2px;
        background: white;
        display: inline-block;
        position: absolute;
        transform-origin: center;
        transition: all 0.3s ease;
      }
      &::before {
        top: -7px;
      }
      &::after {
        top: 7px;
      }
      &.open {
        background: transparent; /* la barre du milieu disparait */
      }
      /* celles du haut et du bas s'inclinent pour former une croix */
      &.open::before {
        transform: rotate(45deg);
        top: 0;
      }
      &.open::after {
        transform: rotate(-45deg);
        top: 0;
      }
    }
  }
}
</style>
