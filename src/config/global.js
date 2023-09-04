export default {
  global: {
    componenteFormativo: 'Resolución de conflictos en eventos de tránsito',
    descripcionCurso:
      'En este componente formativo se abordarán los mecanismos alternativos para la solución de conflictos en el contexto del transporte entre los que se encuentran la mediación, el arbitraje y la conciliación, los cuales debe ir acompañados de una comunicación asertiva que permita abordar a las partes y comprender sus intereses, temas que ajustados a los accidentes de tránsito son explicados con el reciente amparo normativo establecido en la Ley 2251 de 2022.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mecanismos alternativos para la solución de conflictos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'La conciliación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'La mediación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'El arbitraje',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La comunicación asertiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Abordar a las partes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Comprender intereses',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La conciliación en accidentes de tránsito',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Actos conciliables y actos no conciliables',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Habilidades específicas del conciliador en accidentes de tránsito',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Facultades de los centros de conciliación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Conciliación judicial y extrajudicial',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Actas de conciliación',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'El informe policial de accidente de tránsito en caso de daños materiales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Acomodación a la Ley 2251 de 2022',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/638100_CF04_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Actos conciliables y actos no conciliable',
      referencia:
        'Congreso de Colombia. (2002). Ley 769 de 2002. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones.',
      tipo: 'Artículo',
      link: 'http://www.oas.org/juridico/spanish/mesicic2_col_ley_769_2002.pdf',
    },
    {
      tema:
        'El informe policial de accidente de tránsito en caso de daños materiales',
      referencia:
        'Ministerio de Transporte. (2012). Resolución 11268 de 2012. Por el cual se adopta el nuevo Informe Policial de Accidentes de Tránsito (IPAT), su manual de diligenciamiento y se dictan otras disposiciones.',
      tipo: 'Artículo',
      link: 'http://web.mintransporte.gov.co/jspui/handle/001/5348',
    },
    {
      tema: 'La conciliación en accidentes de tránsito',
      referencia:
        'Congreso de Colombia. (2022). Ley 2220 de 2022. Por medio de la cual se expide el estatuto de conciliación y se dictan otras disposiciones.',
      tipo: 'Artículo',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=188766',
    },
    {
      tema: 'La conciliación en accidentes de tránsito',
      referencia:
        'Ramos E., y Quiroga, L. (2017). Investigación de accidentes de tránsito en Colombia. Imprenta Nacional.',
      tipo: 'Libro',
      link:
        'https://www.policia.gov.co/sites/default/files/publicaciones-institucionales/libro-investigacion-accidentes-de-transito-en-colombia.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Arbitraje',
      significado:
        'mecanismo alternativo de solución de conflictos mediante el cual las partes defieren árbitros la solución de una controversia relativa a asuntos de libre disposición o aquellos que la ley autorice.',
    },
    {
      termino: 'Accidente de tránsito',
      significado:
        'evento generalmente involuntario, generado al menos por un vehículo en movimiento, que causa daños a personas y bienes involucrados en él e igualmente afecta la normal circulación de los vehículos que se movilizan por la vía o vías comprendidas en el lugar o dentro de la zona de influencia del hecho.',
    },
    {
      termino: 'Conciliación',
      significado:
        'mecanismo alternativo de solución de conflictos a través del cual, dos o más personas, naturales o jurídicas, de carácter privado o público, nacional o extranjera, gestionan por sí mismas la solución de sus diferencias, con la ayuda de un tercero neutral y calificado, denominado conciliador.',
    },
    {
      termino: 'Comparendo',
      significado:
        'orden formal de notificación para que el presunto contraventor o implicado se presente ante la autoridad de tránsito por la comisión de una infracción.',
    },
    {
      termino: 'IPAT',
      significado: 'Informe Policial de Accidente de Tránsito.',
    },
    {
      termino: 'Inmovilización',
      significado: 'suspensión temporal de la circulación de un vehículo.',
    },
    {
      termino: 'Infracción',
      significado:
        'transgresión o violación de una norma de tránsito. Habrá dos tipos de infracciones: simple y compleja. Será simple cuando se trate de violación a la mera norma. Será compleja si se produce un daño material.',
    },
    {
      termino: 'RNAT',
      significado: 'Registro Nacional de Accidentes de Tránsito.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (2002). Ley 769 de 2002. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones". 13 de septiembre de 2020.',
      link: 'http://www.oas.org/juridico/spanish/mesicic2_col_ley_769_2002.pdf',
    },
    {
      referencia:
        'Congreso de Colombia. (2004). Ley 906 de 2004. Por la cual se expide el Código de Procedimiento Penal. 31 de agosto de 2004.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0906_2004.html',
    },
    {
      referencia:
        'Congreso de Colombia. (2011). Ley 1503 de 2011. Por la cual se promueve la formación de hábitos, comportamientos y conductas seguros en la vía y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=45453',
    },
    {
      referencia:
        'Congreso de Colombia. (2016). Ley 1801 de 2016. Por la cual se expide el Código Nacional de Seguridad y Convivencia Ciudadana.',
      link:
        'https://www.policia.gov.co/sites/default/files/ley-1801-codigo-nacional-policia-convivencia.pdf',
    },
    {
      referencia:
        'Congreso de Colombia. (2022). Ley 2220 de 2022. Por medio de la cual se expide el estatuto de conciliación y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=188766',
    },
    {
      referencia:
        'Ministerio de Transporte. (2012). Resolución 11268 de 2012. Por el cual se adopta el nuevo Informe Policial de Accidentes de Tránsito (IPAT), su manual de diligenciamiento y se dictan otras disposiciones.',
      link: '',
    },
    {
      referencia:
        'Presidencia de Colombia. (2015). Decreto 1079. Por medio del cual se expide el Decreto Único Reglamentario del Sector Transporte. 26 de mayo de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77889',
    },
    {
      referencia:
        'Ramos E., y Quiroga, L. (2017). <em>Investigación de accidentes de tránsito en Colombia</em>. Imprenta Nacional.',
      link:
        'https://www.policia.gov.co/contenido/investigacion-accidentes-transito-colombia',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhacesiz Mary Hincapié Atehortúa',
          cargo: 'Instructora',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander ',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
