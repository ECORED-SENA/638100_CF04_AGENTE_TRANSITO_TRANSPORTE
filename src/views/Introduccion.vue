<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pt-5
          .row.align-items-center.mb-5
            .col-12
              p.mb-0 Bienvenido a este componente formativo, para comenzar el recorrido por el mismo, revise la información que se presenta a continuación.
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/1TtzY33wBow" title="Aspectos básicos para la resolución de conflictos en eventos de tránsito" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Aspectos básicos para la resolución de conflictos en eventos de tránsito

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
