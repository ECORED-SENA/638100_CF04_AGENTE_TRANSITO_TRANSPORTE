<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El presente componente formativo da a conocer los elementos fundamentales que deben tener en cuenta los actores involucrados en los diferentes tipos accidentes de tránsito, principalmente los aspectos normativos, los cuales permiten tomar decisiones asertivas dentro de este contexto.
    p.mb-5 Una breve revisión de los temas vistos, se encuentran en el siguiente esquema:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema general de este componente formativo, que enuncia las temáticas desarrolladas en el mismo y destaca aspectos clave estudiados. Tema principal: Resolución de conflictos en accidentes de tránsito. Temas integradores: 1) Mecanismos alternativos para solución de conflictos, que vinculan procesos de conciliación, mediación y arbitraje. 2) Desarrollo de habilidades comunicativas, que envuelve la comunicación asertiva, el conocimiento del tema, la imparcialidad y escucha atenta, la seguridad y la argumentación. 3) Conciliación en accidentes de tránsito, con soporte en la ley 2251 del 2022 y que estipula las generalidades de los actos conciliables y conciliables y la conciliación judicial y extrajudicial. 4) Informe, donde se registran los daños materiales, las pruebas y las evidencias de lesiones, muertes o hechos delictivos.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
