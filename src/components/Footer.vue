<template>
  <footer class="footer has-background-primary">
    <div class="content container is-medium">
      <div class="columns">
        <div class="column">
          <div class="title-wrapper">
            <img
              class="logo"
              width="36px"
              height="36px"
              src="../assets/potato.svg"
              alt="Batata"
            />
            <h3 class="title is-3">Batatarcado</h3>
          </div>
          <div class="about">
            <div class="subtitle">Sobre Nós</div>
            <p class="content">
              Sed lorem ipsum dolor sit amet et nullam consequat feugiat
              consequat magna adipiscing tempus etiam dolore veroeros. eget
              dapibus mauris.
            </p>
          </div>
        </div>
        <div class="column">
          <h3 class="title is-3 contact">Como nos contatar</h3>
          <div class="contact-container">
            <div class="container">
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <span class="subtitle">Endereço:</span>
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <span>Lorem Ipsum, 41, LI</span>
                  </div>
                </div>
              </div>
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <span class="subtitle">Telefone:</span>
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <span>(00) 00000-0000</span>
                  </div>
                </div>
              </div>
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <span class="subtitle">Email:</span>
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <span>istonaoexiste@email.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="scss">
.contact {
  margin-top: 1.3333em;
}
.title-wrapper {
  display: flex;
}
.address > p {
  display: flex;
  align-items: stretch;
}
</style>
<script>
export default {
  name: 'Footer',
};
</script>
