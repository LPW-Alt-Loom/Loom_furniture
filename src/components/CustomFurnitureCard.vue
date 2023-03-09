<template>
  <div class="card">
    <div class="card_body">
      <MyTitle
        type="h2"
        size="medium"
        color="primary"
        text="Créez votre propre meuble personnalisé"
      />
      <MyTitle
        type="h3"
        size="subtitle"
        color="black"
        text="Découvrez notre service de customisation de meubles."
      />
      <p class="card_text mb-5">
        Chez Loom Furnitures, tous nos meubles sont personnalisable. Du matériau
        de base à la poignée.<br />
        Du marbre au chêne centenaire en passant par de l’érable torréfié. Nous
        vous proposons un large choix pour coller à vos envie et vos intérieurs.
      </p>
      <MyButton type="primary" text="Je crée mon meuble" />
    </div>
    <div class="card_image">
      <img
        src="/assets/images/custom_block.png"
        class="img-fluid rounded-start"
        alt="meuble"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  width: 80%;
  display: flex;
  flex-flow: row nowrap;
  margin: 90px auto;
  @media screen and (max-width: 800px) {
    flex-flow: column-reverse;
  }
  .card_body {
    background-color: $toned-color;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-self: stretch;
    padding: 75px 100px;
    @media screen and (max-width: 800px) {
      padding: 40px;
      gap: 15px;
    }
    * {
      margin: 0;
    }
    .card_text {
      @include corps;
    }
  }
  .card_image {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
<script>
import MyButton from "@/components/MyButton.vue";
import MyTitle from "@/components/MyTitle.vue";
export default {
  components: {
    MyButton,
    MyTitle,
  },
};
</script>
