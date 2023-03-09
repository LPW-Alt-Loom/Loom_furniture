<template>
  <div class="footer">
    <div class="footer_section">
      <MyTitle color="white" type="h3" size="small" text="Nous contacter" />
      <div class="footer_list">
        <span>Téléphone:</span>
        <p>+44 (0) 1905 789 080</p>
        <span>Adresse:</span>
        <p>
          The Old Pottery<br />
          Unit H, 61 Station Road<br />
          Wickwar, Wotton-under-Edge<br />
          Gloucester<br />
          GL12 8NB<br />
        </p>
        <div>
          <span>Nos réseaux:</span>
          <div class="footer_network">
            <a href="https://www.instagram.com/loomfurniture/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
            <a href="https://www.facebook.com/loomfurniture">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_section">
      <MyTitle color="white" type="h3" size="small" text="E-commerce" />
      <ul class="footer_list">
        <li class="footer_list-item">
          <RouterLink class="footer_link" to="/products/all">Profil</RouterLink>
        </li>
        <li class="footer_list-item">
          <RouterLink class="footer_link" to="/products/all"
            >Mes Commandes</RouterLink
          >
        </li>
        <li class="footer_list-item">
          <RouterLink class="footer_link" to="/cart">Se déconnecter</RouterLink>
        </li>
        <li class="footer_list-item">
          <RouterLink class="footer_link" to="/privacy-policy">
            Conditions Générales de Ventes
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="footer_section">
      <MyTitle color="white" type="h3" size="small" text="Navigation" />
      <ul class="footer_list">
        <li class="footer_list-item">
          <RouterLink class="footer_link" to="/products/all"
            >Catalogue</RouterLink
          >
        </li>
        <li class="footer_navigation-item">
          <RouterLink class="footer_link" to="/products/all"
            >Créer mon meuble</RouterLink
          >
        </li>
        <li class="footer_list-item">
          <RouterLink class="footer_link" to="/cart">Panier</RouterLink>
        </li>
        <li class="footer_list-item">
          <RouterLink class="footer_link" to="/products/all"
            >Mon profil</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
  <div class="copyright">
    <img src="/assets/images/made_in_britain.png" alt="logo make in britain" />
    <div>
      <RouterLink to="/legal-notice">Mentions légales</RouterLink>
      |
      <RouterLink to="/privacy-policy">Politique de confidentialité</RouterLink>
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
.footer {
  display: flex;
  flex-flow: row;
  justify-content: center;
  background-color: $black;
  color: $white;
  padding-top: 40px;
  @media screen and (max-width: 800px) {
    flex-flow: column;
    align-items: center;
    gap: 40px;
  }
  h3 {
    text-align: center;
  }
  &_section {
    width: 18%;
    min-height: 445px;
    display: flex;
    flex-flow: column;
    @media screen and (max-width: 800px) {
      width: 80%;
      min-height: 0;
    }
  }
  &_list {
    display: flex;
    flex-flow: column;
    list-style: none;
    gap: 30px;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      margin: 0;
      padding: 0;
      gap: 20px;
    }
    a,
    span {
      font-family: "pp_morisemibold", sans-serif;
      font-size: rem(16);
    }
    p {
      font-family: "pp_moriregular", sans-serif;
      line-height: 25px;
      margin: 0;
    }
    :-webkit-any-link {
      color: $white;
      &:hover {
        color: $toned-color;
      }
    }
  }
  &_network {
    display: flex;
    gap: 10px;
    a {
      width: 25px;
      height: 25px;
      margin: 1em 0;
      svg {
        width: 100%;
        height: 100%;
        path {
          fill: $white;
        }
      }
    }
  }
}
.copyright {
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  background-color: $black;
  font-family: "Inter", sans-serif;
  gap: 20px;
  font-size: rem(12);
  color: $white;
  @media screen and (max-width: 800px) {
    padding-top: 40px;
  }
  img {
    width: 200px;
  }
  :-webkit-any-link {
    color: $white;

    &:hover {
      color: $toned-color;
    }
  }
}
</style>
