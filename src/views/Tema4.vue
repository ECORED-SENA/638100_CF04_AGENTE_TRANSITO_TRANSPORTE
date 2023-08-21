<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 El informe policial de accidente de tránsito en caso de daños materiales
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p Las actuaciones en casos de accidentes de tránsito están enmarcadas en los parámetros normados de la Ley 769 de 2002 “Código Nacional de Tránsito”, donde es imperioso reconocer los procedimientos que allí se derivan.
        p Por ejemplo, para hablar de accidentes de tránsito de solo daños materiales, se estipula en el artículo 44 de la Ley 769 de 2002 el procedimiento a realizar, el cual debe enfocarse directamente a tratar de resolver el incidente de manera rápida y conciliatoria, despejando la vía lo más rápido posible.
        p.mb-0 Sin embargo, para hablar de accidentes de tránsito con personas lesionadas o fallecidas las cosas son diferentes ya que el marco jurídico se extiende al Código Penal Ley 599 2000 al haber lesiones personales u homicidio en accidente de tránsito lo que lo convierte en un hecho delictivo que debe ser puesto a disposición de la autoridad judicial de la jurisdicción donde haya ocurrido el hecho siguiendo los parámetros de la Ley 906 de 2004 Código de Procedimiento Penal, atendiendo el caso cumpliendo todos los protocolos de policía judicial diligenciando los formatos de policía judicial que sean necesarios para cada caso.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema4/img1.png', style="width: 450px" ,alt='').m-auto
    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema4/img1.svg" alt="")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-1 #[b Parámetros: informe policial]
                  p.text-small Se invita a revisar los parámetros básicos que se deben tener en cuenta para diligenciar el informe policial en el siguiente documento.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_2_parametros_informe_policial.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema4',
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
