<template>
  <main v-if="ready" class="home-view">
    <!--  Carousel  -->
    <div class="carousel">
      <div class="carousel_img">
        <img src="/assets/images/carrousel_1.png" alt="carousel 1" />
      </div>
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
          link="/products/all"
        />
      </div>
    </div>

    <!--  Best saler  -->

    <BestSalerProducts :products="products" title="Nos produits phares" />

    <!--  custom furniture  -->
    <CustomFurnitureCard class="custom_furniture" />

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
          <RouterLink :to="`/products/${category.slug}`">
            <img
              class="categories_list_category_image"
              :src="category.image.src"
              :alt="category.name"
            />
          </RouterLink>
          <p class="categories_list_category_title">{{ category.name }}</p>
        </div>
      </div>
    </div>

    <!-- Materials -->
    <div class="section _primary">
      <div class="grid">
        <div class="col-left">
          <img
            class="thumbnail"
            src="/assets/images/materials.png"
            alt="Nos matériaux"
          />
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
          <MyButton type="toned" text="En savoir plus" link="/materials" />
        </div>
      </div>
    </div>

    <!-- Process  -->
    <div class="section _secondary">
      <div class="grid">
        <div class="col-text">
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
          <MyButton type="primary" text="En savoir plus" link="/process" />
        </div>
        <div class="col-image">
          <img
            class="thumbnail"
            src="/assets/images/process.png"
            alt="Nos processus de fabrication"
          />
        </div>
      </div>
    </div>

    <!-- Custom -->
    <div class="section _white">
      <div class="grid">
        <div class="col-left">
          <img
            class="thumbnail"
            src="/assets/images/custom_section.png"
            alt="main qui écrit sur un stylo"
          />
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
  <main v-else>
    <PageLoader />
  </main>
</template>
<style lang="scss">
.home-view {
  background-color: $primary-color;
  .carousel {
    position: relative;

    .carousel_img {
      img {
        z-index: -1;
        width: 100%;
      }
    }

    .carousel_content {
      left: 24%;
      top: 33%;
      position: absolute;
      max-width: 350px;
      @media screen and (max-width: 800px) {
        h1 {
          display: none;
        }
      }
    }
  }

  .categories {
    background-color: $white;
    padding-bottom: 150px;
    @media screen and (max-width: 800px) {
      padding-bottom: 40px;
    }
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
      gap: 40px;
      padding-bottom: rem(20);
      margin-bottom: 10px;
      justify-content: space-evenly;
      @media screen and (max-width: 800px) {
        padding-right: 80px;
        padding-left: 80px;
        gap: 60px;
        justify-content: normal;
      }
      &_category {
        &_image {
          width: 200px;
        }
      }
    }
  }

  .section {
    padding: 20px 0 150px 0;
    @media screen and (max-width: 800px) {
      padding: 30px 20px;
    }
    &:last-child {
      padding-bottom: 80px;
    }
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

    .grid {
      display: grid;
      width: 100%;
      min-height: 500px;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 20px;

      p {
        @include corps;
      }

      .col-left {
        grid-column: 3 / span 4;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        @media screen and (max-width: 800px) {
          grid-column: 1 / span 12;
          gap: 25px;
        }

        * {
          margin: 0;
        }
      }

      .col-right {
        grid-column: 8 / span 4;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        @media screen and (max-width: 800px) {
          grid-column: 1 / span 12;
          gap: 25px;
        }

        * {
          margin: 0;
        }
      }

      .col-image {
        grid-column: 8 / span 4;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        @media screen and (max-width: 800px) {
          grid-column: 1 / span 12;
          grid-row: 1;
          gap: 25px;
        }
      }

      .col-text {
        grid-column: 3 / span 4;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        @media screen and (max-width: 800px) {
          grid-column: 1 / span 12;
          grid-row: 2;
          gap: 25px;
        }

        * {
          margin: 0;
        }
      }

      .thumbnail {
        margin-top: -150px;
        @media screen and (max-width: 800px) {
          margin-top: 0;
          width: 100%;
        }
      }
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
import PageLoader from "@/components/PageLoader.vue";

export default {
  components: {
    PageLoader,
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
      ready: false,
    };
  },
  async mounted() {
    // Get all woocommerce products
    const productResponse = wooCommerce.get("/wc/v3/products?per_page=100");
    const categoriesResponse = wooCommerce.get("/wc/v3/products/categories");

    await this.getRequest(productResponse, categoriesResponse).then(
      (values) => {
        // Utilisez les valeurs retournées ici
        this.products = values[0].data;
        this.categories = values[1].data;
      }
    );

    this.ready = true;
  },
  methods: {
    getRequest: async function (productResponse, categoriesResponse) {
      return await Promise.all([productResponse, categoriesResponse]);
    },
  },
};
</script>
