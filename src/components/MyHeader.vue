<template>
  <div class="header">
    <div class="header__container | container">
      <RouterLink class="header__link header__title" to="/">LOOM</RouterLink>
      <ul class="header__navigation">
        <li class="header__navigation-item">
          <RouterLink class="header__link" to="/products">Catalogue</RouterLink>
        </li>
        <li class="header__navigation-item">
          <RouterLink class="header__link" to="/products"
            >Créer mon meuble</RouterLink
          >
        </li>
        <li class="header__navigation-item">
          <RouterLink class="header__link" to="/views/CartView"
            >Panier</RouterLink
          >
        </li>
        <li class="header__navigation-item">
          <RouterLink class="header__link" to="/products"
            >Mon profil</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.header {
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
  }

  &__navigation {
    display: flex;
    flex-flow: row nowrap;
    padding-left: 50px;
    list-style: none;
  }

  &__navigation-item {
    font-family: "pp_moriextralight", sans-serif;
    font-size: rem(20);
    color: $white;
    &:hover {
      color: $toned-color;
    }
    &:not(:first-of-type) {
      margin-left: 20px;
    }
    :-webkit-any-link {
      color: $white;
      &:hover {
        color: $toned-color;
      }
    }
  }
}
</style>
