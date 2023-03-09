<template>
  <div class="materials-page">
    <MyTitle color="primary" text="Nos matériaux" size="big" type="h1" />
    <div class="materials-page_list">
      <img src="/assets/images/Sample-Gun-metal-grey.jpg" alt="material" />
      <div>
        <p>
          Loom Furnitures s'engage à n'utiliser que des matériaux de haute
          qualité pour créer des meubles luxueux et durables. Nous sommes fiers
          d'offrir à nos clients une expérience de magasinage exceptionnelle, où
          chaque meuble est fabriqué à partir de matériaux locaux ou européens.
          Nous contrôlons chaque étape de la production, de la sélection de nos
          fournisseurs jusqu'à la livraison chez nos clients.
        </p>
        <p>
          Nous utilisons une variété de matériaux, notamment le bois massif, le
          cuir véritable, le marbre, le verre trempé et le métal de haute
          qualité. Tous nos bois sont issus de forêts gérées de manière durable,
          tandis que notre cuir est fabriqué à partir de peaux de haute qualité,
          ce qui garantit une finition élégante et durable pour chaque pièce de
          mobilier.
        </p>
        <p>
          Notre équipe de designers expérimentés crée des meubles luxueux et
          fonctionnels qui sont conçus pour durer. Nous mettons l'accent sur la
          qualité et la durabilité de nos matériaux afin que chaque meuble que
          nous fabriquons soit un investissement qui durera de nombreuses
          années. En fait, nous sommes tellement confiants de la qualité de nos
          produits que nous offrons une garantie à vie pour chaque meuble que
          vous achetez chez nous.
        </p>
        <p>
          Chez Loom Furnitures, nous sommes passionnés par la création de
          meubles exceptionnels qui reflètent le style et le goût de nos
          clients. Nous sommes fiers de notre engagement envers la qualité et la
          durabilité de nos matériaux et nous nous efforçons continuellement de
          dépasser les attentes de nos clients en termes de qualité, de style et
          de service.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MyTitle from "@/components/MyTitle.vue";
export default {
  components: {
    MyTitle,
  },
};
</script>
<style lang="scss" scoped>
.materials-page {
  padding: 0 160px 40px;
  @media screen and (max-width: 800px) {
    padding: 0 20px 40px;
  }
  &_list {
    display: flex;
    flex-flow: row;
    align-items: center;
    @media screen and (max-width: 800px) {
      flex-flow: wrap row;
    }
    img {
      width: 50%;
      @media screen and (max-width: 800px) {
        width: 100%;
      }
    }
    div {
      padding: 80px;
      @media screen and (max-width: 800px) {
        padding: 0 20px;
      }
    }
  }
}
* {
  margin: 30px 0;
}
p {
  @include corps;
}
h2 {
  font-weight: 500;
}
</style>
