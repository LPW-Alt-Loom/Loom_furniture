<template>
  <div class="order-view">
    <MyTitle
      type="h1"
      text="Valider ma commande"
      color="primary"
      size="order_title"
    />
    <form action="" class="order-view_form" @submit="onSubmit">
      <div v-if="step === 1" class="order-view_step">
        <MyTitle
          size="medium"
          color="primary"
          text="Informations de facturations"
          type="h2"
        />
        <div class="column -size-6">
          <div class="order-view_field">
            <label class="order-view_label" for="firstname">Prénom</label>
            <input
              class="order-view_input"
              id="firstname"
              type="text"
              v-model="billing.first_name"
            />
          </div>
        </div>
        <div class="column -size-6">
          <div class="order-view_field">
            <label class="order-view_label" for="lastname">Nom</label>
            <input
              class="order-view_input"
              id="lastname"
              type="text"
              v-model="billing.last_name"
            />
          </div>
        </div>
        <div class="column -size-6">
          <div class="order-view_field">
            <label class="order-view_label" for="address_1">Adresse</label>
            <input
              class="order-view_input"
              id="address_1"
              type="text"
              v-model="billing.address_1"
            />
          </div>
        </div>
        <div class="column -size-6">
          <div class="order-view_field">
            <label class="order-view_label" for="address_2"
              >Complément d'adresse</label
            >
            <input
              class="order-view_input"
              id="address_2"
              type="text"
              v-model="billing.address_2"
            />
          </div>
        </div>
        <div class="column -size-6">
          <div class="order-view_field">
            <label class="order-view_label" for="city">Ville</label>
            <input
              class="order-view_input"
              id="city"
              type="text"
              v-model="billing.city"
            />
          </div>
        </div>
        <div class="column -size-6">
          <div class="order-view_field">
            <label class="order-view_label" for="state">État/Région</label>
            <input
              class="order-view_input"
              id="state"
              type="text"
              v-model="billing.state"
            />
          </div>
        </div>
        <div class="column -size-6">
          <div class="order-view_field">
            <label class="order-view_label" for="postcode">Code postal</label>
            <input
              class="order-view_input"
              id="postcode"
              type="text"
              v-model="billing.postcode"
            />
          </div>
        </div>
        <div class="column -size-6">
          <div class="order-view_field">
            <label class="order-view_label" for="country">Pays</label>
            <select
              id="country"
              class="order-view_input"
              v-model="billing.country"
            >
              <option value="DE">Allemagne</option>
              <option value="UK">Royaume-Uni</option>
              <option value="CH">Suisse</option>
              <option value="IT">Italie</option>
              <option value="FR">France</option>
              <option value="ES">Espagne</option>
            </select>
          </div>
        </div>
        <div class="column -size-6">
          <div class="order-view_field">
            <label class="order-view_label" for="email">Email</label>
            <input
              class="order-view_input"
              id="email"
              type="email"
              v-model="billing.email"
            />
            <span v-if="!validation.email" class="order-view_error"
              >Veuillez saisir un email valide</span
            >
          </div>
        </div>
        <div class="column -size-6">
          <div class="order-view_field">
            <label class="order-view_label" for="phone">Téléphone</label>
            <input
              class="order-view_input"
              id="phone"
              type="text"
              v-model="billing.phone"
            />
          </div>
        </div>
        <div class="column -size-12 delivery_address">
          <input type="checkbox" id="other-address" v-model="otherAddress" />
          <label for="other-address"
            >Je souhaite livrer à une autre adresse</label
          >
        </div>
        <div class="order-view_shipping" v-if="otherAddress">
          <MyTitle
            size="medium"
            color="primary"
            text="Informations de livraison"
            type="h2"
          />
          <div class="column -size-6">
            <div class="order-view_field">
              <label class="order-view_label" for="shipping-firstname"
                >Prénom</label
              >
              <input
                class="order-view_input"
                id="shipping-firstname"
                type="text"
                v-model="shipping.first_name"
              />
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view_field">
              <label class="order-view_label" for="shipping-lastname"
                >Nom</label
              >
              <input
                class="order-view_input"
                id="shipping-lastname"
                type="text"
                v-model="shipping.last_name"
              />
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view_field">
              <label class="order-view_label" for="shipping-address_1"
                >Adresse</label
              >
              <input
                class="order-view_input"
                id="shipping-address_1"
                type="text"
                v-model="shipping.address_1"
              />
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view_field">
              <label class="order-view_label" for="shipping-address_2"
                >Complément d'adresse</label
              >
              <input
                class="order-view_input"
                id="shipping-address_2"
                type="text"
                v-model="shipping.address_2"
              />
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view_field">
              <label class="order-view_label" for="shipping-city">Ville</label>
              <input
                class="order-view_input"
                id="shipping-city"
                type="text"
                v-model="shipping.city"
              />
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view_field">
              <label class="order-view_label" for="shipping-state"
                >État/Région</label
              >
              <input
                class="order-view_input"
                id="shipping-state"
                type="text"
                v-model="shipping.state"
              />
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view_field">
              <label class="order-view_label" for="shipping-postcode"
                >Code postal</label
              >
              <input
                class="order-view_input"
                id="shipping-postcode"
                type="text"
                v-model="shipping.postcode"
              />
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view_field">
              <label class="order-view_label" for="shipping-country"
                >Pays</label
              >
              <select
                id="country"
                class="order-view_input"
                v-model="shipping.country"
              >
                <option value="DE">Allemagne</option>
                <option value="UK">Royaume-Uni</option>
                <option value="CH">Suisse</option>
                <option value="IT">Italie</option>
                <option value="FR">France</option>
                <option value="ES">Espagne</option>
              </select>
            </div>
          </div>
        </div>
        <!--  -->
        <MyButton type="primary" text="Étape suivante" @click="changeStep(2)" />
      </div>
      <div v-if="step === 2" class="order-view_step">
        <MyTitle
          size="medium"
          color="primary"
          text="Informations de paiement"
          type="h2"
        />
        <div class="column -size-12">
          <div class="order-view_field">
            <label class="order-view_label" for="card-number"
              >Numéro de carte</label
            >
            <input
              class="order-view_input"
              type="text"
              id="card-number"
              v-model="payment.number"
            />
            <span v-if="!validation.number" class="order-view_error"
              >Veuillez saisir un numéro de carte valide</span
            >
          </div>
        </div>
        <div class="column -size-6">
          <div class="order-view_field">
            <label class="order-view_label" for="CVV">CVV</label>
            <input
              class="order-view_input"
              id="CVV"
              type="text"
              v-model="payment.cvv"
            />
            <span v-if="!validation.cvv" class="order-view_error"
              >Veuillez saisir CVV valide</span
            >
          </div>
        </div>
        <div class="column -size-6">
          <div class="order-view_field">
            <label class="order-view_label" for="expiration"
              >Date d'expiration</label
            >
            <input
              class="order-view_input"
              id="expiration"
              type="date"
              :min="dates.min"
              :max="dates.max"
              v-model="payment.date"
            />
          </div>
        </div>
        <PageLoader v-if="loading" />
        <div v-else class="order-view_buttons">
          <MyButton text="Retour" type="primary" @click="step--" />
          <MyButton
            type="primary"
            text="Valider ma commande"
            @click="confirmInformation"
          />
        </div>
        <p
          v-if="feedback.message"
          :class="['order-view_feedback', `-is-type-${feedback.type}`]"
        >
          {{ feedback.message }}
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";
import { wooCommerce } from "@/utils/axios";
import PageLoader from "@/components/PageLoader.vue";
import MyTitle from "@/components/MyTitle.vue";
export default {
  components: { PageLoader, MyButton, MyTitle },
  data() {
    return {
      otherAddress: false,
      loading: false,
      step: 1,
      validation: {
        email: true,
        number: true,
        cvv: true,
      },
      // type success || error
      feedback: { type: null, message: null },
      billing: {
        first_name: "",
        last_name: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        postcode: "",
        country: "",
        email: "",
        phone: "",
      },
      shipping: {
        first_name: "",
        last_name: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        postcode: "",
        country: "",
      },
      payment: {
        number: "",
        cvv: "",
        date: "",
      },
    };
  },
  computed: {
    dates() {
      const now = new Date();
      const in3years = new Date(
        new Date().setFullYear(new Date().getFullYear() + 3)
      );
      return {
        min: now.toISOString().split("T")[0],
        max: in3years.toISOString().split("T")[0],
      };
    },
  },
  methods: {
    testPayment() {
      this.validation.number = /\(|\)|\d{16}$/.test(this.payment.number);
      // equals to this.payment.number.length === 16 && /^[0-9]*$/.test(this.payment.number)
      this.validation.cvv = /\(|\)|\d{3}$/.test(this.payment.cvv);
      // equals to this.payment.cvv.length === 3 && /^[0-9]*$/.test(this.payment.cvv)
      return this.validation.number && this.validation.cvv;
    },
    async confirmInformation() {
      if (!this.testPayment()) return;
      this.loading = true;
      this.feedback = { type: null, message: null };
      const line_items = this.$store.state.cart.map((product) => {
        return {
          product_id: product.id,
          quantity: product.quantity,
        };
      });
      // Try catch block will capture any error that occurs in the try {} part
      try {
        const response = await wooCommerce.post("/wc/v3/orders", {
          payment_method: "bacs",
          payment_method_title: "Direct Bank Transfer",
          set_paid: true,
          billing: this.billing,
          shipping: this.otherAddress ? this.shipping : this.billing,
          line_items: line_items,
          shipping_lines: [
            {
              method_id: "flat_rate",
              method_title: "Flat Rate",
              total: "10.00",
            },
          ],
        });
        // Request has succeeded
        this.$store.commit("emptyCart");
        this.loading = false;
        this.feedback = {
          type: "success",
          message: "Votre commande a bien été enregistrée",
        };
        localStorage.setItem("order", JSON.stringify(response.data));
        this.$router.push({ name: "cart-order-thank-you" });
      } catch (err) {
        // Request has failed
        this.loading = false;
        this.feedback = {
          type: "error",
          message: "Désolé, une erreur est survenue",
        };
        console.log(err);
      }
    },
    changeStep(step) {
      if (step === 2) {
        // Email not null AND valid email matching pattern 'demo@demo.fr' (RegExp)
        this.validation.email =
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            this.billing.email
          );
        if (this.validation.email) this.step = step;
      }
    },
    onSubmit($event) {
      $event.preventDefault();
    },
  },
};
</script>
<style lang="scss">
.order-view {
  padding: 60px;
  &_step {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    h2 {
      grid-column: 1 / span 2;
    }
  }
  .delivery_address {
    grid-column: 1 / span 2;
  }
  &_shipping {
    grid-column: 1 / span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    h2 {
      grid-column: 1 / span 2;
    }
  }
  &_field {
    display: flex;
    flex-flow: column wrap;
  }
  &_label {
    @include corps;
    font-weight: 500;
  }
  &_input {
    padding: 10px;
    margin-top: 10px;
  }
  &_error {
    margin-top: 5px;
    color: red;
  }
  &_feedback {
    font-size: 20px;
    font-weight: 700;
    &.-is-type-success {
      color: #243b3b;
    }
    &.-is-type-error {
      color: #f34242;
    }
  }
  .order-view_buttons {
    grid-column: 1 / span 2;
    display: flex;
    gap: 30px;
  }
}
</style>
