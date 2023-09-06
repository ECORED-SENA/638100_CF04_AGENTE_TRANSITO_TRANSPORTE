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

    p.mb-4 A continuación, conozca y profundice en algunos apartes relevantes para el diligenciamiento del informe policial de accidentes de tránsito:

    .tarjeta.tarjeta--azul
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row
            .col-lg-6.mb-4.mb-lg-0
              p #[b Identificación y ubicación]
              p.mb-4 Se indica qué organismo de tránsito, debe estar registrado con un respectivo código DANE, ubicando la oficina más cerca de los hechos. En este primer capítulo se describe la gravedad del accidente: si es con heridos, muertos o solo daños. También se especifica el lugar o coordenadas geográficas determinando que sea zona urbana o zona rural. Además de especificar el lugar se procura establecer la localidad o comuna para la zona urbana. Existe una casilla para poner la posible hora del accidente y la posible hora del levantamiento. Todo esto incluye la ubicación del accidente tanto geográfica como cronológica.

              a.anexo.mb-4(:href="obtenerLink('/downloads/Formulario_IPAT.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Formato informe policial de accidentes de tránsito IPAT

            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/img2.png', style="width: 500px" ,alt='Imagen fotográfica del formato IPAT que muestra la franja de identificación y ubicación, con sus respectivos campos.').m-auto
          .row
            .col-lg-6.mb-4.mb-lg-0
              p #[b Caracterización de vía y zona de influencia]
              p.mb-4 Seguidamente el IPAT establece las casillas para caracterizar la vía donde ocurrieron los hechos y la zona de influencia de esta, donde se destacan las características del lugar, de acuerdo al área, sector, zona y el diseño, además también sugiere incluir las condiciones climáticas al momento de la ocurrencia de los hechos.
              a.anexo.mb-4(:href="obtenerLink('/downloads/Formulario_IPAT.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Formato informe policial de accidentes de tránsito IPAT
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/img3.png', style="width: 500px" ,alt='Imagen fotográfica del formato IPAT que muestra la franja de caracterización de la vía y su zona, con sus respectivos campos seleccionables.').m-auto
          .row
            .col-lg-6.mb-4.mb-lg-0
              p #[b Caracterización de participantes]
              p.mb-4 El siguiente aparte del IPAT constituye la caracterización de los participantes, como conductores, los vehículos y sus propietarios, donde se requiere contar con la documentación, ya sea física o la que proporcionan las bases de datos digitales, corroborando la veracidad y autenticidad de estos datos y las personas y vehículos implicados.
              a.anexo.mb-4(:href="obtenerLink('/downloads/Formulario_IPAT.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Formato informe policial de accidentes de tránsito IPAT
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/img4.png', style="width: 500px" ,alt='Imagen fotográfica del formato IPAT que muestra la franja de caracterización de participantes, con sus respectivos campos para ser diligenciada.').m-auto
          .row
            .col-lg-6.mb-4.mb-lg-0
              p #[b Caracterización de vehículos]
              p.mb-4 Para el caso de los vehículos, también se requiere verificar la documentación física, pero de no contar con ella, el agente de tránsito o quien haga sus veces debe corroborar con los sistemas de identificación la información suministrada en las bases de datos digitales.
              a.anexo.mb-4(:href="obtenerLink('/downloads/Formulario_IPAT.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Formato informe policial de accidentes de tránsito IPAT
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/img5.png', style="width: 500px" ,alt='Imagen fotográfica del formato IPAT que muestra la franja de caracterización de vehículos, con sus respectivos campos.').m-auto
          .row
            .col-lg-6.mb-4.mb-lg-0
              p #[b Caracterización de víctimas]
              p.mb-4 Por último, la caracterización de las víctimas de los accidentes de tránsito en su condición de peatones, pasajeros o acompañantes, que sufrieron las consecuencias del siniestro.
              a.anexo.mb-4(:href="obtenerLink('/downloads/Formulario_IPAT.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Formato informe policial de accidentes de tránsito IPAT
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/img6.png', style="width: 500px" ,alt='Imagen fotográfica del formato IPAT que muestra la franja de caracterización de víctimas, con sus respectivos campos.').m-auto


    //.row.justify-content-center
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
