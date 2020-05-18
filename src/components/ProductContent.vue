<template>
  <div class="content is-medium">
    <p class="content origin">
      <em>{{ content.origin }}</em>
    </p>
    <p class="content cooking">
      {{ content.cooking }}
    </p>
  </div>
</template>
<style lang="scss"></style>
<script>
export default {
  name: 'ProductContent',
  data: function() {
    return {
      potatoesContent: {
        'yukon gold': {
          origin: `O Yukon Gold é uma grande variedade de batata caracterizada de maneira mais distinta por sua pele fina, lisa e sem olhos e carne com coloração amarela. Esta batata foi desenvolvida na década de 1960 por Garnet ("Gary") Johnston em Guelph, Ontário, Canadá, com a ajuda de Geoff Rowberry na Universidade de Guelph. A cruz oficial foi feita em 1966 e o 'Yukon Gold' foi finalmente lançado no mercado em 1980.`,
          cooking: `Sua carne úmida e cerosa e seu sabor doce o tornam ideal para ferver, assar e fritar, mas essas batatas também resiste a grelhar, fritar e assar.

          `,
        },
        'batata kennebec': {
          origin: `Kennebec é uma batata branca de maturação média a tardia. Foi criada pelo USDA e selecionada pela Presque Isle Station, Maine, em 1941. Kennebec não está sob proteção de variedades vegetais. Essa variedade de rápido crescimento tem altos rendimentos. Mantém boa qualidade no armazenamento e é cultivado para uso no mercado fresco e para lascar.`,
          cooking: `Sua carne úmida e cerosa e seu sabor doce o tornam ideal para ferver, assar e fritar, mas essas batatas também resistem a grelhar, fritar e assar.

          `,
        },
        'batata bintje': {
          origin: `Bintje é uma variedade de batata de maturação intermediária, criada na Holanda pelo professor da escola Frisian K.L. de Vries em 1904 (Munstersen x Fransen) e comercializado pela primeira vez em 1910. O nome da batata, um diminutivo de Benedict, foi emprestado de um de seus ex-alunos.`,
          cooking: `Sua carne úmida e cerosa e seu sabor doce o tornam ideal para ferver, assar e fritar, mas essas batatas também resistem a grelhar, fritar e assar.

          `,
        },
        vitelotte: {
          origin: `Vitelotte, (também chamada Vitelotte noire, Négresse ou Truffe de Chine), é uma variedade francesa gourmet de batata violeta azul. Foi cultivado na França pelo menos desde o início do século XIX.`,
          cooking: `As batatas 'Vitelotte' têm pele azul escura, quase preta, e polpa azul violeta escura; eles têm um sabor característico de nozes e cheiro de castanhas. A cor é retida no cozimento e é devida a pigmentos naturais no grupo antocianina de flavonóides. As plantas amadurecem tarde e, em comparação com as variedades modernas, têm um rendimento relativamente baixo. Os tubérculos são alongados com olhos fundos; são de pele grossa e, portanto, mantêm-se bem.

.

          `,
        },
        'batata ratte': {
          origin: `A batata Ratte (também conhecida como La Ratte, La Reine Ratte du Touquet ou Asparges) é uma batata pequena, com sabor de noz único e textura suave e amanteigada. Diz-se que o sabor a noz provém dos tipos de solos em que a variedade é cultivada pelos agricultores franceses. Esta batata tem uma forma ovalada, geralmente com uma ligeira curva e pele manchada de ouro. A carne dessa batata é um amarelo dourado e sua textura se mantém uniforme ao cozinhar. A variedade originou-se na Dinamarca ou na França, no final do século 19 e é a favorita dos chefs franceses`,
          cooking: `os chefs recomendam esmagá-los ou usá-los em saladas ou caçarolas. O New York Times informou que seu sabor "sugere ricamente avelãs e castanhas". Essa variedade é conhecida por sua excelente textura e sabor, normalmente é colhida à mão e com baixo rendimento. Por causa do baixo rendimento e colheita manual, essa variedade obtém um preço alto e é conhecida como batata boutique.


          `,
        },
      },
    };
  },
  props: {
    productName: String,
  },
  computed: {
    content: function() {
      return this.potatoesContent[this.productName];
    },
  },
};
</script>
