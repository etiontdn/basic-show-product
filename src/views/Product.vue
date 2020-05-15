<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-half">
        <div class="">
          <figure class="image">
            <img
              class="is-rounded"
              :src="imagePotato"
              alt="placeholder+image"
            />
            <figcaption>Potato etc</figcaption>
          </figure>
        </div>
      </div>

      <div class="column is-one-half">
        <div class="content">
          <h1 class="title is-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </h1>

          <p class="content is-medium">
            <strong>Pellentesque habitant morbi tristique</strong>
            senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper.
            <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
            erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.
            Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum
            orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis
            pulvinar facilisis. Ut felis.
          </p>
        </div>
      </div>
    </div>
    <button class="button is-primary is-large">Order Now!</button>
  </div>
</template>

<style scoped lang="scss"></style>

<script>
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
        },
        'kennebec potato': {
          default: './potato_kennebec.jpg',
          small: '.potato_kennebec-small.jpg',
        },
        'bintje potato': {
          default: './potato_bintje.jpg',
          small: '.potato_bintje-small.jpg',
        },
        'vitelotte potato': {
          default: './potato_vitelotte.jpg',
          small: '.potato_vitelotte-small.jpg',
        },
        'ratte potato': {
          default: './potato_ratte.jpg',
          small: '.potato_ratte-small.jpg',
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
  },
};
</script>
