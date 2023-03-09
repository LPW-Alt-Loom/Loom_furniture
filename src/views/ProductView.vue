<template>
  <div v-if="ready" class="product-view">
    <div class="product-view_infos">
      <div v-if="mobile === true" class="product-view_gallery">
        <img
          class="product-view_gallery_image"
          :src="image.src"
          :alt="image.name"
          :key="image.id"
        />
      </div>
      <div v-else class="product-view_gallery">
        <img
          class="product-view_gallery_image"
          v-for="image in product.images"
          :src="image.src"
          :alt="image.name"
          :key="image.id"
        />
      </div>
      <div class="product-view_content">
        <MyTitle
          class="product-view_content_title"
          type="h1"
          color="primary"
          size="medium"
          :text="product.name"
        />
        <myTitle
          class="product-view_content_title"
          type="h2"
          color="primary"
          size="product_subtitle"
          :text="category + tags"
        />
        <span class="product-view_sku">{{ product.sku }}</span>
        <p class="product-view_content_promo_price">£{{ product.price }}</p>
        <p class="product-view_content_price">£{{ product.regular_price }}</p>
        <div
          class="product-view_content_description"
          v-html="product.description"
        />
        <div>
          <MyButton
            type="outline-primary"
            :text="'Personnaliser mon meuble'"
            class="product-view_content_customize"
          />
        </div>
        <div @click="addToCart">
          <MyButton
            type="toned"
            link="/cart"
            :text="'Ajouter au panier'"
            class="product-view_content_addCart"
          />
        </div>
        <div>
          <MyTitle size="small" color="primary" type="h3" text="Finitions" />
          <ul>
            <li class="product-view_content_list-item">Matières : Chêne</li>
            <li class="product-view_content_list-item">Poignées : Laiton</li>
          </ul>
        </div>
        <div v-if="product.dimensions" class="product-view_content_dimensions">
          j
          <MyTitle
            size="small"
            color="primary"
            type="h3"
            text="Dimensions du produit :"
          />
          <ul>
            <li class="product-view_content_list-item">
              Longueur : {{ product.dimensions.length }} cm
            </li>
            <li class="product-view_content_list-item">
              Largeur : {{ product.dimensions.width }} cm
            </li>
            <li class="product-view_content_list-item">
              Hauteur : {{ product.dimensions.height }} cm
            </li>
          </ul>
        </div>
        <div>
          <MyTitle
            size="small"
            color="primary"
            type="h3"
            text="Temps de réalistion"
          />
          <ul>
            <li class="product-view_content_list-item">
              Récolte des matériaux : 1 semaine
            </li>
            <li class="product-view_content_list-item">
              Assemblage et livraison : 2 semaines
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="product-view_others_products">
      <BestSalerProducts title="Nos autres créations" :products="products" />
    </div>
  </div>
  <div v-else>
    <PageLoader />
  </div>
</template>

<script>
import { wooCommerce } from "@/utils/axios";
import MyButton from "@/components/MyButton.vue";
import MyTitle from "@/components/MyTitle.vue";
import BestSalerProducts from "@/components/BestSalerProducts.vue";
import PageLoader from "@/components/PageLoader.vue";

export default {
  components: { PageLoader, BestSalerProducts, MyButton, MyTitle },
  data() {
    return {
      products: [],
      product: {},
      image: {},
      category: "",
      tags: "",
      mobile: false,
      ready: false,
    };
  },
  created() {
    this.mobile = window.innerWidth < 800;
  },
  async mounted() {
    const productResponse = wooCommerce.get(
      "wc/v3/products?slug=" + this.$route.params.product
    );
    const productsResponse = wooCommerce.get("wc/v3/products");

    await this.getRequest(productResponse, productsResponse).then((values) => {
      this.product = values[0].data[0];

      this.product.categories.forEach((e) => {
        this.category = e.name;
      });

      this.product.tags.forEach((e) => {
        this.tags = this.tags + "  -  " + e.name;
      });

      this.products = values[1].data;

      this.image = this.product.images[0];
    });

    this.ready = true;
  },
  methods: {
    getRequest: async function (productResponse, categoriesResponse) {
      return await Promise.all([productResponse, categoriesResponse]);
    },
    addToCart() {
      this.$store.commit("add", { product: this.product, quantity: 1 });
    },
  },
};
</script>

<style lang="scss" scoped>
.product-view {
  background-color: $white;
  color: $primary-color;
  &_infos {
    padding: 80px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;
    @media screen and (max-width: 800px) {
      padding: 40px;
    }
  }
  &_gallery {
    grid-column: 1 / span 7;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 35px;
    @media screen and (max-width: 800px) {
      grid-column: 1 / span 12;
    }
    &_image {
      width: 45%;
      height: 45%;
      @media screen and (max-width: 800px) {
        width: 100%;
        height: auto;
      }
    }
  }
  &_content {
    grid-column: 9 / span 4;
    @media screen and (max-width: 800px) {
      grid-column: 1 / span 12;
    }
    &_title {
      margin: 0;
    }
    &_customize {
      margin-bottom: 20px;
    }
    h3 {
      margin-bottom: 0;
      line-height: rem(60);
    }
    &_addCart {
      margin-bottom: 40px;
    }
    &_promo_price {
      font-family: "pp_moriregular", sans-serif;
      font-size: rem(36);
      margin-top: 23px;
      margin-bottom: 0;
    }
    &_price {
      font-family: "pp_moriextralight", sans-serif;
      font-size: rem(20);
      margin: 0;
      text-decoration: line-through;
    }
    &_list-item {
      @include corps;
    }
    &_description {
      @include corps;
      margin: 25px 0;
    }
  }
  &_others_products {
    background-color: $primary-color;
  }
}
</style>
