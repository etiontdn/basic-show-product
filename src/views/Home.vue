<template>
  <div class="container has-text-centered main-container">
    <div class="product-preview">
      <h1 class="title is-1">Yukon Gold</h1>
      <div class="columns">
        <div class="column is-one-half">
          <router-link :to="'/produto/yukon'">
            <figure class="image">
              <img
                class="is-rounded has-text-white"
                src="../assets/potatoes/potato_yukon.jpg"
                alt="Batatas de todos os tipos"
              />
            </figure>
          </router-link>
        </div>

        <div class="column is-one-half text-column">
          <p class="content is-large">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
      </div>
    </div>
    <div class="product-preview">
      <h1 class="title is-1">Batata Kennebec</h1>
      <div class="columns">
        <div class="column is-one-half">
          <router-link :to="'produto/kennebec'" class="">
            <figure class="image">
              <img
                class="is-rounded"
                src="../assets/potatoes/potato_kennebec.jpg"
                alt="Batatas de todos os tipos"
              />
            </figure>
          </router-link>
        </div>
        <div class="column is-one-half text-column">
          <p class="content is-large">
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat
          </p>
        </div>
      </div>
    </div>
    <div class="product-preview">
      <h1 class="title is-1">Batata Bintje</h1>
      <div class="columns">
        <div class="column is-one-half">
          <router-link :to="'produto/bintje'" class="">
            <figure class="image">
              <img
                class="is-rounded"
                src="../assets/potatoes/potato_bintje.jpg"
                alt="Batatas de todos os tipos"
              />
            </figure>
          </router-link>
        </div>

        <div class="column is-one-half text-column">
          <p class="content is-large">
            Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
    <div class="product-preview">
      <h1 class="title is-1">Vitelotte</h1>
      <div class="columns">
        <div class="column is-one-half">
          <router-link :to="'produto/vitelotte'" class="">
            <figure class="image">
              <img
                class="is-rounded"
                src="../assets/potatoes/potato_vitelotte.jpg"
                alt="Batatas de todos os tipos"
              />
            </figure>
          </router-link>
        </div>
        <div class="column is-one-half text-column">
          <p class="content is-large">
            Duis sed magna sollicitudin, pharetra nunc a, accumsan magna. Mauris
            pulvinar nulla nisl, et pellentesque felis gravida et. Suspendisse
            quis ultrices mauris. Cras libero velit, cursus pellentesque
            bibendum vel, gravida nec lorem.
          </p>
        </div>
      </div>
    </div>
    <div class="product-preview">
      <h1 class="title is-1">Batata Ratte</h1>
      <div class="columns">
        <div class="column is-one-half">
          <router-link :to="'produto/ratte'" class="">
            <figure class="image">
              <img
                class="is-rounded"
                src="../assets/potatoes/potato_ratte.jpg"
                alt="Batatas de todos os tipos"
              />
            </figure>
          </router-link>
        </div>
        <div class="column is-one-half text-column">
          <p class="content is-large">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aenean congue leo diam, at consequat tortor
            interdum lacinia. Donec odio lacus, tempus nec facilisis id, blandit
            eu lacus.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.product-preview {
  margin-bottom: 4rem;
}

.text-column {
  display: flex;
  align-items: center;
  text-align: left;
}

@media only screen and (min-width: 480px) {
  .product-preview {
    margin-bottom: 10rem;
  }
}
</style>

<script>
export default {
  name: 'Home',
};
</script>
