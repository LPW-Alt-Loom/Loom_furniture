<template>
  <div class="products-view">
    <h1 class="products-view_title">Notre catalogue</h1>
    <div class="products-view_description">
      <p>
        Vous pouvez retrouver l’entièreté de notre catalogue sur cette page.
        Chez Loom Furnitures, nous avons un large choix de meubles,triés sous
        différentes catégories.
      </p>
      <p>
        Nous proposons à nos clients une option de customisation de meubles et
        également, une option afin de choisir des meubles qui sont produits avec
        des matériaux éco-responsables.
      </p>
    </div>
    <div class="products-view_options">
      <div class="products-view_options_dropdown">
        <button
          class="products-view_options_dropdown_button"
          @click="onDropdownClick"
        >
          Catégories
        </button>
        <ul
          class="products-view_options_dropdown_content"
          v-if="displayDropdown"
        >
          <li
            v-for="category in categories"
            :key="category.id"
            class="products-view_options_dropdown_content_item"
          >
            <input
              type="checkbox"
              v-model="choicenCategories"
              :name="category.slug"
              :id="category.slug"
              :value="category.slug"
            />
            <label :for="category.slug">{{ category.name }}</label>
          </li>
        </ul>
      </div>
      <div class="products-view_options_sort">
        <div
          v-for="tag in tags"
          :key="tag.id"
          :class="
            tag.slug === 'eco-responsable'
              ? 'products-view_options_sort_eco'
              : 'products-view_options_sort_customizable'
          "
        >
          <input
            type="checkbox"
            v-model="choicenTags"
            :name="tag.slug"
            :id="tag.slug"
            :value="tag.slug"
          />
          <label :for="tag.slug">{{ tag.name }}</label>
        </div>
      </div>
    </div>
    <hr class="divider" />
    <div class="products-view_list">
      <div
        class="products-view_list_product"
        v-for="(product, index) in displayedProducts"
        :key="index"
      >
        <IndexProductCard
          :name="product.name"
          :slug="product.slug"
          :price="product.price"
          :images="product.images"
          :description="product.short_description"
        />
      </div>
    </div>
    <div class="products-view_pagination">
      <span class="products-view_pagination-button" @click="onPreviousClick"
        >Page précédente</span
      >
      <span class="products-view_pagination-button" @click="onNextClick"
        >Page suivante</span
      >
    </div>
  </div>
</template>

<script>
import { wooCommerce } from "@/utils/axios";
import IndexProductCard from "@/components/IndexProductCard.vue";
export default {
  components: {
    IndexProductCard,
  },

  data() {
    return {
      products: [],
      categories: [],
      choicenCategories: [],
      tags: [],
      choicenTags: [],
      price: null,
      page: 0,
      byPage: 4,
      displayDropdown: false,
    };
  },

  watch: {
    filteredProducts: "onFilteredProductsChange",
  },

  computed: {
    // Filtered array based on this.products and this.filters
    filteredProducts() {
      // If no filters selected
      if (!this.choicenTags.length && !this.choicenCategories.length)
        return this.products;
      let filteredList = [];

      if (this.choicenCategories.length > 0) {
        filteredList = this.products.filter((product) => {
          // At least one filter selected
          return product.categories.find((category) =>
            this.choicenCategories.includes(category.slug)
          );
        });
      } else {
        filteredList = this.products;
      }

      if (this.choicenTags.length > 0) {
        filteredList = filteredList.filter((product) => {
          // At least one filter selected
          return product.tags.find((tag) =>
            this.choicenTags.includes(tag.slug)
          );
        });
      }

      return filteredList;
    },
    // Sliced array of products based on filteredProducts
    // Handles pagination
    displayedProducts() {
      const nextPage = this.page + 1;
      return this.filteredProducts.slice(
        this.page * this.byPage,
        nextPage * this.byPage
      );
    },
  },
  mounted() {
    // Get all woocommerce products
    const productResponse = wooCommerce.get("/wc/v3/products");
    const categoriesResponse = wooCommerce.get("/wc/v3/products/categories");
    const tagsResponse = wooCommerce.get("/wc/v3/products/tags");

    this.getRequest(productResponse, categoriesResponse, tagsResponse).then(
      (values) => {
        this.products = values[0].data;
        this.categories = values[1].data;
        this.tags = values[2].data;
      }
    );
  },

  methods: {
    //Open filters options
    onDropdownClick() {
      this.displayDropdown = !this.displayDropdown;
    },
    // Go to previous page if not first one
    onPreviousClick() {
      if (this.page === 0) return;
      this.page = this.page - 1;
    },
    // Go to next page if not last one
    onNextClick() {
      const pageCount = Math.ceil(this.filteredProducts.length / this.byPage);
      if (this.page >= pageCount - 1) return;
      this.page = this.page + 1;
    },
    // Triggered when this.filteredProducts value changes
    onFilteredProductsChange() {
      this.page = 0;
    },
    getRequest: async function (
      productResponse,
      categoriesResponse,
      tagsResponse
    ) {
      return await Promise.all([
        productResponse,
        categoriesResponse,
        tagsResponse,
      ]);
    },
  },
};
</script>
<style lang="scss">
.products-view {
  background-color: $primary-color;
  padding: 35px 80px;
  color: $white;
  @media screen and (max-width: 800px) {
    padding: 35px 40px;
  }

  &_title {
    @include title_40;
  }

  &_description {
    @include corps;
    margin-bottom: 30px;
  }

  &_options {
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    @media screen and (max-width: 799px) {
      justify-content: center;
      gap: 20px;
      flex-flow: column;
      align-items: center;
    }

    &_dropdown {
      position: relative;
      width: 200px;

      &_button {
        width: 100%;
        cursor: pointer;
        height: 40px;
        font-family: "pp_moriregular", sans-serif;
        font-size: rem(16);
        letter-spacing: rem(1);
      }

      &_content {
        width: 100%;
        position: absolute;
        background-color: #f9f9f9;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        padding: 0;
        text-align: center;
        z-index: 1;

        &_item {
          width: 100%;
          padding: 12px;
          font-family: "pp_moriregular", sans-serif;
          font-size: rem(14);
          letter-spacing: rem(0.5);
          color: black;
          display: flex;
          justify-content: left;
          gap: 20px;
          align-items: center;
          &:hover {
            background-color: $secondary-color;
            color: $white;
            cursor: pointer;
          }
        }
      }
    }
    &_sort {
      display: flex;
      gap: 10px;
      @media screen and (max-width: 800px) {
        flex-flow: column;
        gap: 20px;
      }
      &_eco {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 200px;
        height: 40px;
        font-family: "pp_moriregular", sans-serif;
        font-size: rem(16);
        letter-spacing: rem(1);
        border-radius: 5px;
        color: black;
        background-color: $green;
      }
      &_customizable {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 200px;
        height: 40px;
        font-family: "pp_moriregular", sans-serif;
        font-size: rem(16);
        letter-spacing: rem(1);
        border-radius: 5px;
        color: black;
        background-color: $toned-color;
      }
    }
  }

  &_pagination {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 50px 0 0 0;
    @include corps;
  }

  &_pagination-button {
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }
  .divider {
    margin-top: 15px;
    margin-bottom: 40px;
    @media screen and (max-width: 800px) {
      margin-top: 40px;
    }
  }

  &_list {
    display: flex;
    flex-flow: row wrap;
    gap: 30px;
    justify-content: center;
  }
}
</style>
