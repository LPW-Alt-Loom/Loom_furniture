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
      <MyButton type="primary" text="Je crée mon meuble" link="/" />
    </div>
    <div class="card_image">
      <img
        src="https://via.placeholder.com/800x400"
        class="img-fluid rounded-start"
        alt="example"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: $toned-color;
  height: 600px;
  margin: auto auto 125px;
  .card_body {
    * {
      margin: 0;
    }
    grid-column: 1 / 6;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    padding: 75px 100px;
    .card_text {
      @include corps;
    }
  }
  .card_image {
    grid-column: 6 / 13;
    img {
      width: 100%;
      height: 100%;
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
