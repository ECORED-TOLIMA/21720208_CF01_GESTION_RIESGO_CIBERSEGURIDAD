<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Ciberseguridad organizacional    
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')
    
    p.mb-5 La ciberseguridad organizacional es el conjunto de medidas y estrategias que utilizan las empresas para proteger sus computadoras, sistemas, redes e información importante, frente a personas malintencionadas que intentan robar o dañar esos datos. Estas medidas van desde el uso de programas especiales de seguridad, hasta reglas que todos los empleados deben seguir para evitar errores que puedan poner en riesgo la información. Por ejemplo, una empresa puede instalar antivirus, bloquear accesos sospechosos a sus redes y capacitar a sus trabajadores para que no abran correos peligrosos. Todo esto ayuda a mantener la información segura, funcionando correctamente y disponible cuando se necesita. En un mundo cada vez más digital, donde las empresas manejan datos personales, contraseñas, cuentas bancarias y otros datos sensibles por Internet, es muy importante protegerlos para evitar consecuencias graves como robos, pérdida de dinero o daños a la reputación de la empresa.
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img2.png')})`}", data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Además de usar herramientas tecnológicas, la ciberseguridad organizacional requiere que las empresas tengan personas capacitadas que identifiquen posibles riesgos y que tomen decisiones para mejorar la protección. También deben cumplir con leyes específicas que exigen cuidar los datos personales de los clientes y reportar si ocurre algún problema de seguridad. No se trata solo de proteger computadoras, sino de enseñar a todos los trabajadores cómo actuar de forma segura. Por ejemplo, usando contraseñas fuertes o no compartiendo información confidencial. Con esto, las empresas pueden seguir funcionando sin interrupciones y los clientes pueden confiar en que su información está protegida. 
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1	Concepto de ciberseguridad

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img3.png', alt='Imagen decorativa')
      .col-lg-8(data-aos="fade-right")
        p La ciberseguridad es una disciplina esencial en el mundo digital, encargada de proteger sistemas informáticos, redes, dispositivos y datos frente a amenazas cibernéticas y ataques maliciosos. A medida que la tecnología avanza y la interconectividad aumenta, se ha vuelto fundamental para garantizar la privacidad, integridad y disponibilidad de la información en línea.
        p Se compone de un conjunto de prácticas, tecnologías y procesos diseñados para prevenir accesos no autorizados, daños o pérdidas de datos. Su objetivo principal es garantizar la confidencialidad, integridad y disponibilidad de la información, protegiendo tanto a individuos como a organizaciones de amenazas como virus, #[i malware], #[i ransomware], ataques de denegación de servicio (DDoS) y fraudes digitales.
        .cajon.color-secundario.p-4
          p.mb-0 En un mundo altamente interconectado, un solo ataque cibernético puede generar consecuencias devastadoras, desde el robo de identidad hasta la interrupción de infraestructuras críticas como redes de energía y sistemas de comunicación gubernamentales. Por ello, no solo es crucial para empresas y gobiernos, sino también para los ciudadanos, ya que cada vez más actividades diarias dependen de Internet y los sistemas digitales.
    
    p A medida que surgen nuevas tecnologías como la Inteligencia Artificial (IA) y el Internet de las Cosas (IoT), los ciberdelincuentes desarrollan métodos de ataque más sofisticados, aprovechando la creciente cantidad de dispositivos conectados. Por este motivo, la protección del ecosistema digital requiere un enfoque integral que combine herramientas avanzadas, normativas adecuadas y una sólida cultura de seguridad.
    p.mb-5 Para garantizar una protección eficaz, se emplean diversas herramientas y estrategias, como: 

    .tarjeta--BG053.px-md-5.mb-5
      .row.justify-content-center.align-items-center.my-lg-5.my-4
        .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema1/img4.png', alt='Imagen decorativa' style='margin-bottom: -23px;')
        .col-lg-8(data-aos="fade-left")
          SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-6")
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema1/img5.svg' alt='AvatarTop')
              h5.text-center #[i Firewalls] y antivirus 
              p.text-center Para detectar y bloquear amenazas.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema1/img6.svg' alt='AvatarTop')
              h5.text-center Encriptación de datos 
              p.text-center Para proteger la información sensible.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema1/img7.svg' alt='AvatarTop')
              h5.text-center Autenticación multifactor (MFA)
              p.text-center Para reforzar el acceso seguro.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema1/img8.svg' alt='AvatarTop')
              h5.text-center Monitoreo continuo de redes
              p.text-center Para identificar posibles vulnerabilidades.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema1/img9.svg' alt='AvatarTop')
              p.text-center Capacitación en seguridad digital para reducir el riesgo de errores humanos.
    p.mb-4 Uno de los mayores desafíos en ciberseguridad es la falta de concienciación de los usuarios. Muchas brechas de seguridad ocurren debido a prácticas inseguras, como el uso de contraseñas débiles o la apertura de enlaces sospechosos. Por ello, es fundamental fomentar la educación en seguridad digital a nivel individual y organizacional.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img10.svg', alt='Imagen decorativa')
      .col-lg-8(data-aos="fade-left")
        p La ciberseguridad es un pilar fundamental en la era digital y su relevancia seguirá en aumento. Proteger los datos y las infraestructuras tecnológicas requiere la combinación de tecnologías avanzadas, buenas prácticas organizativas y conciencia individual. 
        .cajon.color-primario.p-4.mb-4
          p.mb-0 A medida que los ataques evolucionan, también deben hacerlo las estrategias de defensa, asegurando así un entorno digital más seguro y confiable para todos.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2	Historia y evolución de la ciberseguridad
    p La evolución de la ciberseguridad está directamente vinculada al desarrollo de la informática y la expansión de Internet. A medida que las tecnologías digitales han avanzado, también lo han hecho las amenazas cibernéticas, lo que ha llevado a la creación de nuevas estrategias y herramientas para proteger la información y las infraestructuras digitales. Desde los primeros sistemas cerrados, hasta el mundo hiperconectado de hoy, la ciberseguridad ha pasado de ser una preocupación limitada a un ámbito técnico a convertirse en una prioridad global para gobiernos, empresas y ciudadanos. 
    p.mb-5 A continuación, se presentan los eventos más relevantes de cada década: 
    .tarjeta.tarjeta--BG01.p-5.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Década de 1960-1970 - Los inicios de la ciberseguridad
            p.mb-0 Durante estas décadas, las computadoras eran utilizadas principalmente en entornos cerrados, como universidades y organismos gubernamentales. La seguridad informática se limitaba a la protección del acceso físico a los mainframes, ya que la conectividad era prácticamente inexistente. Sin embargo, con la creación de redes experimentales como ARPANET, surgieron las primeras preocupaciones sobre la seguridad de la información.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img11.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Década de 1980 - Profesionalización de la ciberseguridad
            p.mb-0 Con la proliferación de computadoras personales y redes más amplias, la seguridad digital comenzó a ganar relevancia. En 1983, el término "ciberseguridad" comenzó a utilizarse para referirse a la protección de sistemas de información. En 1988, el gusano Morris infectó miles de computadoras a través de ARPANET, marcando el primer gran ataque cibernético de la historia. Este evento impulsó la creación de herramientas como #[i firewalls] y #[i software] antivirus, así como la fundación de organismos especializados, como el National Computer Security Center (NCSC) en Estados Unidos.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img12.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Década de 1990 - Auge de Internet y nuevas amenazas
            p.mb-0 Con la masificación de Internet, surgieron nuevas amenazas como virus informáticos, #[i malware] y #[i phishing]. Se implementaron tecnologías como los #[i firewalls] comerciales y los protocolos de encriptación de datos, como SSL (Secure Sockets Layer), para proteger las transacciones en línea. Las instituciones financieras y empresas comenzaron a adoptar medidas más estrictas para proteger sus redes, aunque los ataques se hicieron cada vez más frecuentes y sofisticados.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img13.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Década de 2000 - Expansión del comercio digital y los ciberataques
            p.mb-0 La llegada de las redes sociales, el comercio electrónico y el Internet de las Cosas (IoT), amplió las vulnerabilidades cibernéticas. Ataques como el gusano “ILoveYou” (2000) y el Blaster Worm (2003) demostraron la capacidad destructiva del #[i malware]. En respuesta, se crearon roles especializados, como el Chief Information Security Officer (CISO) y se desarrollaron normativas como la ISO 27001 para estandarizar la seguridad de la información.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img14.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Década de 2010 - Ciberseguridad como prioridad global
            p.mb-0 La digitalización masiva y la interconectividad expusieron infraestructuras críticas, como redes eléctricas y sistemas de telecomunicaciones, a nuevos riesgos. Los ataques de denegación de servicio (DDoS) y el auge del #[i ransomware] pusieron en jaque a empresas y gobiernos. Además, surgieron las amenazas avanzadas persistentes (APT), impulsadas por grupos organizados y actores estatales. En respuesta, la ciberseguridad comenzó a integrar inteligencia artificial y #[i big data] para detectar y mitigar amenazas en tiempo real.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img15.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Década de 2020 - Nuevos desafíos en un mundo interconectado
            p.mb-0 La pandemia de COVID-19 aceleró el teletrabajo y, con ello, las vulnerabilidades digitales. Los ataques de #[i phishing], #[i ransomware] y filtraciones de datos aumentaron significativamente. Las organizaciones incrementaron sus inversiones en ciberseguridad y adoptaron políticas de ciberresiliencia. Actualmente, la seguridad digital enfrenta retos asociados a la inteligencia artificial, la computación cuántica, #[i blockchain] y el crecimiento del IoT, lo que ha llevado a los gobiernos a reforzar la regulación y la defensa cibernética a nivel mundial.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img16.png' alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen decorativa')
      .col-lg-8(data-aos="fade-left")
        p A lo largo de estas décadas, la ciberseguridad ha evolucionado en respuesta a la creciente interconexión de sistemas y al aumento de las amenazas cibernéticas. Lo que comenzó como una preocupación limitada a redes cerradas y sistemas gubernamentales, hoy en día afecta a todos los niveles de la sociedad, desde individuos hasta grandes corporaciones y gobiernos. A medida que las tecnologías avanzan, también lo hacen las tácticas de los ciberatacantes, lo que hace que la ciberseguridad siga siendo un desafío constante y de vital importancia. 
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 La historia de la ciberseguridad refleja una batalla continua por proteger la información, la privacidad y la infraestructura crítica, una batalla que continuará a medida que el ciberespacio siga evolucionando.
    
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3	Características clave de la ciberseguridad
    
    p La ciberseguridad abarca una serie de principios y características fundamentales que buscan proteger la integridad, confidencialidad y disponibilidad de la información. Todas ellas, desempeñan un papel crucial en el diseño y la implementación de sistemas seguros. 
    p.mb-5 A continuación, se explica cada una de estas características principales de la ciberseguridad:  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Integridad")
            p.mb-0 Asegura que la información no sea alterada de manera no autorizada. Esto implica que los datos sean precisos y completos, sin modificaciones maliciosas o accidentales. Se emplean mecanismos como las firmas digitales o códigos hash para verificar que los datos no hayan sido alterados. Por ejemplo, si un archivo es enviado a través de Internet, su integridad se puede verificar mediante un código #[i hash], lo que permite comprobar si el archivo ha sido modificado durante el tránsito.
          div(titulo="Confidencialidad")
            p.mb-0 Este principio garantiza que solo las personas o entidades autorizadas puedan acceder a la información. La confidencialidad es crucial para proteger datos sensibles, como información personal, financiera o corporativa. Por ejemplo, se utilizan técnicas como la encriptación de datos para asegurar que incluso si la información es interceptada, no pueda ser leída sin la clave adecuada. Esta característica protege tanto a individuos como a organizaciones de accesos no autorizados que puedan comprometer su seguridad.
          div(titulo="Disponibilidad")
            p.mb-0 Garantiza que los sistemas y datos sean accesibles cuando los usuarios autorizados los necesiten. Este principio es clave para asegurar que los servicios digitales estén siempre operativos, incluso frente a ataques. La protección contra ataques de denegación de servicio (DoS) o ataques DDoS es un ejemplo claro, ya que estos ataques buscan interrumpir la disponibilidad de un servicio online al sobrecargarlo con tráfico malicioso. Mediante la implementación de infraestructuras de respaldo y sistemas de redundancia, las organizaciones pueden mantener la disponibilidad de sus servicios, incluso en situaciones críticas.  
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-md-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img18.png', alt='Texto que describa la imagen')
    
    p.mb-5 También existen otras características esenciales que complementan y refuerzan la seguridad digital. Estas incluyen: 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-left")
        LineaTiempoD.color-secundario
          .row.justify-content-center(numero="1" titulo="Autenticidad")
            .col-lg-12.order-lg-2.order-3
              p.mb-lg-4.mb-0 Garantiza que los usuarios, sistemas y dispositivos sean quienes dicen ser. En un entorno digital, la autenticidad es esencial para evitar fraudes y suplantaciones de identidad. Se asegura mediante métodos como autenticación multifactor (MFA), que exige más de un factor (contraseña, huella dactilar, código enviado a un teléfono, etc.) para verificar la identidad del usuario, antes de permitir el acceso a un sistema.              
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img19.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="2" titulo="No repudio")
            .col-lg-12.order-lg-2.order-3
              p.mb-lg-4.mb-0 Asegura que una vez que una transacción o acción es realizada, no pueda ser negada por la persona o entidad que la efectuó. Este principio es crucial para mantener la responsabilidad y la trazabilidad en las interacciones digitales. Los registros de auditoría y las firmas digitales, juegan un papel clave en este aspecto, ya que permiten rastrear las acciones realizadas y verificar que no se pueda negar la ejecución de una acción en un sistema.              
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img20.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="3" titulo="Escalabilidad")
            .col-lg-12.order-lg-2.order-3
              p.mb-lg-4.mb-0 En ciberseguridad, la escalabilidad se refiere a la capacidad de un sistema para adaptarse y proteger una creciente cantidad de datos, usuarios o dispositivos sin comprometer la seguridad. A medida que las empresas y los usuarios aumentan su presencia en línea, las soluciones de ciberseguridad deben ser capaces de ajustarse para cubrir nuevas amenazas y el crecimiento de la infraestructura, sin disminuir la efectividad de la protección.              
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img21.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="4" titulo="Resiliencia")
            .col-lg-12.order-lg-2.order-3
              p.mb-lg-4.mb-0 Se refiere a la capacidad de un sistema para recuperarse rápidamente de un incidente de seguridad. No solo se trata de prevenir ataques, sino también de responder de manera rápida y efectiva ante incidentes. Los planes de recuperación ante desastres, los sistemas de respaldo y las copias de seguridad, son fundamentales para garantizar que, en caso de un ataque, los sistemas puedan restaurarse lo más rápido posible, sin grandes pérdidas de datos o interrupciones de servicio.              
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img22.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="5" titulo="Seguridad proactiva")
            .col-lg-12.order-lg-2.order-3
              p.mb-lg-4.mb-0 A diferencia de la seguridad reactiva, que responde a incidentes después de que ocurren, la seguridad proactiva implica anticiparse a las amenazas antes de que sucedan. Esto incluye la implementación de monitoreo constante, análisis de vulnerabilidades y el uso de inteligencia de amenazas para identificar patrones y posibles riesgos antes de que los atacantes los exploten.              
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img23.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="6" titulo="Cumplimiento normativo")
            .col-lg-12.order-lg-2.order-3
              p.mb-lg-4.mb-0 La ciberseguridad también implica cumplir con las leyes y regulaciones vigentes que afectan la protección de datos e infraestructura. Esto incluye marcos regulatorios como el Reglamento General de Protección de Datos (GDPR) de la Unión Europea o la Ley de Privacidad del Consumidor de California (CCPA), que requieren que las organizaciones adopten medidas estrictas para proteger los datos personales de los usuarios. Cumplir con estos estándares no solo es una obligación legal, sino también una forma de ganar la confianza de los usuarios.              
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img24.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="7" titulo="Transparencia")
            .col-lg-12.order-lg-2.order-3
              p.mb-lg-4.mb-0  En ciberseguridad, implica que las organizaciones comuniquen de manera clara y abierta las medidas de protección que están implementando, así como los riesgos potenciales. Las auditorías y los informes de seguridad ayudan a asegurar que las partes interesadas puedan evaluar cómo una organización maneja sus riesgos de seguridad.             
            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img25.png', alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .mb-0 Las características de la ciberseguridad no solo cubren la protección básica de la información, sino que también abordan aspectos esenciales como la autenticación, la resiliencia y el cumplimiento normativo, entre otros. La implementación efectiva de estas características es crucial para proteger, tanto a individuos como a organizaciones de las amenazas digitales cada vez más sofisticadas. 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-left")
        .cajon.color-primario.p-4
          p.mb-0 A medida que los sistemas digitales se expanden y evolucionan, la seguridad debe adaptarse para enfrentar nuevos desafíos y estas características deben ser la base sobre la cual se construyan las estrategias de ciberseguridad.
    
    separador
    .tarjeta-BG02.px-4
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.4	Importancia de la ciberseguridad en el entorno empresarial
      
      p.mb-5 La ciberseguridad es muy importante para las empresas, porque ayuda a proteger toda la información que manejan día a día, como datos personales de los clientes, documentos internos, contraseñas y cuentas bancarias. En el mundo actual, la mayoría de las empresas depende de sistemas digitales y del Internet para funcionar, lo que las hace vulnerables a diferentes tipos de amenazas, como hackers que intentan robar información, virus que dañan los sistemas o correos falsos que engañan a los empleados. Si ocurre un ataque de este tipo, la empresa puede perder mucho dinero, dejar de funcionar por un tiempo o incluso tener problemas con la ley. Pero aún más grave puede ser que los clientes pierdan la confianza en esa empresa y decidan no seguir comprando o contratando sus servicios. Por eso, la ciberseguridad no solo protege los datos, también ayuda a que la empresa siga funcionando sin interrupciones y mantenga su buena reputación.
      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img26.png', alt='Imagen decorativa')
      .col-lg-7(data-aos="fade-left")
        p Además, tener buena ciberseguridad permite que las empresas usen nuevas tecnologías con mayor seguridad, como el trabajo desde casa, las ventas en línea o el almacenamiento de información en la nube. Para muchas empresas, cumplir con leyes y normas de protección de datos también es obligatorio y no hacerlo puede traerles multas o sanciones. Al cuidar bien sus sistemas, las empresas pueden adelantarse a los problemas, evitar daños grandes y demostrar que son responsables con la información que manejan. Por eso, invertir en ciberseguridad no es un gasto innecesario, sino una forma de asegurar el futuro del negocio. 
        .cajon.color-secundario.p-4
          p.mb-0 En resumen, la ciberseguridad es fundamental para que cualquier empresa funcione de forma segura, mantenga la confianza de sus clientes y se adapte a los cambios del mundo digital.
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5	Normas y marcos legales relacionados
    p Las normas y regulaciones internacionales en ciberseguridad, establecen marcos de referencia, buenas prácticas y requisitos técnicos que permiten proteger la información en diversos contextos. Estas normativas son esenciales para guiar a organizaciones y gobiernos en la creación de políticas y sistemas de seguridad robustos, ayudando a mitigar los riesgos cibernéticos y garantizar la protección de los datos. 
    p.mb-4 A continuación, se presentan algunas de las más reconocidas:
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 1.
      i Principales normas y regulaciones internacionales en ciberseguridad
    .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in")
      table(alt="Texto alternativo tabla")
        thead
          tr(data-aos="fade-left")
            th Norma/Regulación	
            th Descripción	
            th Objetivo
        tbody
          tr(data-aos="fade-left")
            td ISO/IEC 27001	
            td Estándar internacional para la gestión de la seguridad de la información (SGSI).	
            td Establecer, implementar, mantener y mejorar un sistema de gestión de seguridad.
          tr(data-aos="fade-left")
            td ISO/IEC 27002
            td Guía de controles de seguridad de la información basada en ISO 27001.
            td Apoyar en la selección de medidas de seguridad adecuadas.
          tr(data-aos="fade-left")
            td ISO/IEC 27018
            td Directrices para la protección de la información personal en la nube.
            td Proteger la privacidad de los datos personales en los servicios de computación en la nube.
          tr(data-aos="fade-left")
            td NIST Cybersecurity Framework
            td Marco de referencia de ciberseguridad desarrollado por el National Institute of Standards and Technology.
            td Proporcionar directrices para mejorar la gestión de riesgos de ciberseguridad.
          tr(data-aos="fade-left")
            td GDPR (Reglamento General de Protección de Datos)
            td Reglamento europeo que regula la protección de datos personales.
            td Garantizar los derechos de los usuarios, el consentimiento y el almacenamiento seguro de datos.
          tr(data-aos="fade-left")
            td PCI-DSS (Payment Card Industry Data Security Standard)
            td Estándar para proteger los datos de tarjetas de pago.
            td Asegurar la protección de datos sensibles de las tarjetas de crédito/débito.
          tr(data-aos="fade-left")
            td HIPAA (Health Insurance Portability and Accountability Act)
            td Estándar de protección de la información de salud personal en EE.UU.
            td Asegurar la privacidad y la protección de los datos de salud personales.
          tr(data-aos="fade-left")
            td FISMA (Federal Information Security Management Act)
            td Norma para proteger los sistemas de información en agencias federales de EE.UU.
            td Establecer requisitos de seguridad para proteger las infraestructuras críticas del gobierno.
          tr(data-aos="fade-left")
            td Cybersecurity Act of 2015
            td Ley de ciberseguridad de EE.UU. para fomentar la colaboración público-privada.
            td Mejorar la colaboración para enfrentar amenazas cibernéticas y fomentar el intercambio de información.
          tr(data-aos="fade-left")
            td SOC 2
            td Estándar de auditoría para la seguridad, confidencialidad, integridad, etc.
            td Asegurar que los servicios en la nube cumplan con los requisitos de seguridad y privacidad.
          tr(data-aos="fade-left")
            td OECD Privacy Guidelines
            td Directrices internacionales de la OCDE para la protección de la privacidad.
            td Establecer estándares globales para la protección de la privacidad y los flujos de datos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Estas normas no solo ofrecen un enfoque integral para la ciberseguridad, sino que también buscan armonizar las mejores prácticas a nivel mundial, permitiendo la protección de la información en entornos cada vez más globalizados y digitales.

</template>

<script>
export default {
  name: 'Tema2',
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
