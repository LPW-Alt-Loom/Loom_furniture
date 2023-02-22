<template>
  <main>
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
    <div class="products">
      <MyTitle
        type="h2_uppercase"
        size="big"
        text="Nos produits phares"
        color="white"
      />
      <div class="products_list">
        <div v-for="product in products" :key="product.id">
          <ProductCard
            :slug="product.slug"
            :name="product.name"
            :images="product.images"
            :price="product.price"
          />
        </div>
      </div>
    </div>

    <!--  custom furniture  -->
    <CustomFurnitureCard />

    <!--    &lt;!&ndash;  Catalogue  &ndash;&gt;-->
    <!--    <div class="mb-5">-->
    <!--      <h2 class="text-center mb-5">Catalogue</h2>-->
    <!--      <div class="d-flex flex-wrap justify-content-evenly">-->
    <!--        <div class="card">-->
    <!--          <a href="https://placeholder.com"-->
    <!--            ><img class="card-img" src="https://via.placeholder.com/200x300"-->
    <!--          /></a>-->
    <!--          <div class="card-img-overlay">-->
    <!--            <p class="card-text">Coffee Tables</p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="card">-->
    <!--          <a href="https://placeholder.com"-->
    <!--            ><img class="card-img" src="https://via.placeholder.com/200x300"-->
    <!--          /></a>-->
    <!--          <div class="card-img-overlay">-->
    <!--            <p class="card-text">Console Tables</p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="card">-->
    <!--          <a href="https://placeholder.com"-->
    <!--            ><img class="card-img" src="https://via.placeholder.com/200x300"-->
    <!--          /></a>-->
    <!--          <div class="card-img-overlay">-->
    <!--            <p class="card-text">Side Tables</p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="card">-->
    <!--          <a href="https://placeholder.com"-->
    <!--            ><img class="card-img" src="https://via.placeholder.com/200x300"-->
    <!--          /></a>-->
    <!--          <div class="card-img-overlay">-->
    <!--            <p class="card-text">Plinths</p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

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
          <MyButton type="toned" text=">En savoir plus" link="/" />
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
main {
  background-color: $primary-color;
}

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

.products {
  .products_list {
    display: flex;
    flex-flow: nowrap;
    justify-content: space-evenly;
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
</style>
<script>
import MyButton from "./../components/MyButton.vue";
import MyTitle from "./../components/MyTitle.vue";

import { wooCommerce } from "@/utils/axios.js";
import ProductCard from "@/components/ProductCard.vue";
import CustomFurnitureCard from "@/components/CustomFurnitureCard.vue";

export default {
  components: {
    CustomFurnitureCard,
    ProductCard,
    MyButton,
    MyTitle,
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
    const productResponse = await wooCommerce.get("wc/v3/products/");
    this.products = productResponse.data;

    const categoryResponse = await wooCommerce.get(
      "wc/v3/products/categories/"
    );
    this.categories = categoryResponse.data;
  },
};
</script>
