// Demo de Jabemar S.L. (template carpinteria-metalica-1 «Medida»), 20/10/2026.
// Datos de su ficha de Google y fotos del propietario. Lo marcado «DEMO» está
// sin confirmar con el dueño: revisarlo antes de publicar como web de cliente.
import { defineSiteConfig } from "@andrei-leads/core";

export default defineSiteConfig({
  negocio: {
    nombre: "Jabemar",
    nombreLegal: "Jabemar S.L.",
    nif: "PENDIENTE", // DEMO: falta el CIF real
    sector: "Carpintería de aluminio",
    descripcionCorta:
      "Ventanas, cerramientos, puertas para locales y mamparas de aluminio a medida en València. Te asesoramos, medimos e instalamos.",
    anioFundacion: 1994, // DEMO: año de constitución de la SL según directorios
    tipoSchema: ["HomeAndConstructionBusiness"],
  },
  contacto: {
    telefono: "+34963487585",
    email: "jabemarsl@hotmail.com", // DEMO: sacado de directorios, sin confirmar
    direccion: { calle: "Carrer de l'Alqueria de l'Estrella, 5, bajo", cp: "46009", ciudad: "València", provincia: "Valencia" },
    horario: [{ dias: ["lunes", "martes", "miercoles", "jueves", "viernes"], abre: "08:00", cierra: "17:00" }],
    coordenadas: { lat: 39.4850786, lng: -0.3831678 },
    fichaGoogle: "https://maps.google.com/?cid=10631485673496264686",
  },
  valoracion: { media: 4.8, total: 34 },
  imagenesHero: [
    { src: "/fotos/cerramiento-terraza.jpg", alt: "Porche de un chalet cerrado con correderas de aluminio y vidrio" },
  ],
  // TEXTO DEMO: descripciones y contenidos escritos a partir de sus fotos y reseñas.
  servicios: [
    {
      titulo: "Ventanas de aluminio",
      descripcion: "Ventanas y balconeras de aluminio a medida, abatibles u oscilobatientes.",
      contenido: [
        "Cambiamos tus ventanas y balconeras por otras de aluminio hechas a medida de tu hueco, en blanco o en imitación madera.",
        "Te enseñamos varias opciones, tomamos las medidas exactas y nos encargamos de la colocación. Al terminar, lo dejamos todo limpio.",
      ],
      incluye: ["Asesoramiento y varias opciones", "Toma de medidas", "Fabricación a medida", "Colocación", "Limpieza al terminar"],
      imagenes: [
        { src: "/fotos/ventanas-correderas-arcos.jpg", alt: "Casa con ventanas de aluminio blanco bajo arcos" },
        { src: "/fotos/balconera-oscilobatiente.jpg", alt: "Balconera de aluminio blanco abierta en abatible" },
        { src: "/fotos/balconera-tres-hojas.jpg", alt: "Balconera de tres hojas de aluminio blanco entre muros de ladrillo" },
        { src: "/fotos/balconera-imitacion-madera.jpg", alt: "Balconera de aluminio imitación madera en una fachada antigua" },
      ],
    },
    {
      titulo: "Correderas y ventanales",
      descripcion: "Correderas de gran formato para salones, terrazas y obra nueva.",
      contenido: [
        "Ventanales correderos de aluminio para salones y salidas a terraza, en blanco o en acabado madera.",
        "Trabajamos tanto en reformas como en viviendas en obra.",
      ],
      incluye: ["Toma de medidas", "Fabricación a medida", "Colocación"],
      imagenes: [
        { src: "/fotos/corredera-acabado-madera.jpg", alt: "Corredera de gran formato de aluminio en acabado madera" },
        { src: "/fotos/ventanal-corredera-obra.jpg", alt: "Ventanal corredero de tres hojas en una vivienda en obra" },
      ],
    },
    {
      titulo: "Cerramientos de terraza",
      descripcion: "Cierra tu porche o terraza con correderas de aluminio y vidrio.",
      contenido: [
        "Cerramos porches y terrazas con correderas de aluminio y vidrio para ganar una estancia más en casa.",
      ],
      incluye: ["Toma de medidas", "Fabricación a medida", "Colocación"],
      imagenes: [{ src: "/fotos/cerramiento-terraza.jpg", alt: "Porche de un chalet cerrado con correderas de aluminio y vidrio" }],
    },
    {
      titulo: "Puertas para locales y comunidades",
      descripcion: "Puertas y fachadas de aluminio para comercios, portales y salidas de emergencia.",
      contenido: [
        "Puertas de aluminio y vidrio para locales a pie de calle, portales y espacios públicos, también con barra antipánico para salidas de emergencia.",
      ],
      incluye: ["Toma de medidas", "Fabricación a medida", "Colocación"],
      imagenes: [
        { src: "/fotos/locales-puertas-ventanas.jpg", alt: "Fachada de locales con puertas y ventanas de aluminio" },
        { src: "/fotos/puerta-doble-antipanico.jpg", alt: "Puerta doble de aluminio blanco y vidrio en un acceso" },
        { src: "/fotos/puertas-emergencia.jpg", alt: "Puertas de aluminio con barra antipánico y salida de emergencia" },
        { src: "/fotos/puerta-vidrio-perfil-negro.jpg", alt: "Puerta de vidrio con perfil negro y tirador largo en un local" },
      ],
    },
    {
      titulo: "Mamparas de baño",
      descripcion: "Mamparas de ducha y fijos de vidrio a medida.",
      contenido: [
        "Mamparas de ducha y paños fijos de vidrio, transparentes o translúcidos, hechos a la medida de tu baño.",
      ],
      incluye: ["Toma de medidas", "Vidrio a medida", "Colocación"],
      imagenes: [
        { src: "/fotos/mampara-ducha.jpg", alt: "Ducha con mampara de vidrio y herrajes dorados" },
        { src: "/fotos/mampara-fija-bano.jpg", alt: "Mampara fija de vidrio translúcido en un baño reformado" },
      ],
    },
    {
      titulo: "Puertas correderas de interior",
      descripcion: "Correderas de vidrio con perfil negro para separar ambientes.",
      imagenes: [{ src: "/fotos/corredera-interior-vidrio.jpg", alt: "Puerta corredera de vidrio con perfilería negra entre salón y cocina" }],
    },
    {
      titulo: "Vallas de lamas de aluminio",
      descripcion: "Vallas y cerramientos de parcela con lamas horizontales.",
      imagenes: [
        { src: "/fotos/valla-lamas-muro.jpg", alt: "Valla de lamas horizontales de aluminio sobre un muro" },
        { src: "/fotos/valla-lamas-detalle.jpg", alt: "Detalle de una valla de lamas de aluminio oscuro" },
      ],
    },
    {
      titulo: "Persianas",
      descripcion: "Persianas enrollables de aluminio para ventanas y puertas.",
      imagenes: [{ src: "/fotos/persianas-puerta-madera.jpg", alt: "Fachada con persianas enrollables marrones junto a una puerta de madera" }],
    },
  ],
  galeria: [
    { src: "/fotos/cerramiento-terraza.jpg", alt: "Porche de un chalet cerrado con correderas de aluminio y vidrio", titulo: "Cerramiento de porche" },
    { src: "/fotos/corredera-acabado-madera.jpg", alt: "Corredera de gran formato de aluminio en acabado madera", titulo: "Corredera acabado madera" },
    { src: "/fotos/ventanal-corredera-obra.jpg", alt: "Ventanal corredero de tres hojas en una vivienda en obra", titulo: "Ventanal en obra nueva" },
    { src: "/fotos/locales-puertas-ventanas.jpg", alt: "Fachada de locales con puertas y ventanas de aluminio", titulo: "Locales a pie de calle" },
    { src: "/fotos/mampara-ducha.jpg", alt: "Ducha con mampara de vidrio y herrajes dorados", titulo: "Mampara de ducha" },
    { src: "/fotos/ventanas-correderas-arcos.jpg", alt: "Casa con ventanas de aluminio blanco bajo arcos", titulo: "Ventanas en un chalet" },
    { src: "/fotos/balconera-imitacion-madera.jpg", alt: "Balconera de aluminio imitación madera en una fachada antigua", titulo: "Balconera imitación madera" },
    { src: "/fotos/corredera-interior-vidrio.jpg", alt: "Puerta corredera de vidrio con perfilería negra entre salón y cocina", titulo: "Corredera de interior" },
    { src: "/fotos/puerta-doble-antipanico.jpg", alt: "Puerta doble de aluminio blanco y vidrio en un acceso", titulo: "Puerta de acceso" },
    { src: "/fotos/balconera-oscilobatiente.jpg", alt: "Balconera de aluminio blanco abierta en abatible", titulo: "Balconera oscilobatiente" },
    { src: "/fotos/balconera-tres-hojas.jpg", alt: "Balconera de tres hojas de aluminio blanco entre muros de ladrillo", titulo: "Balconera de tres hojas" },
    { src: "/fotos/mampara-fija-bano.jpg", alt: "Mampara fija de vidrio translúcido en un baño reformado", titulo: "Mampara fija" },
    { src: "/fotos/puerta-vidrio-perfil-negro.jpg", alt: "Puerta de vidrio con perfil negro y tirador largo en un local", titulo: "Puerta de local" },
    { src: "/fotos/puertas-emergencia.jpg", alt: "Puertas de aluminio con barra antipánico y salida de emergencia", titulo: "Salida de emergencia" },
    { src: "/fotos/valla-lamas-muro.jpg", alt: "Valla de lamas horizontales de aluminio sobre un muro", titulo: "Valla de lamas" },
    { src: "/fotos/valla-lamas-detalle.jpg", alt: "Detalle de una valla de lamas de aluminio oscuro" },
    { src: "/fotos/persianas-puerta-madera.jpg", alt: "Fachada con persianas enrollables marrones junto a una puerta de madera", titulo: "Persianas" },
  ],
  // Reseñas de su ficha de Google (texto literal, recortado con «…»).
  resenas: [
    { autor: "Vicky R.", texto: "Mi familia y yo llevamos años confiando en Pepe de JABEMAR SL y no podemos estar más contentos y satisfechos. Nos ha hecho de todo: ventanas, mosquiteras, persianas, mampara de ducha, espejos y alguna reparación urgente. Siempre puntual, muy profesional, precios justos y deja todo limpio y perfecto.", puntuacion: 5, fecha: "2026-09-02", fuente: "google" },
    { autor: "Paqui G.", texto: "La atención y gestión del encargo, tomando medidas exactas, su elaboración precisa y la colocación impecable en muy poco tiempo hacen que siempre confié en Jabemar. Totalmente recomendables.", puntuacion: 5, fecha: "2026-09-02", fuente: "google" },
    { autor: "Maciek B.", texto: "Excelente profesionalidad de principio a fin. El montaje se realizó de manera pulcra y eficiente, utilizando materiales de primera calidad que ofrecen un aislamiento térmico y acústico perfecto.", puntuacion: 5, fecha: "2026-09-02", fuente: "google" },
    { autor: "Inmaculada P.", texto: "Consulte varias opciones para una ventana dentro del baño. Pepe me dio varias opciones que fueron acordes a lo que yo quería. Y el presupuesto fenomenal.", puntuacion: 5, fecha: "2026-09-13", fuente: "google" },
    { autor: "Teo N.", texto: "Nos han cambiado una ventana y areglado una puerta. Muy buen trabajo, buen producto. Saben lo que hacen, lo tienen todo pensado. Te ofrecen opciones, te aconsejan y explican las cosas.", puntuacion: 5, fecha: "2026-09-03", fuente: "google" },
    { autor: "Mónica F.", texto: "Una empresa de diez, en cuanto hablas con ellos y les transmites tus necesidades te cogen la idea enseguida, te sugieren mejoras y así es más fácil que el producto final te encante.", puntuacion: 5, fecha: "2026-09-02", fuente: "google" },
  ],
  empresa: {
    // TEXTO DEMO
    historia: [
      "Jabemar es una carpintería de aluminio con local en el barrio de La Saïdia, en València.",
      "Asesoramos, tomamos medidas, fabricamos e instalamos ventanas, puertas, cerramientos y mamparas a medida.",
    ],
    imagenes: [{ src: "/fotos/empresa-local.jpg", alt: "Fachada del local de Jabemar con el rótulo «Carpintería aluminio»" }],
  },
  marca: { colorPrimario: "#005fcc" }, // azul del rótulo del local
  seo: {
    titulo: "Carpintería de aluminio en València · Jabemar",
    descripcion: "Ventanas, correderas, cerramientos de terraza, puertas para locales y mamparas de aluminio a medida en València. Asesoramos, medimos e instalamos.",
    url: "https://web-jabemar.vercel.app", // DEMO: corregir con la URL real de Vercel
  },
  analitica: { vercel: true },
});
