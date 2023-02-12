<template>
  <main>
    <MyMenu />

    <MyTitle text="Mon petit titre h1" type="h1" size="small" />
    <MyTitle text="Mon titre normal h3" type="h3" />
    <MyTitle text="Mon grand titre h2 " type="h2" size="big" />

    <MyButton
      text="Clique ici pour aller sur la page contact !"
      link="/contact"
    />
    <MyButton text="Clique là pour aller sur la HP !" link="/" />
    <MyButton text="Cliquez ici !" />

    <h3>Mes produits</h3>

    <div class="container">
      <ul>
        <li v-for="(product) in products">

          <Product :name="product.name" :price="product.price" :images="product.images"/>
        </li>
      </ul>
    </div>

    <h3>Catégories</h3>

    <div class="container">
      <ul>
        <li v-for="(category) in categories">
          {{category.name}}
        </li>
      </ul>
    </div>

<!--    <div v-if="page.acf" class="homeview__showroom">-->
<!--      <Showroom :title="page.acf.title" :images="page.acf.images" />-->
<!--    </div>-->
  </main>
</template>
<script>
import MyButton from "./../components/MyButton.vue";
import MyMenu from "./../components/MyMenu.vue";
import MyTitle from "./../components/MyTitle.vue";

import { client } from '@/utils/axios.js';
import Product from "@/components/Product.vue";
import Showroom from "@/components/Showroom.vue";


export default {
  components: {
    Showroom,
    Product,
    MyButton,
    MyMenu,
    MyTitle,
  },
  data() {
    return {
      posts: [

      ],
      products: [

      ],
      categories: [

      ],
      page: {}
    };
  },
  async mounted() {

    const productResponse = await client.get("wc/v3/products/")
    this.products = productResponse.data

    const categoryResponse = await client.get("wc/v3/products/categories/")
    this.categories = categoryResponse.data

    // Get homepage data
    const homepageResponse = await client.get("/wp/v2/pages/29")
    this.page = homepageResponse.data

  }
};
</script>
