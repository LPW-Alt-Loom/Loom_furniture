<script>
export default {
  data() {
    return {
      classname: `title -${this.size} -${this.type} -${this.color}`,
    };
  },
  props: {
    text: String,
    type: String,
    size: String,
    color: String,
  },
};
</script>
<template>
  <h1 v-if="type === 'h1'" :class="classname">{{ text }}</h1>
  <h2 v-else-if="type === 'h2'" :class="classname">{{ text }}</h2>
  <h2 v-else-if="type === 'h2_uppercase'" :class="classname">{{ text }}</h2>
  <h3 v-else-if="type === 'h3'" :class="classname">{{ text }}</h3>
  <h4 v-else-if="type === 'h4'" :class="classname">{{ text }}</h4>
  <h5 v-else :class="classname">{{}}</h5>
</template>
<style lang="scss" scoped>
.title {
  font-family: "Krylon", sans-serif;
  font-weight: normal;
  font-size: rem(60);
  &.-big {
    font-size: rem(60);
    text-align: center;
    margin-top: 0;
    margin-bottom: 60px;
    padding-top: 60px;
  }
  &.-big_corps {
    font-family: "pp_moriregular_italic", sans-serif;
    font-weight: 400;
  }
  &.-medium {
    font-size: rem(40);
    line-height: rem(50);
  }
  &.-small {
    font-size: rem(30);
  }
  &.-subtitle {
    @include subtitle;
  }
  &.-product_subtitle {
    font-family: "pp_moriextralight", sans-serif;
    font-size: rem(20);
    line-height: 145%;
  }
  &.-h2_uppercase {
    text-transform: uppercase;
  }
  &.-primary {
    color: $primary-color;
  }
  &.-toned {
    color: $toned-color;
  }
  &.-white {
    color: $white;
  }
  &.-black {
    color: $black;
  }
}
</style>
