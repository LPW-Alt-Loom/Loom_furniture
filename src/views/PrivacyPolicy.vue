<template>
  <div class="privacy-policy">
    <MyTitle
      color="primary"
      text="Politique de confidentialité"
      size="big"
      type="h1"
    />
    <MyTitle
      type="h2"
      size="product_subtitle"
      text="Politique de confidentialité de Loom Furnitures"
      color="primary"
    />
    <p>
      Nous chez Loom Furnitures sommes engagés à protéger la vie privée de nos
      clients et des visiteurs de notre site web. Cette politique de
      confidentialité décrit comment nous collectons, utilisons et protégeons
      les informations personnelles que nous recueillons.
    </p>
    <MyTitle
      type="h2"
      size="product_subtitle"
      text="Collect d'informations"
      color="primary"
    />
    <p>
      Nous collectons plusieurs types d'informations auprès de nos clients et
      visiteurs du site web. Cela inclut :
    </p>
    <ul>
      <li>
        Les informations que vous nous fournissez lorsque vous créez un compte,
        passez une commande ou remplissez un formulaire sur notre site web. Ces
        informations peuvent inclure votre nom, adresse, adresse e-mail et
        numéro de téléphone.
      </li>
      <li>
        Les informations que nous recueillons automatiquement lorsque vous
        naviguez sur notre site web, telles que votre adresse IP, le type de
        navigateur que vous utilisez et les pages que vous visitez.
      </li>
    </ul>
    <MyTitle
      type="h2"
      size="product_subtitle"
      text="Utilisation des informations"
      color="primary"
    />
    <p>
      Nous utilisons les informations que nous collectons pour les raisons
      suivantes :
    </p>
    <ul>
      <li>
        Pour traiter les commandes et livrer les produits que vous avez achetés.
      </li>
      <li>Pour améliorer vore expérience de navigation sur notre site web.</li>
      <li>
        Pour vous envoyer des newsletters et des offres promotionnelles si vous
        avez choisi de les recevoir.
      </li>
      <li>
        Pour vous contacter si nous avons besoin de vous informer d'un
        changement important dans nos politiques ou si nous avons besoin de vous
        contacter concernant une commande que vous avez passée.
      </li>
    </ul>
    <MyTitle
      type="h2"
      size="product_subtitle"
      text="Partage des informations"
      color="primary"
    />
    <p>
      Nous ne vendons, ne louons ni ne partageons vos informations personnelles
      avec des tiers à des fins de marketing sans votre consentement explicite.
      Nous pouvons cependant partager vos informations personnelles avec des
      tiers pour les raisons suivantes :
    </p>
    <ul>
      <li>
        Pour traiter les commandes et livrer les produits que vous avez achetés.
      </li>
      <li>
        Pour respecter les exigences légales, les ordres du tribunal ou les
        enquêtes gouvernementales.
      </li>
      <li>
        Pour protéger les droits, la propriété ou la sécurité de Loom
        Furnitures, de nos clients ou d'autres personnes.
      </li>
    </ul>
    <MyTitle
      type="h2"
      size="product_subtitle"
      text="Sécurité des informations"
      color="primary"
    />
    <p>
      Nous prenons des mesures de sécurité raisonnables pour protéger les
      informations personnelles que nous recueillons contre la perte,
      l'utilisation abusive, l'accès non autorisé, la divulgation, la
      modification ou la destruction. Cela inclut l'utilisation de technologies
      de sécurité telles que des pare-feu et des protocoles de cryptage.
    </p>
    <MyTitle type="h2" size="product_subtitle" text="Cookies" color="primary" />
    <p>
      Nous utilisons des cookies sur notre site web pour améliorer votre
      expérience de navigation et pour collecter des informations sur
      l'utilisation de notre site. Les cookies sont de petits fichiers de
      données qui sont stockés sur votre ordinateur ou votre appareil mobile
      lorsque vous naviguez sur notre site. Vous pouvez désactiver les cookies
      dans les paramètres de votre navigateur si vous préférez.
    </p>
    <MyTitle
      type="h2"
      size="product_subtitle"
      text="Modification de la politique de confidentialité"
      color="primary"
    />
    <p>
      Nous nous réservons le droit de modifier cette politique de
      confidentialité à tout moment en publiant une version mise à jour sur
      notre site web. Nous vous encourageons à consulter régulièrement notre
      politique de confidentialité pour vous assurer que vous êtes au courant de
      tout changement.
    </p>
    <MyTitle type="h2" size="product_subtitle" text="Contact" color="primary" />
    <p>
      Si vous avez des questions ou des préoccupations concernant notre
      politique de confidentialité ou la façon dont nous collectons, utilisons
      ou protégeons vos informations personnelles, veuillez nous contacter à
      l'adresse e-mail suivante :
      <a href="https://privacy@loomfurnitures.com"
        >privacy@loomfurnitures.com </a
      >.
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
.privacy-policy {
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
