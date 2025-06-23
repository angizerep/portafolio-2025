`<!-- README.md -->`
# Informe – Portafolio

## ¿Qué hice?
Creé un archivo index.html el cual contiene:

- Un encabezado con mi nombre y subtítulo.
- Una sección "Sobre mí" con un pequeño párrafo descriptivo, mi foto de perfil y datos básicos.
- Una sección de "Proyectos" donde listo cinco trabajos o implementaciones relevantes.
- Una sección de "Habilidades e Intereses" con una lista desordenada de 5 habilidades y una lista ordenada de 5 intereses.
- Una sección de "Contacto y Redes" con tres enlaces (correo, GitHub y LinkedIn), de los cuales dos abren en nueva pestaña.
- Un pie de página con mi nombre, el año actual y una nota final de agradecimiento.
- Separadores visuales `<hr>` entre cada bloque para mejorar un poco la legibilidad.

Adicional el proyecto cuenta con una carpeta 'assets/img/' donde se encuantra la imagen de perfil, he separado los recursos estáticos (imágenes) en para mantener:

- Claridad: Distingo fácilmente el código HTML de los archivos multimedia.
- Mantenibilidad: Si luego agrego más imágenes, estilos o scripts, ya tengo el lugar donde colocarlos.
- Escalabilidad: Al crecer el proyecto la estructura sigue siendo intuitiva.
- Buenas prácticas: Según el estándar en desarrollo web es buena práctica agrupar en una carpeta 'assets/' todos los recursos externos al HTML.

## Estructura de archivos
```
Portafolio/
├── index.html  – Contiene la estructura semántica del portafolio.
├── README.md   – Archivo con el desarrollo realizado.
└── assets/
    ├── img/
    │   └── imagen-profile.jpeg – Imagen de perfil.
    └── css/
        └── style.css – Hoja de estilos.
└── informes/ - Carpeta para agregar los informes por unidad
```

## ¿Qué secciones tiene mi página?
1. Encabezado
2. Sobre mí
3. Proyectos
4. Habilidades e Intereses
5. Contacto y Redes
6. Pie de página

Cada sección está claramente delimitada con `<section id="…">` y separada por `<hr>`.

## ¿Qué etiquetas HTML usé y por qué?
- `<!DOCTYPE html>`, `<html lang="es">`, `<head>`, `<meta charset="UTF-8">`, `<title>`
Para definir la estructura básica del documento y garantizar la codificación y el idioma.
- `<header>` y `<footer>`
Para marcar la cabecera y el pie de página de forma semántica.
- `<main>`
Para englobar el contenido principal de la página.
- `<section id="…">`
Para dividir el contenido en bloques semánticos independientes, el id es para identificar la sección.
- `<h1>`, `<h2>`, `<h3>`
Para títulos y subtítulos con jerarquía clara.
- `<p>`
Para párrafos de texto descriptivo.
- `<strong>`
Para resaltar (colocar en negrita) palabras clave dentro del texto.
- `<figure>` + `<img>` + `<alt>`
Para insertar la imagen de perfil y agregar un texto en caso que la imagen no se pueda visualizar.
- `<dl>`, `<dt>`, `<dd>`
Para organizar pares de término/definición en la sección "Sobre mí".
- `<ul>`, `<ol>`, `<li>`
Para listas de habilidades (desordenada) e intereses (ordenada).
- `<a href="…">` con target="_blank" y rel="noopener noreferrer"
Para enlaces externos, el '_blank' garantiza que abra en nueva pestaña y rel="noopener noreferrer" se implementa por buenas prácticas de seguridad.
- `<hr>`
Para separadores visuales entre secciones, mejorando la lectura sin necesidad de CSS.

## ¿Qué parte me costó más? ¿Qué aprendí?
- Lo más desafiante fue mantener una correcta semántica en el HTML, el usar `<section>` en lugar de `<div>` y en especial verificar que todas las etiquetas estuvieran bien cerradas (para ello finalmente utilicé la extensión XML de Red Hat).

## Aprendizaje clave:
- La importancia de la estructura semántica para accesibilidad y SEO.
- El uso de `<figure>` aporta contexto adicional a las imágenes.
- Cómo combinar listas y definiciones para presentar distintos tipos de información.
- La utilidad de `<hr>` como separador visual cuando aún no se aplica CSS.
- Buenas prácticas en enlaces externos con target="_blank" y atributos rel.

