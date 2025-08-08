<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Gestión de incidentes de ciberseguridad    
    
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-4.d-lg-flex.d-none(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img2.svg', alt='Imagen decorativa')
      .col-lg-10(data-aos="fade-left")
        p La gestión de incidentes de ciberseguridad, consiste en un conjunto de prácticas y procesos diseñados para detectar, responder, mitigar y documentar eventos que ponen en riesgo la información o los sistemas de una organización. Es fundamental porque reduce el impacto de ataques y minimiza la interrupción del negocio
        p.mb-0 Antes, las organizaciones reaccionaban a los incidentes de forma aislada y sin planificación; hoy, existen equipos dedicados (como CSIRT o SOC) que usan metodologías probadas y herramientas sofisticadas para la gestión de incidentes.
    
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Ejemplo práctico
    
    p.mb-5 Imagine una empresa que detecta acceso no autorizado a su red un sábado por la noche. El equipo responsable sigue estos pasos: 
    .tarjeta-BG02.px-md-5.px-4
      ol.lista-ol--cuadro.lista-ol--separador.mb-4
        li 
          .lista-ol--cuadro__vineta.v--green
            span 1
          p.mb-0 #[b Preparación:] han entrenado previamente a su personal y cuentan con manuales de acción.
        li 
          .lista-ol--cuadro__vineta.v--green
            span 2
          p.mb-0 #[b Identificación:] monitorean las alertas de su #[i firewall] e identifican el acceso sospechoso.
        li 
          .lista-ol--cuadro__vineta.v--green
            span 3
          p.mb-0 #[b Contención:] aíslan el sistema comprometido para evitar que el ataque se propague.
        li 
          .lista-ol--cuadro__vineta.v--green
            span 4
          p.mb-0 #[b Erradicación/Mitigación:] eliminan el #[i malware] y cierran la brecha explotada.
        li 
          .lista-ol--cuadro__vineta.v--green
            span 5
          p.mb-0 #[b Recuperación:] los sistemas afectados y monitorizan cualquier anomalía adicional.
        li 
          .lista-ol--cuadro__vineta.v--green
            span 7
          p.mb-0 #[b Lecciones aprendidas:] documentan el incidente y actualizan sus proceso.
      .row.justify-content-center.align-items-center
        .col-lg-10
          .cajon.color-primario.p-4.mb-4
            p.mb-0.text-center Hoy día, la gestión efectiva de incidentes es imprescindible debido al aumento de ataques avanzados y automatizados.
    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Estándares y marcos de referencia para la respuesta a incidentes
    p Los estándares y marcos de referencia proporcionan lineamientos estructurados que facilitan una respuesta eficiente y coordinada frente a incidentes de ciberseguridad.
    p.mb-5 A continuación, se presentan cinco de los marcos y estándares más reconocidos y utilizados internacionalmente para la gestión y respuesta a incidentes de ciberseguridad: 
    .tarjeta--BG044.p-4.px-md-5.mb-5
      .tarjeta.tarjeta--BG04.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-5.order-2.order-lg-1
              h4 NIST SP 800-61 Rev. 2 (Computer Security Incident Handling Guide)
              p.mb-0 Publicado por el Instituto Nacional de Estándares y Tecnología (NIST) de EE.UU., es uno de los referentes principales sobre gestión de incidentes y propone un ciclo de vida con fases como preparación, detección y análisis, contención, erradicación, recuperación y actividades post-incidente.
            .col-lg-6.mb-lg-0.mb-4.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img4.png', alt='Texto que describa la imagen')
          .row
            .col-lg-5.order-2.order-lg-1
              h4 ISO/IEC 27035
              p.mb-0 Este estándar internacional específico para la gestión de incidentes de seguridad de la información, proporciona directrices detalladas sobre el proceso desde la preparación hasta la mejora continua y es aplicable a todo tipo de organizaciones.
            .col-lg-6.mb-lg-0.mb-4.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img5.png', alt='Texto que describa la imagen')
          .row
            .col-lg-5.order-2.order-lg-1
              h4 NIST Cybersecurity Framework (CSF)
              p.mb-0 Aunque es más general para la gestión de riesgos de ciberseguridad, su estructura de cinco funciones (identificar, proteger, detectar, responder, recuperar), es ampliamente adoptada para diseñar planes de respuesta a incidentes y mejorar la resiliencia organizacional.
            .col-lg-6.mb-lg-0.mb-4.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img6.png', alt='Texto que describa la imagen')
          .row
            .col-lg-5.order-2.order-lg-1
              h4 SANS Incident Handler’s Handbook
              p.mb-0 Creado por el SANS Institute, este marco es una referencia muy práctica y aplicada en la industria, detallando seis fases fundamentales: preparación, identificación, contención, erradicación, recuperación y lecciones aprendidas.
            .col-lg-6.mb-lg-0.mb-4.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img7.png', alt='Texto que describa la imagen')
          .row
            .col-lg-5.order-2.order-lg-1
              h4 Guía de Respuesta a Incidentes de CISA
              p.mb-0 La Agencia de Ciberseguridad e Infraestructura de EE.UU. (CISA) publica guías prácticas y adaptadas a sectores críticos, basadas en los principios de NIST, para orientar la preparación, detección, contención, recuperación y acciones post-incidente.
            .col-lg-6.mb-lg-0.mb-4.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img8.png', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-left")
        .cajon.color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img9.svg', alt='Imagen decorativa')
            .col-lg-10
              p.mb-0 Ejemplo práctico: durante un ataque de #[i ransomware], una empresa que implementa NIST SP 800-61 sigue protocolos ya estructurados, asigna roles y ejecuta pasos específicos de comunicación interna y externa, asegurando que ni el pánico ni la improvisación dominen la respuesta.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Políticas organizacionales de seguridad
    p Las políticas de seguridad son documentos alineados con la estrategia del negocio que establecen normas, responsabilidades y procedimientos para proteger los activos de información de una organización. Son requisito en la mayoría de marcos regulatorios e industriales.
    p.mb-4 A continuación, se presentan algunos ejemplos concretos de políticas de seguridad aplicables a diferentes plataformas, servicios y tecnologías actuales en las organizaciones:
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 2.
      i Ejemplos de Políticas organizacionales de seguridad ligadas a distintas tecnologías
    .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in")
      table(alt="Texto alternativo tabla")
        thead
          tr(data-aos="fade-left")
            th Tecnología
            th Tipo de política	
            th Ejemplo o descripción
        tbody
          tr(data-aos="fade-left")
            td Control de acceso
            td Control de acceso basado en roles (RBAC)
            td Permite controlar el acceso a la información según el rol del usuario dentro de la organización.
          tr(data-aos="fade-left")
            td Microsoft 365
            td Protección contra amenazas (EOP)
            td Configuración de políticas EOP para antimalware, antispam y protección contra #[i phishing] en correos.
          tr(data-aos="fade-left")
            td Microsoft Teams
            td Prevención de pérdida de datos (DLP)
            td Reglas para evitar la exposición accidental de información crítica en Teams.
          tr(data-aos="fade-left")
            td AWS IAM
            td Política basada en identidad
            td Solo permite acceso a recursos con autenticación multifactor (MFA).
          tr(data-aos="fade-left")
            td AWS S3
            td Control de acceso granular por bucket
            td Acceso restringido de lectura/escritura a buckets específicos, denegando acceso sin MFA.
          tr(data-aos="fade-left")
            td Computación en la nube
            td Seguridad de datos en la nube
            td Uso de cifrado en tránsito/reposo y controles Zero Trust; autenticación multifactor.
          tr(data-aos="fade-left")
            td Firewall Manager de AWS
            td Políticas de grupos de seguridad
            td Gestión de acceso a recursos por reglas específicas en #[i firewalls] de AWS.
          tr(data-aos="fade-left")
            td Microsoft Defender for Office 365
            td Protección de cuentas prioritarias
            td Configuración especial para proteger a directivos y cuentas de alto valor.
          tr(data-aos="fade-left")
            td Acceso físico
            td Control de acceso físico
            td Uso de sistemas biométricos o tarjetas inteligentes para áreas sensibles.
          tr(data-aos="fade-left")
            td Política organizacional general
            td Uso de dispositivos BYOD
            td Normas para el uso seguro y permitido de dispositivos personales en la red corporativa.
    separador
    .tarjeta-BG02.px-md-5.px-4
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.3 Rol del Centro de Operaciones de Seguridad (SOC)
      p(data-aos="flip-up") El Centro de Operaciones de Seguridad o SOC por sus siglas en inglés, es un lugar —o un equipo— dentro de una empresa que se encarga de cuidar la seguridad informática. Es como el “equipo de vigilancia digital” que protege los sistemas, la información y los dispositivos de la organización frente a peligros como virus, #[i hackers] o fraudes.
      p.mb-5 Hay que pensar en el SOC como si fuera una central de control con cámaras y alarmas digitales, donde las personas que trabajan ahí vigilan todo lo que pasa dentro de las computadoras, redes y sistemas de la empresa. Si llega a pasar algo extraño, como un intento de robo de información o un comportamiento anormal en la red, ellos lo detectan y actúan rápidamente para detenerlo.
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema4/img10.png', alt='Imagen decorativa')
        .col-lg-8
          .titulo.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
            h5.mb-0 ¿Qué hacen exactamente?
          ul.lista-ul
            li
              i.fas.fa-hand
              | Vigilan todo el tiempo (día y noche) para detectar si algo raro sucede con los sistemas.
            li
              i.fas.fa-hand
              | Investigan problemas, como archivos sospechosos o mensajes peligrosos, para saber si pueden causar daño.
            li
              i.fas.fa-hand
              | Responden a los ataques; es decir, los bloquean y ayudan a reparar todo lo que se haya visto afectado.
            li
              i.fas.fa-hand
              | Proponen mejoras en la seguridad, como nuevas reglas o herramientas para evitar problemas en el futuro.
            li
              i.fas.fa-hand
              | Ayudan a cumplir normas y proteger los datos que maneja la empresa.
          .titulo.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
            h5.mb-0 ¿Por qué es importante?
          p.mb-0 Hoy en día, muchas cosas en las empresas se hacen con tecnología: correos electrónicos, archivos digitales, bancos en línea, videollamadas, entre otros. Si esa tecnología es atacada o deja de funcionar por un virus o un #[i hacker], la empresa puede perder dinero, clientes o información muy valiosa. Por eso el SOC es muy importante: protege todo ese mundo digital para que las personas puedan trabajar seguras.
    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="fade-left")
        .cajon.color-primario.p-4
          p.mb-0 Con esta explicación, un estudiante sin conocimientos técnicos, puede entender que el SOC es, básicamente, el “equipo de seguridad digital” de una empresa que protege la información las 24 horas.
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
