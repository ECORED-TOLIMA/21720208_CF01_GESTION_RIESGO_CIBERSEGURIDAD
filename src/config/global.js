export default {
  global: {
    componenteFormativo: 'Ciberseguridad y gestión del riesgo organizacional',
    descripcionCurso:
      'Para abordar la ciberseguridad, se deben comprender sus fundamentos, importancia en el entorno empresarial, normativas y marcos legales relacionados. La ciberseguridad organizacional es un pilar fundamental en la protección de los activos digitales de las empresas, garantizando la continuidad del negocio y la confianza de clientes y socios. Su importancia ha crecido exponencialmente ante la sofisticación de las amenazas cibernéticas en el entorno empresarial moderno.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
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
        titulo: 'Ciberseguridad organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de ciberseguridad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Historia y evolución de la ciberseguridad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características clave de la ciberseguridad',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Importancia de la ciberseguridad en el entorno empresarial',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Normas y marcos legales relacionados',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Delitos informáticos y cibercrimen',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Origen y evolución del cibercrimen',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Principales actores involucrados en los delitos informáticos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipologías de actos ilícitos digitales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Panorama de los delitos informáticos en el contexto nacional e internacional',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Entorno de tecnologías de la información en las organizaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Servicios y roles asociados a la infraestructura tecnológica',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de incidentes de ciberseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Estándares y marcos de referencia para la respuesta a incidentes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Políticas organizacionales de seguridad',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Rol del Centro de Operaciones de Seguridad (SOC)',
            hash: 't_4_3',
          },
        ],
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
        download: 'downloads/CFA_XX_DU.pdf',
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
      tema: '1.1 Concepto de ciberseguridad',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, 25 de octubre). La Ciberseguridad [Video]. YouTube. https://www.youtube.com/watch?v=sk9dJtwZtlA&t=29s&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=sk9dJtwZtlA&t=29s&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: '1.4 Importancia de la ciberseguridad en el entorno empresarial',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, 1 de febrero). Introducción a la Ciberseguridad, sus fundamentos y normativa [Video]. YouTube. https://www.youtube.com/watch?v=3rqfPRqnKIM&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=3rqfPRqnKIM&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: '4. Gestión de incidentes de ciberseguridad',
      referencia:
        'Cyberzaintza. (2023, 22 de mayo). CSIRT.es Jorge Chinea, Responsable de Gestión de Incidentes y Crisis de Ciberseguridad en INCIBE [Video]. YouTube. https://www.youtube.com/watch?v=j29xaVO7kTM&ab_channel=Cyberzaintza',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=j29xaVO7kTM&ab_channel=Cyberzaintza',
    },
    {
      tema: '4.2 Políticas organizacionales de seguridad',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, 6 de diciembre). Mejoramiento continuo de las estrategias de ciberseguridad [Video]. YouTube. https://www.youtube.com/watch?v=pm9bgkdqRBg&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=pm9bgkdqRBg&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: '4.3. Rol del Centro de Operaciones de Seguridad (SOC)',
      referencia:
        'NSIT. (2021, 15 de marzo). NSIT ¿Cómo opera un SOC? https://www.youtube.com/watch?v=-oiT4_y98YI&ab_channel=NSIT',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-oiT4_y98YI&ab_channel=NSIT',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'posible causa de un incidente que puede comprometer la seguridad de la información.',
    },
    {
      termino: 'Centro de Operaciones de Seguridad (SOC)',
      significado:
        'unidad especializada encargada de prevenir, detectar, analizar y responder a incidentes de ciberseguridad en tiempo real.',
    },
    {
      termino: 'Cibercrimen',
      significado:
        'actividad delictiva llevada a cabo mediante medios digitales o informáticos.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'conjunto de prácticas, tecnologías y procesos encargados de proteger sistemas informáticos, redes y datos contra accesos no autorizados o daños.',
    },
    {
      termino: 'Control de acceso',
      significado:
        'mecanismo que regula quién puede acceder a ciertos sistemas, información o recursos dentro de una organización.',
    },
    {
      termino: 'Delito informático',
      significado:
        'cualquier acción ilegal que se comete utilizando tecnologías de la información o que está dirigida a ellas.',
    },
    {
      termino: 'Incidente de seguridad',
      significado:
        'evento que compromete o tiene el potencial de comprometer la confidencialidad, integridad o disponibilidad de la información o los sistemas.',
    },
    {
      termino: 'Infraestructura tecnológica',
      significado:
        'conjunto de componentes físicos y digitales (<em>hardware</em>, <em>software</em>, redes, servidores) que sustentan el funcionamiento de la tecnología de una organización.',
    },
    {
      termino: 'Marco de referencia',
      significado:
        'conjunto de buenas prácticas, normas o metodologías que guían a las organizaciones en la gestión de la seguridad.',
    },
    {
      termino: 'Política de seguridad',
      significado:
        'documento formal que define como una organización protege su información y sistemas frente a riesgos y amenazas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Armijo, M. (2011). Planificación estratégica e indicadores de desempeño en el sector público. Manual 69. Santiago de Chile, Chile: Naciones Unidas',
      link: '',
    },
    {
      referencia:
        'David, F. (2008). Conceptos de Administración Estratégica. Ciudad de México, México: Ed. Pearson Prentice Hall, 11 edición.',
      link: '',
    },
    {
      referencia: 'Díaz, J. (2009). La importancia de Pensar Como Empresario.',
      link:
        'https://www.negociosyemprendimiento.org/2009/07/la-importancia-de-pensar-como.html',
    },
    {
      referencia:
        'Fred, D. (2008). Conceptos de Administración Estratégica. México. Pearson Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Mendoza, A. (2005). Célebre Discurso de Steve Jobs en la Universidad de Stanford.',
      link:
        'http://mercadeoglobal.com/blog/textos-del-celebre-discurso-de-steve-jobs-en-la-universidad-de-stanford/',
    },
    {
      referencia:
        'Paredes, E. (2010). La Matriz FODA cruzada para ideas de negocio.',
      link:
        'http://gestionando-empresas.blogspot.com/2010/08/la-matriz-foda-cruzada-para-ideas-de.html',
    },
    {
      referencia:
        'Pick de Weiss, S. (1993). Planeando tu vida. México: Editorial Planeta.',
      link: '',
    },
    {
      referencia:
        'Rogers, T. (2008). Cómo reforzar una mentalidad de pensamiento positivo.',
      link:
        'https://es.wikihow.com/reforzar-una-mentalidad-de-pensamiento-positivo',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1971). Código de Comercio, Decreto 410 de marzo 27 de 1971.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102',
    },
    {
      referencia:
        'Comunidad de Madrid. (s.f.) Tratamiento del riesgo. Comunidad de Madrid.',
      link:
        'http://www.madrid.org/cs/StaticFiles/Emprendedores/Analisis_Riesgos/pages/pdf/metodologia/5TratamientodelRiesgo%28AR%29_es.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre_Experto',
          cargo: 'Cargo_Experto',
          centro: 'Regional_Experto',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre_Experto',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_Experto',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_Experto',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre_Experto',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_Experto',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
