<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Entorno de tecnologías de la información en las organizaciones
    
    .tarjeta-BG02.px-md-5.px-4.mb-4
      .row.justify-content-center.mb-4
        .col-lg-12(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')
      
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.d-lg-flex.d-none(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema3/img2.svg', alt='Imagen decorativa') 
        .col-lg-9(data-aos="fade-left")
          p.mb-0 El entorno de Tecnologías de la Información (TI) en las organizaciones, es el conjunto de herramientas, sistemas y recursos que permiten manejar y procesar la información de manera digital. Aunque muchos piensan que la tecnología solo se refiere a computadoras, abarca mucho más: incluye redes de comunicación, #[i software] especializado, bases de datos, servidores, sistemas en la nube y dispositivos móviles. Todo esto se integra para ayudar a que la organización funcione de manera más eficiente, rápida y segura. Por ejemplo, gracias a las TI, es posible almacenar enormes cantidades de datos de forma ordenada y acceder a ellos cuando se necesiten, lo que facilita la toma de decisiones informadas. Además, permiten la comunicación instantánea mediante correos electrónicos, videollamadas y chats, reduciendo las distancias y agilizando el trabajo en equipo, incluso si los empleados están en diferentes lugares del mundo. La automatización de procesos rutinarios, como la gestión de facturas o la atención al cliente, libera tiempo para que las personas se concentren en tareas más importantes y creativas. También, las TI juegan un papel clave en la seguridad de la información, protegiendo datos confidenciales contra posibles fraudes o ataques. Por otro lado, permiten analizar grandes volúmenes de información, identificando tendencias y oportunidades de mejora que de otra forma serían difíciles de detectar. Para cualquier organización, invertir en tecnologías de la información no solo es imprescindible para sobrevivir, sino también para crecer y diferenciarse en el mercado actual.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Servicios y roles asociados a la infraestructura tecnológica
    
    p.mb-5 A continuación, en un video, se aborda la definición y componentes de las TI, servicios y roles asociados a la infraestructura tecnológica y tendencias emergentes en el entorno digital en la siguiente historia:
    
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Análisis forense y profesionalización en ciberseguridad. El descubrimiento ¿Qué son las TIC?
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-down")
        figure
          .video
            iframe(width="1246" height="701" src="https://www.youtube.com/embed/j6APeoqzopU" title="Análisis forense y profesionalización en ciberseguridad  -  El descubrimiento: ¿Qué son las TI?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0  Análisis forense y profesionalización en ciberseguridad. Tendencias emergentes: el futuro ya llegó

    .row.justify-content-center.align-items-center           
      .col-lg-12(data-aos="flip-down")
        figure
          .video
            iframe(width="1246" height="701" src="https://www.youtube.com/embed/x-oMHjDY6W0" title="Análisis forense y profesionalización en ciberseguridad - Tendencias emergentes: el futuro ya llegó" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema3',
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
