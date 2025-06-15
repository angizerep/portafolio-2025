<!-- README.md -->
# Informe – Portafolio

## ¿Qué hice?
Creé un archivo index.html el cual contiene:

- Un encabezado con mi nombre y subtítulo.
- Una sección "Sobre mí" con un pequeño párrafo descriptivo, mi foto de perfil y datos básicos.
- Una sección de "Proyectos" donde listo cinco trabajos o implementaciones relevantes.
- Una sección de "Habilidades e Intereses" con una lista desordenada de 5 habilidades y una lista ordenada de 5 intereses.
- Una sección de "Contacto y Redes" con tres enlaces (correo, GitHub y LinkedIn), de los cuales dos abren en nueva pestaña.
- Un pie de página con mi nombre, el año actual y una nota final de agradecimiento.
- Separadores visuales <hr> entre cada bloque para mejorar un poco la legibilidad.

Adicional el proyecto cuenta con una carpeta 'assets/img/' donde se encuantra la imagen de perfil, he separado los recursos estáticos (imágenes) en para mantener:

- Claridad: Distingo fácilmente el código HTML de los archivos multimedia.
- Mantenibilidad: Si luego agrego más imágenes, estilos o scripts, ya tengo el lugar donde colocarlos.
- Escalabilidad: Al crecer el proyecto la estructura sigue siendo intuitiva.
- Buenas prácticas: Según el estándar en desarrollo web es buena práctica agrupar en una carpeta 'assets/' todos los recursos externos al HTML.

## Estructura de archivos
index.html
README.md
assets/
    img/
        imagen-profile.jpeg

## ¿Qué secciones tiene mi página?
1. Encabezado
2. Sobre mí
3. Proyectos
4. Habilidades e Intereses
5. Contacto y Redes
6. Pie de página

Cada sección está claramente delimitada con <section id="…"> y separada por <hr>.

## ¿Qué etiquetas HTML usé y por qué?
- <!DOCTYPE html>, <html lang="es">, <head>, <meta charset="UTF-8">, <title>
Para definir la estructura básica del documento y garantizar la codificación y el idioma.
- <header> y <footer>
Para marcar la cabecera y el pie de página de forma semántica.
- <main>
Para englobar el contenido principal de la página.
- <section id="…">
Para dividir el contenido en bloques semánticos independientes, el id es para identificar la sección.
- <h1>, <h2>, <h3>
Para títulos y subtítulos con jerarquía clara.
- <p>
Para párrafos de texto descriptivo.
- <strong>
Para resaltar (colocar en negrita) palabras clave dentro del texto.
- <figure> + <img> + <alt>
Para insertar la imagen de perfil y agregar un texto en caso que la imagen no se pueda visualizar.
- <dl>, <dt>, <dd>
Para organizar pares de término/definición en la sección "Sobre mí".
- <ul>, <ol>, <li>
Para listas de habilidades (desordenada) e intereses (ordenada).
- <a href="…"> con target="_blank" y rel="noopener noreferrer"
Para enlaces externos, el '_blank' garantiza que abra en nueva pestaña y rel="noopener noreferrer" se implementa por buenas prácticas de seguridad.
- <hr>
Para separadores visuales entre secciones, mejorando la lectura sin necesidad de CSS.

## ¿Qué parte me costó más? ¿Qué aprendí?
- Lo más desafiante fue mantener una correcta semántica en el HTML, el usar <section> en lugar de <div> y en especial verificar que todas las etiquetas estuvieran bien cerradas (para ello finalmente utilicé la extensión XML de Red Hat).

## Aprendizaje clave:
- La importancia de la estructura semántica para accesibilidad y SEO.
- El uso de <figure> aporta contexto adicional a las imágenes.
- Cómo combinar listas y definiciones para presentar distintos tipos de información.
- La utilidad de <hr> como separador visual cuando aún no se aplica CSS.
- Buenas prácticas en enlaces externos con target="_blank" y atributos rel.
