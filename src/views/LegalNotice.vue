<template>
  <div class="legal_notice">
    <MyTitle color="primary" text="Mentions légales" size="big" type="h1" />
    <p>
      Conformément aux dispositions des Articles 6-III et 19 de la Loi
      n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique,
      dite L.C.E.N., il est porté à la connaissance des utilisateurs et
      visiteurs, ci-après l'"Utilisateur", du site
      https://loom-furniture.raph-lem.com/ , ci-après le "Site", les présentes
      mentions légales.
    </p>
    <p>
      La connexion et la navigation sur le Site par l’Utilisateur implique
      acceptation intégrale et sans réserve des présentes mentions légales.
    </p>
    <p>
      Ces dernières sont accessibles sur le Site à la rubrique « Mentions
      légales ».
    </p>
    <MyTitle
      type="h2"
      size="product_subtitle"
      text="Article 1 - L'ÉDITEUR"
      color="primary"
    />
    <p>
      L’édition et la direction de la publication du Site est assurée par
      Raphaël Lemoine, domiciliée 4 rue Tharradin, dont le numéro de téléphone
      est 0381994734, et l'adresse e-mail mmimontbeliard@testmail.com.
    </p>
    <MyTitle
      type="h2"
      size="product_subtitle"
      text="Article 2 - L'HÉBERGEUR"
      color="primary"
    />
    <p>
      L'hébergeur du Site est la société Infomaniak, dont le siège social est
      situé au 1227, Genève, Suisse , avec le numéro de téléphone : 0381993525 +
      adresse mail de contact
    </p>
    <MyTitle
      type="h2"
      size="product_subtitle"
      text="Article 3 - L'ACCÈS AU SITE"
      color="primary"
    />
    <p>
      Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
      majeure, interruption programmée ou non et pouvant découlant d’une
      nécessité de maintenance.
    </p>
    <p>
      En cas de modification, interruption ou suspension du Site, l'Editeur ne
      saurait être tenu responsable.
    </p>
    <MyTitle
      type="h2"
      size="product_subtitle"
      text="Article 4 - COLLECTE DES DONNÉES"
      color="primary"
    />
    <p>
      Le Site assure à l'Utilisateur une collecte et un traitement
      d'informations personnelles dans le respect de la vie privée conformément
      à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers
      et aux libertés.
    </p>
    <p>
      En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978,
      l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression
      et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit
      :
    </p>
    <p>1 par mail à l'adresse email contact.loomfurnitures@gmail.com</p>
    <p>
      Toute utilisation, reproduction, diffusion, commercialisation,
      modification de toute ou partie du Site, sans autorisation de l’Editeur
      est prohibée et pourra entraînée des actions et poursuites judiciaires
      telles que notamment prévues par le Code de la propriété intellectuelle et
      le Code civil.
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
.legal_notice {
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
