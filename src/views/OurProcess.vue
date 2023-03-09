<template>
  <div class="process_page">
    <MyTitle
      color="primary"
      text="Nos processus de fabrications"
      size="big"
      type="h1"
    />
    <p>
      Les maîtres artisans qui travaillent pour Loom Furnitures ont été formés
      dans les meilleures écoles d'artisanat européennes, ce qui garantit leur
      compétence et leur savoir-faire. Ils sont donc en mesure de créer des
      meubles qui répondent aux exigences les plus élevées en matière de
      qualité, de fonctionnalité et d'esthétique.
    </p>
    <p>
      L'atelier de Loom Furnitures est situé en Grande-Bretagne, où tous les
      meubles sont fabriqués et assemblés à la main. En utilisant des techniques
      traditionnelles, l'entreprise s'assure que chaque meuble est construit
      avec soin et précision, ce qui lui confère une grande durabilité et une
      qualité supérieure.
    </p>
    <p>
      L'entreprise insiste sur l'importance de respecter les traditions et les
      meilleurs procédés de fabrication pour garantir une qualité optimale. Cela
      implique l'utilisation de matériaux de qualité supérieure et de techniques
      de fabrication éprouvées qui ont été affinées au fil des ans. En utilisant
      ces procédés, l'entreprise est en mesure de créer des meubles qui sont non
      seulement beaux, mais qui résistent également à l'épreuve du temps.
    </p>
    <p>
      En résumé, Loom Furnitures est une entreprise qui valorise l'expertise
      artisanale, la qualité et la durabilité. Elle est fière de ses maîtres
      artisans et de leur savoir-faire, ainsi que de son engagement à respecter
      les traditions et les meilleurs procédés de fabrication. Tout cela se
      traduit par des meubles de qualité supérieure qui répondent aux attentes
      les plus élevées des clients en matière de fonctionnalité, d'esthétique et
      de durabilité.
    </p>
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
.process_page {
  padding: 0 160px 40px;
  @media screen and (max-width: 800px) {
    padding: 0 20px 40px;
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
