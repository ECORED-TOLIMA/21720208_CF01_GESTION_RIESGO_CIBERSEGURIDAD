<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/intro/img1.svg', alt='Imagen decorativa')
      .col-lg-10
        p Este componente aborda los conceptos y evolución de la ciberseguridad, resaltando sus características, importancia empresarial y el marco legal aplicable. Se analiza el cibercrimen, sus orígenes y actores, las diferentes formas de delitos informáticos y su impacto tanto local como globalmente. Además, se explora el entorno tecnológico en las organizaciones, detallando componentes, roles y nuevas tendencias digitales. Finalmente, se explica cómo gestionar incidentes de ciberseguridad mediante estándares, políticas organizacionales y el papel clave del Centro de Operaciones de Seguridad (SOC) en la protección continua de la información.
        p.mb-0 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    .row.justify-content-center.align-items-center           
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