# Informe – Portafolio con CSS

## ¿Qué estilos apliqué?

- **Tipografía**: `Courier, monospace`
- **Colores**: 
    - Fondo general: `#f4f4f4`
    - Títulos: `#2c3e50`, `#2980b9`, `#5fabc0`
    - Texto secundario: `#7f8c8d`, `#34495e`, `#777`
- Efectos hover en enlaces.
- Imagen circular.
- Datos personales distribuidos en 2 columnas.
- Márgenes, rellenos y bordes para separar visualmente las secciones.

- Estructura general del diseño
    - **Encabezado (`<header>`)**: Centrado, colores sobrios.
    - **Sección "Sobre mí"**: Imagen a la izquierda, texto justificado a la derecha.
    - **Datos personales**: Flexbox en dos columnas.
    - **Listas**: Viñetas cuadradas para habilidades, numeradas para intereses.
    - **Enlaces**: Efecto `hover` y colores corporativos.

## ¿Qué selectores usé?

- **Selectores de clase (`.`)**:
    - `.presentacion`: Para la organización del párrafo de bienvenida e imagen.
    - `.profile-picture`: Para dar estilo personalizado a la imagen.
    - `.datos-personales`: Contenedor de la subsección de datos.
    - `.datos-personales-list`: Para crear la estructura en columnas.
    - `.bloque`: Divide cada grupo de `dt` y `dd` en una columna.
- **Selectores por ID (`#`)**:
    - `#proyectos`, `#habilidades-intereses`, `#contactos-redes`: Para aplicar estilos únicos a secciones específicas.
- **Selectores de etiquetas**:
    - `body`, `header`, `footer`, `main`, `p`, `h1`, `h2`, `h3`, `ul`, `li`, `dl`, `dt`, `dd`: Para definir estilos globales: tamaño de letra, colores, alineación de texto.
- **Selector universal (`*`)**:
    - Se aplica `box-sizing: border-box` para que el padding y el border no alteren el tamaño del elemento.


## ¿Qué parte del diseño fue más fácil?
- Estilizar los títulos y listas con al uso correcto de las etiquetas (<ul>, <ol>, <h2>.).
- Aplicar estilos básicos como colores o márgenes
- Aplicar efectos hover a los enlaces de redes y contacto.
- Cambiar la imagen cuadrada a forma circular con border-radius.

## ¿Qué parte fue más difícil?
- Organizar la sección de datos personales en dos columnas separadas manteniendo la estructura <dt> y <dd>, que no se salieran del espacio o no quedaran los títulos por un lado y el contenido por el otro, esto implicó cambios en el html para estruccturar los elementos en forma de columnas así como aplicar clases adicionales, ajustar márgenes y controlar alineaciones.
- También fue desafiante colocar correctamente la imagen de perfil a la izquierda del texto y que no desordenara el contenido, para ello también fue necesarios cambios en el html.


## ¿Qué aprendí?

- Separación de estructura y estilo.
- Aprendí a dividir contenido en columnas de forma controlada con css.
- Entendí cómo utilizar e incluso mezclar selectores de clase e ID para mantener estilos organizados.
- Aprendí a "reducir" redundancias o evitar tantos estilos repetidos agrupando selectores con estilos comunes.
- La importancia del uso de efectos visuales como hover para mejorar la experiencia del usuario.
- Que una buena estructura semántica HTML facilita mucho la escritura del CSS.
- Aplicar buenas prácticas para mantener claridad y escalabilidad.

## ¿Qué modificaciones se hicieron al HTML original y por qué?

- link rel="stylesheet": Se agregó la referencia a la hoja de estilos para separar estructura del estilo y seguir buenas prácticas.
- En la sección 'Sobre mí', se agregó <div class="presentacion"> con imagen float, para incluir imagen de perfil a la izquierda del texto.
- En la sección de datos personales, se reemplazó el <dl> por un <div class="datos-personales-list"> con dos bloques , para presentar la información personal en dos columnas
- Se creó el encabezado h3 en 'Datos personales' y se aplicó estilo para jerarquizar visualmente esa subsección.
