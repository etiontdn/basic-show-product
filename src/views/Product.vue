<template>
  <div class="container has-text-centered">
    <h1 class="title is-1">{{ title }}</h1>
    <div class="columns">
      <div class="column is-one-half">
        <div class="">
          <figure class="image">
            <img
              class="is-rounded"
              :src="imagePotato"
              alt="Batatas de todos os tipos"
            />
            <figcaption>{{ imageCaption }}</figcaption>
          </figure>
        </div>
      </div>

      <div class="column is-one-half">
        <ProductContent
          id="product-content"
          :product-name="name"
        ></ProductContent>
      </div>
    </div>
    <router-link :to="{ path: '/contato' }">
      <button class="button is-primary is-large">Ordene já</button>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.container {
  min-height: 80vh;
}
</style>

<script>
import ProductContent from '@/components/ProductContent.vue';
export default {
  name: 'Product',
  props: {
    name: String,
  },
  data: function() {
    return {
      imgSrc: {
        'yukon gold': {
          default: './potato_yukon.jpg',
          small: '.potato_yukon-small.jpg',
          caption: 'Batatas Yukon Gold',
        },
        'batata kennebec': {
          default: './potato_kennebec.jpg',
          small: '.potato_kennebec-small.jpg',
          caption: 'Batatas Kennebec',
        },
        'batata bintje': {
          default: './potato_bintje.jpg',
          small: '.potato_bintje-small.jpg',
          caption: 'Batatas Bintje',
        },
        vitelotte: {
          default: './potato_vitelotte.jpg',
          small: '.potato_vitelotte-small.jpg',
          caption: 'Batatas Vitelotte',
        },
        'batata ratte': {
          default: './potato_ratte.jpg',
          small: '.potato_ratte-small.jpg',
          caption: 'Batatas Ratte',
        },
      },
    };
  },
  computed: {
    title: function() {
      return this.name
        .split(' ')
        .map((capitalize) => {
          return capitalize.slice(0, 1).toUpperCase() + capitalize.slice(1);
        })
        .join(' ');
    },
    imagePotato: function() {
      var images = require.context('../assets/potatoes', false, /\.jpg$/);
      return images(this.imgSrc[this.name].default);
    },
    imageCaption: function() {
      return this.imgSrc[this.name].caption;
    },
    imagePotatoSmall: function() {
      var images = require.context('../assets/potatoes', false, /\.jpg$/);
      return images(this.imgSrc[this.name].small);
    },
  },
  components: {
    ProductContent,
  },
};
</script>
