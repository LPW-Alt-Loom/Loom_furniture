<template>
  <div class="confirmation-view">
    <div class="container">
      <MyTitle
        type="h1"
        size="order_title"
        color="primary"
        :text="`Merci pour votre commande ${order.billing.first_name} ${order.billing.last_name} !`"
      />
      <h1>
        Merci pour votre commande {{ order.billing.first_name }}
        {{ order.billing.last_name }} !
      </h1>

      <MyTitle
        text="Récapitulatif de la commande"
        size="small"
        type="h2"
        color="primary"
      />
      <ul>
        <li v-for="(product, index) in order.line_items" :key="index">
          {{ product.name }} : {{ product.price }}€ - x{{ product.quantity }}
        </li>
      </ul>

      <p>
        Vous serez bientôt averti de l'expédition de vos produits, la livraison
        est prévue dans les 3 jours ouvrés à l'adresse
        {{ order.shipping.address_1 }} {{ order.shipping.address_2 }} à
        {{ order.shipping.city }}
      </p>
    </div>
  </div>
</template>

<script>
import MyTitle from "@/components/MyTitle.vue";
export default {
  components: { MyTitle },
  data() {
    return {
      order: null,
    };
  },
  created() {
    this.order = JSON.parse(localStorage.getItem("order"));
    console.log(this.order);
  },
};
</script>
<style lang="scss">
p,
li {
  @include corps;
}
</style>
