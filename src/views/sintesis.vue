<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La ciberseguridad organizacional se puede resumir como un conjunto de estrategias, herramientas y políticas aplicadas por las empresas para proteger su información digital, frente a amenazas cibernéticas. En este componente, se detalló su evolución histórica, importancia empresarial y características como confidencialidad, integridad y disponibilidad, principios fundamentales de la ciberseguridad. También se abordó en profundidad los delitos informáticos, analizando su origen, actores involucrados, tipologías comunes como #[i malware], #[i phishing] o ciberespionaje, marcos legales y desafíos internacionales frente al cibercrimen. El componente formativo, examinó además el entorno de tecnologías de la información en organizaciones, contemplando componentes como #[i hardware], #[i software] y redes, así como roles técnicos y tendencias como inteligencia artificial, nube o IoT. Se explicó cómo se gestionan los incidentes de seguridad, mediante marcos reconocidos, remarcando la importancia de respuestas estructuradas y lecciones aprendidas. A su vez, se incluyeron ejemplos prácticos de políticas de seguridad para plataformas y se destacó el papel del SOC como centro neurálgico de vigilancia informática continua en las empresas. En conjunto, el componente formativo ofreció un panorama claro, actualizado y didáctico sobre los retos, mecanismos y actores involucrados en la protección de entornos digitales.
    
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo Ciberseguridad y gestión del riesgo organizacional, se explica el proceso de la ciberseguridad en las organizaciones, el cual inicia con la definición y lo que incluye la ciberseguridad, pasando por la evolución histórica que ha tenido, sus característica e importancia y las normas que la regulan. Además, se explica como a través de las diferentes décadas han evolucionado los delitos informáticos, los actores que están presentes y las tipologías que hay, basadas en el contexto local y global. También se detalla los procesos TI presentes en las organizaciones y cómo los servicios, roles y tendencias emergen en ellos. Finalmente, se relacionan las regulaciones que hay en la gestión de incidentes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
