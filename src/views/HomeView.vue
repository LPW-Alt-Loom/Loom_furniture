<template>
  <main class="home-view">
    <!--  Carousel  -->
    <div class="carousel">
      <img
        src="https://via.placeholder.com/1900x900"
        alt=""
        class="carousel_img"
      />
      <div class="carousel_content">
        <MyTitle
          type="h1"
          size="big_corps"
          text="Meubles sur mesure fait pour vous"
          color="white"
        />
        <MyButton
          type="outline_white"
          text="Découvrir nos meubles"
          link="/products"
        />
      </div>
    </div>

    <!--  Best saler  -->

    <BestSalerProducts :products="products" title="Nos produits phares" />

    <!--  custom furniture  -->
    <CustomFurnitureCard />

    <!--  Catalogue  -->
    <div class="categories">
      <MyTitle
        color="black"
        type="h2_uppercase"
        text="Catalogue"
        size="big"
        class="categories_title"
      />
      <div class="categories_list">
        <div
          v-for="category in categories"
          :key="category.id"
          class="categories_list_category"
        >
          <a href="https://placeholder.com"
            ><img
              class="categories_list_category_image"
              src="https://via.placeholder.com/200x300"
              alt="oui"
          /></a>
          <p class="categories_list_category_title">{{ category.name }}</p>
        </div>
      </div>
    </div>

    <!-- Materials -->
    <div class="section _primary">
      <div class="grid">
        <div class="col-left">
          <img class="thumbnail" src="https://via.placeholder.com/500" alt="" />
        </div>
        <div class="col-right">
          <MyTitle type="h2" size="medium" text="Nos matériaux" color="white" />
          <MyTitle
            type="h3"
            size="subtitle"
            text="Quand la qualité s’invite dans chacune de vos pièces."
            color="white"
          />
          <p>
            Chez Loom Furnitures, tous nos matériaux sont issus de productions
            locales ou européennes. Nous contrôlons nous-même la qualité de nos
            matériaux et nous vous garantissons que tous nos meubles auront une
            longue durée de vie et nous vous offrons également, une garantie à
            vie pour chaque meuble que vous achetez sur Loom Furnitures.
          </p>
          <MyButton type="toned" text="En savoir plus" link="/" />
        </div>
      </div>
    </div>

    <!-- Process  -->
    <div class="section _secondary">
      <div class="grid">
        <div class="col-left">
          <MyTitle
            type="h2"
            size="medium"
            text="Nos procédés de fabrication"
            color="white"
          />
          <MyTitle
            type="h3"
            size="subtitle"
            text="Un savoir faire transmis de génération en génération depuis 1952."
            color="white"
          />
          <p>
            Nos maîtres artisans sont issus des plus grandes écoles d’artisanats
            européennes. Tous nos meubles sont construits et assemblés dans
            notre atelier situé en Grande Bretagne. Loom Furnitures construit
            ses meubles dans le respect des traditions et des meilleurs procédés
            afin de garantir la meilleure qualité que l’on puisse trouver dans
            le monde de l’ameublement.
          </p>
          <MyButton type="primary" text="En savoir plus" link="/" />
        </div>
        <div class="col-right">
          <img class="thumbnail" src="https://via.placeholder.com/500" alt />
        </div>
      </div>
    </div>

    <!-- Custom -->
    <div class="section _white">
      <div class="grid">
        <div class="col-left">
          <img class="thumbnail" src="https://via.placeholder.com/500" alt="" />
        </div>
        <div class="col-right">
          <MyTitle
            type="h2"
            size="medium"
            text="Une envie spécifique ?"
            color="primary"
          />
          <MyTitle
            type="h3"
            size="subtitle"
            text="Ici vos besoins et vos envies sont au coeur de notre conception."
            color="black"
          />
          <p>
            Vous pouvez sélectionner chaque meuble de notre catalogue et changer
            la finition de tous ses éléments. Envie d’un plateau en marbre ? De
            pieds en laiton ? Ou encore de poignées avec une finition brossée ?
            Chez Loom Furnitures tout est possible pour nos client.
          </p>
          <MyButton type="primary" text="Je crée mon meuble" link="/" />
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
.home-view {
  background-color: $primary-color;
  .carousel {
    position: relative;

    .carousel_img {
      z-index: -1;
      width: 100%;
    }

    .carousel_content {
      left: 17%;
      top: 30%;
      position: absolute;
      width: 350px;
    }
  }

  .section {
    &._primary {
      background-color: $primary-color;

      p {
        color: $white;
      }
    }

    &._secondary {
      background-color: $secondary-color;

      p {
        color: $white;
      }
    }

    &._white {
      background-color: $white;

      p {
        color: $black;
      }
    }

    padding-bottom: 125px;

    .grid {
      display: grid;
      max-width: 1100px;
      min-height: 500px;
      grid-template-columns: repeat(12, 8.33%);
      margin: 0 auto;

      p {
        @include corps;
      }

      .col-left {
        grid-column: 1/6;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;

        * {
          margin: 0;
        }
      }

      .col-right {
        grid-column: 7/13;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;

        * {
          margin: 0;
        }
      }

      .thumbnail {
        margin-top: -150px;
      }
    }
  }

  .categories {
    background-color: $white;
    padding-bottom: rem(120);
    &_title {
      margin-bottom: rem(60);
      margin-top: 0;
      padding-top: rem(60);
    }
    &_list {
      display: flex;
      overflow-y: hidden;
      overflow-x: scroll;
      flex-flow: nowrap;
      gap: 60px;
      padding-bottom: rem(20);
      padding-left: 80px;
      margin-bottom: 10px;
    }
  }
}
</style>
<script>
import MyButton from "./../components/MyButton.vue";
import MyTitle from "./../components/MyTitle.vue";
import BestSalerProducts from "@/components/BestSalerProducts.vue";

import { wooCommerce } from "@/utils/axios.js";
import CustomFurnitureCard from "@/components/CustomFurnitureCard.vue";

export default {
  components: {
    CustomFurnitureCard,
    MyButton,
    MyTitle,
    BestSalerProducts,
  },
  data() {
    return {
      posts: [],
      products: [],
      categories: [],
      page: {},
    };
  },
  async mounted() {
    // Get all woocommerce products
    const productResponse = wooCommerce.get("/wc/v3/products");
    const categoriesResponse = wooCommerce.get("/wc/v3/products/categories");

    this.getRequest(productResponse, categoriesResponse).then((values) => {
      // Utilisez les valeurs retournées ici
      this.products = values[0].data;
      this.categories = values[1].data;
    });
  },
  methods: {
    getRequest: async function (productResponse, categoriesResponse) {
      return await Promise.all([productResponse, categoriesResponse]);
    },
  },
};
</script>
