<script>
export default {
  data() {
    return {
      classname: `button -${this.type}`,
    };
  },
  props: {
    text: String,
    link: String,
    type: String,
  },
};
</script>
<template>
  <a v-if="link" :href="link" :class="classname">{{ text }}</a>
  <button v-else :class="classname">{{ text }}</button>
</template>
<style lang="scss" scoped>
.button {
  display: block;
  width: 100%;
  @include button;
  height: 50px;
  padding: 15px;
  text-align: center;
  &.-primary {
    background-color: $primary-color;
    color: $white;
  }
  &.-toned {
    background-color: $toned-color;
    color: $black;
    border: none;
  }
  &.-white {
    background-color: $white;
    color: $primary-color;
  }
  &.-outline_primary {
    background-color: $white;
    color: $primary-color;
    border: 1px solid $primary-color;
  }
  &.-outline_white {
    background-color: transparent;
    color: $white;
    border: 1px solid $white;
  }
  &:hover {
    color: $white;
    background: $secondary-color;
  }
}
</style>
