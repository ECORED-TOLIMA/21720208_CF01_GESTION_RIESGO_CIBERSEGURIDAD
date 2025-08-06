<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'tema_actividad_didactica',
      titulo: 'Cuestionario',
      introduccion:
        'Objetivo: evaluar y reforzar el conocimiento adquirido sobre la ciberseguridad y los delitos informáticos, con el fin de lograr ajustar los procesos organizacionales.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'La ciberseguridad busca proteger la confidencialidad, integridad y disponibilidad de la información.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, estos son los pilares fundamentales de la ciberseguridad.',
          mensaje_incorrecto:
            'Incorrecto, la ciberseguridad se basa en asegurar confidencialidad, integridad y disponibilidad.',
        },
        {
          id: 2,
          texto:
            'Un Centro de Operaciones de Seguridad (SOC) monitorea continuamente las redes para detectar amenazas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, el SOC realiza monitoreo 24/7 para proteger la infraestructura tecnológica.',
          mensaje_incorrecto:
            'Incorrecto, el SOC sí monitorea continuamente para detectar y responder a incidentes.',
        },
        {
          id: 3,
          texto:
            'Las políticas de seguridad son documentos que establecen normas para proteger los activos de información.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, las políticas oficializan las normas y responsabilidades en seguridad.',
          mensaje_incorrecto:
            'Incorrecto, las políticas definen formalmente las reglas para proteger información.',
        },
        {
          id: 4,
          texto:
            'El NIST SP 800-61 es un marco internacional para la gestión de incidentes de ciberseguridad.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, es uno de los marcos más reconocidos para la respuesta a incidentes.',
          mensaje_incorrecto:
            'Incorrecto, este es un estándar internacional para la gestión de incidentes.',
        },
        {
          id: 5,
          texto:
            'La gestión de incidentes solo consiste en detectar ataques, sin importar la respuesta o mitigación.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, la gestión de incidentes incluye detección, respuesta, mitigación y recuperación.',
          mensaje_incorrecto:
            'Incorrecto, la gestión cubre todo el ciclo de vida del incidente, no solo la detección.',
        },
        {
          id: 6,
          texto:
            'La autenticación multifactor (MFA) es una medida que aumenta la seguridad en el acceso a sistemas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, MFA añade capas adicionales para verificar identidades.',
          mensaje_incorrecto:
            'Incorrecto, usar MFA es un método eficaz para mejorar la seguridad de accesos.',
        },
        {
          id: 7,
          texto:
            'Los SOC solo funcionan durante horas laborales, no operan las 24 horas del día.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, los SOC operan 24/7 para una vigilancia continua.',
          mensaje_incorrecto:
            'Incorrecto, la vigilancia continuada es esencial para detectar amenazas a cualquier hora.',
        },
        {
          id: 8,
          texto:
            'ISO/IEC 27035 es una norma que guía la gestión de incidentes de seguridad de la información.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, es un estándar internacional para la gestión de incidentes.',
          mensaje_incorrecto:
            'Incorrecto, esta norma realmente orienta sobre la gestión de incidentes.',
        },
        {
          id: 9,
          texto:
            'El phishing es un tipo de ataque que busca engañar para obtener información confidencial.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, el phishing busca engañar a usuarios para robar datos.',
          mensaje_incorrecto:
            'Incorrecto, el phishing es un ataque de ingeniería social para obtener información.',
        },
        {
          id: 10,
          texto:
            'Las políticas de seguridad solo deben aplicarse al personal del área de tecnología.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, la etapa de lecciones aprendidas es fundamental para prevenir futuros incidentes.',
          mensaje_incorrecto:
            'Incorrecto, la mejora continua es clave en la gestión de incidentes.',
        },
        {
          id: 11,
          texto:
            'Un buen programa antivirus puede proteger completamente contra todos los tipos de ataques cibernéticos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, el antivirus es una herramienta, pero no garantiza protección total.',
          mensaje_incorrecto:
            'Incorrecto, la seguridad debe ser integral y no depender solo de antivirus.',
        },
        {
          id: 12,
          texto:
            'La respuesta rápida y coordinada ante un incidente puede reducir el impacto en la organización.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, actuar rápido limita daños y permite recuperación eficaz.',
          mensaje_incorrecto:
            'Incorrecto, la rapidez y coordinación son esenciales en la respuesta a incidentes.',
        },
        {
          id: 13,
          texto:
            'El SOC es responsable de monitorear solo los sistemas físicos, no los servicios en la nube.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, actuar rápido limita daños y permite recuperación eficaz.',
          mensaje_incorrecto:
            'Incorrecto, la rapidez y coordinación son esenciales en la respuesta a incidentes.',
        },
        {
          id: 14,
          texto:
            'Las políticas de seguridad deben actualizarse regularmente para mantenerse efectivas.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, los incidentes pueden ser causados también por errores humanos o fallas internas.',
          mensaje_incorrecto:
            'Incorrecto, no todos los incidentes tienen origen externo.',
        },
        {
          id: 15,
          texto:
            'La inteligencia artificial es una tendencia emergente que ayuda a mejorar la ciberseguridad.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, la IA se usa para detección avanzada y respuesta automatizada.',
          mensaje_incorrecto:
            'Incorrecto, la IA es una herramienta emergente clave en ciberseguridad.',
        },
        {
          id: 16,
          texto:
            'Una política de seguridad debe definir claramente roles y responsabilidades.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, para que las políticas se apliquen correctamente, se deben asignar responsabilidades.',
          mensaje_incorrecto:
            'Incorrecto, los roles bien definidos son esenciales para la eficacia de una política.',
        },
        {
          id: 17,
          texto:
            'No hay forma de protegerse contra los ataques de ransomware una vez que el malware ha cifrado los archivos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, las copias de seguridad y soluciones especializadas pueden ayudar a recuperarse sin pagar.',
          mensaje_incorrecto:
            'Incorrecto, aunque el ransomware haya cifrado los archivos, aún es posible recuperarse si se cuenta con copias de seguridad o se utilizan soluciones especializadas.',
        },
        {
          id: 18,
          texto:
            'Los dispositivos móviles no necesitan protección contra virus porque solo las computadoras son vulnerables.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, los smartphones también pueden infectarse con malware o ser atacados.',
          mensaje_incorrecto:
            'Incorrecto, los dispositivos móviles sí pueden ser vulnerables. Al igual que las computadoras, los smartphones pueden infectarse con malware o sufrir ataques de seguridad.',
        },
        {
          id: 19,
          texto:
            'Hacer clic en enlaces desconocidos o sospechosos en redes sociales puede comprometer la seguridad de un dispositivo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, estos enlaces pueden llevar a sitios maliciosos o descargar software dañino.',
          mensaje_incorrecto:
            'Incorrecto, estos enlaces pueden dirigir a sitios maliciosos o descargar software dañino sin que el usuario lo note.',
        },
        {
          id: 20,
          texto:
            'Es seguro compartir la contraseña con un amigo si se confías en él completamente.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, compartir contraseñas siempre representa un riesgo, sin importar la confianza.',
          mensaje_incorrecto:
            'Incorrecto, la seguridad digital se basa en mantener las credenciales de acceso personales y confidenciales.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Felicitaciones, ha superado la actividad, demostrando sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
