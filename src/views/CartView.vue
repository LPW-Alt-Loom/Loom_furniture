<template>
  <div v-if="$store.state.cart.length" class="cart">
    <MyTitle type="h1" size="cart_title" color="primary" text="Panier" />
    <div
      class="cart_content"
      v-for="(product, index) in $store.state.cart"
      :key="index"
    >
      <div class="cart_content_image_section">
        <img class="cart_content_image_src" :src="image.src" :alt="image.alt" />
      </div>
      <div class="cart_content_infos_product">
        <MyTitle
          type="h2"
          text="Résumé de la commande"
          color="primary"
          size="medium"
        />
        <MyTitle size="small" color="primary" type="h3" text="Mon modèle" />
        <span class="cart_content_infos_product_name">{{ product.name }}</span>
        <div
          v-if="product.dimensions"
          class="cart_content_infos_product_dimensions"
        >
          <MyTitle
            size="small"
            color="primary"
            type="h3"
            text="Dimensions du produit"
          />
        </div>
        <ul>
          <li class="cart_content_infos_product_list-item">
            Longueur : {{ product.dimensions.length }} cm
          </li>
          <li class="cart_content_infos_product_list-item">
            Largeur : {{ product.dimensions.width }} cm
          </li>
          <li class="cart_content_infos_product_list-item">
            Hauteur : {{ product.dimensions.height }} cm
          </li>
        </ul>
        <span class="cart_content_infos_product_price">
          Total : £{{ product.price }} TTC
        </span>
        <MyButton
          text="Page produit"
          :link="`/products/${product.slug}`"
          type="primary"
          class="cart_content_infos_product_button"
        />
      </div>
      <div class="cart_content_infos_validation">
        <MyButton text="Passer la commande" link="/cart/order" type="toned" />
      </div>
    </div>
  </div>
  <div v-else class="cart_empty">
    <MyTitle size="big" color="primary" text="Le panier est vide" type="h1" />
    <MyButton text="Retourner au catalogue" link="/products" type="primary" />
  </div>
</template>
<script>
import MyTitle from "@/components/MyTitle.vue";
import MyButton from "@/components/MyButton.vue";
export default {
  components: {
    MyTitle,
    MyButton,
  },
  computed: {
    image() {
      if (!this.$store.state.cart[0].images.length) return;
      return this.$store.state.cart[0].images[0];
    },
  },
};
</script>
<style lang="scss" scoped>
.cart {
  padding: 80px;
  @media screen and (max-width: 800px) {
    padding: 25px;
  }
  &_content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr) auto;
    @media screen and (max-width: 800px) {
      grid-template-rows: auto 1fr auto;
    }
    gap: 20px;
    h2 {
      text-align: center;
      margin-top: 0;
    }
    &_image {
      &_section {
        grid-column: 1 / span 9;
        grid-row: 1 / span 3;
        background-color: $grey;
        padding: 60px;
        @media screen and (max-width: 800px) {
          grid-column: 1 / span 12;
          grid-row: 1;
          padding: 30px;
        }
      }
      &_src {
        width: 100%;
      }
    }
    &_infos {
      &_product {
        grid-column: 10 / span 3;
        grid-row: 1 / span 2;
        background-color: $grey;
        padding: 60px;
        display: flex;
        justify-content: space-between;
        flex-flow: column;
        @media screen and (max-width: 800px) {
          grid-column: 1 / span 12;
          grid-row: 2;
          gap: 20px;
          padding: 30px;
        }
        * {
          margin: 0;
        }
        &_name {
          font-family: "pp_moriextralight", sans-serif;
          font-size: rem(20);
          padding-left: 20px;
        }
        &_price {
          font-family: "Krylon", sans-serif;
          font-size: rem(30);
        }
        &_list-item {
          @include corps;
        }
      }
      &_validation {
        grid-column: 10 / span 3;
        grid-row: 3;
        background-color: $grey;
        padding: 60px;
        @media screen and (max-width: 800px) {
          grid-column: 1 / span 12;
          padding: 30px;
        }
      }
    }
  }
}

.cart_empty {
  margin: auto auto 120px auto;
  width: 50%;
}
</style>
