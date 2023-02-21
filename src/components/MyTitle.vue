<script>
export default {
  data() {
    return {
      classname: `title -${this.size}`,
    };
  },
  props: {
    text: String,
    type: String,
    size: String,
  },
};
</script>
<template>
  <h1 v-if="type === 'h1'" :class="classname">{{ text }}</h1>
  <h2 v-else-if="type === 'h2'" :class="classname">{{ text }}</h2>
  <h3 v-else-if="type === 'h3'" :class="classname">{{ text }}</h3>
  <h4 v-else-if="type === 'h4'" :class="classname">{{ text }}</h4>
  <h5 v-else :class="classname">{{}}</h5>
</template>
<style lang="scss" scoped>
.title {
  font-family: "Krylon", sans-serif;
  font-weight: bold;
  font-size: rem(60);
  &.-big {
    font-size: rem(60);
    text-align: center;
  }
  &.-medium {
    font-size: rem(40);
    line-height: rem(50);
  }
  &.-small {
    font-size: rem(30);
  }
}
</style>
