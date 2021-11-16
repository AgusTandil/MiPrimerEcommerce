const db = require("./db/db");
const Categories = require("./models/Categories");
const Products = require("./models/Products");
const Products_Categories = require("./models/Products_Categories");
const User_Profile = require("./models/User_Profile");

const userAdmin = {
  access: "admin",
  email: "admin@gmail.com",
  password: "admin",
  fullName: "Administrador",
  address: "Cespedes 1567",
  country: "Argentina",
  phone: "1130922002",
};

const categoriasParaSeedear = [
  {
    name: "Remeras Femeninas",
    sex: "Women",
  },
  {
    name: "Pantalones Femeninos",
    sex: "Women",
  },
  {
    name: "Buzos Femeninos",
    sex: "Women",
  },
  {
    name: "Camperas Femeninas",
    sex: "Women",
  },
  {
    name: "Shorts Femeninos",
    sex: "Women",
  },
  {
    name: "Remeras Masculinos",
    sex: "Men",
  },
  {
    name: "Pantalones Masculinos",
    sex: "Men",
  },
  {
    name: "Buzos Masculinos",
    sex: "Men",
  },
  {
    name: "Camperas Masculinos",
    sex: "Men",
  },
  {
    name: "Shorts Masculinos",
    sex: "Men",
  },
];

const productosPorCategoriaParaSeedear = [
  {
    productId: "1",
    categoryId: "6",
  },
  {
    productId: "2",
    categoryId: "7",
  },
  {
    productId: "3",
    categoryId: "9",
  },
  {
    productId: "4",
    categoryId: "5",
  },
  {
    productId: "5",
    categoryId: "6",
  },
  {
    productId: "6",
    categoryId: "10",
  },
  {
    productId: "7",
    categoryId: "2",
  },
  {
    productId: "8",
    categoryId: "3",
  },
  {
    productId: "9",
    categoryId: "4",
  },
  {
    productId: "10",
    categoryId: "8",
  },
  {
    productId: "11",
    categoryId: "1",
  },
  {
    productId: "12",
    categoryId: "9",
  },
  {
    productId: "13",
    categoryId: "2",
  },
  {
    productId: "14",
    categoryId: "10",
  },
  {
    productId: "15",
    categoryId: "1",
  },
  {
    productId: "16",
    categoryId: "1",
  },
  {
    productId: "17",
    categoryId: "1",
  },
  {
    productId: "18",
    categoryId: "6",
  },
  {
    productId: "19",
    categoryId: "6",
  },
  {
    productId: "20",
    categoryId: "7",
  },
  {
    productId: "21",
    categoryId: "7",
  },
  {
    productId: "22",
    categoryId: "8",
  },
  {
    productId: "23",
    categoryId: "9",
  },
  {
    productId: "24",
    categoryId: "9",
  },
  {
    productId: "25",
    categoryId: "10",
  },
  {
    productId: "26",
    categoryId: "10",
  },
  {
    productId: "27",
    categoryId: "10",
  },
  {
    productId: "28",
    categoryId: "8",
  },
  {
    productId: "29",
    categoryId: "8",
  },
  {
    productId: "30",
    categoryId: "8",
  },
  {
    productId: "31",
    categoryId: "2",
  },
  {
    productId: "32",
    categoryId: "2",
  },
  {
    productId: "33",
    categoryId: "4",
  },
  {
    productId: "34",
    categoryId: "4",
  },
  {
    productId: "35",
    categoryId: "4",
  },
  {
    productId: "36",
    categoryId: "5",
  },
  {
    productId: "37",
    categoryId: "5",
  },
  {
    productId: "38",
    categoryId: "5",
  },
  {
    productId: "39",
    categoryId: "3",
  },
  {
    productId: "40",
    categoryId: "3",
  },
  {
    productId: "41",
    categoryId: "3",
  },
];
const productosParaSeedear = [
  {
    title: "Remera Camiseta Deportiva",
    price: "830",
    description:
      "Remera de Poliéster dedicada a entrenamiento, running, gimnasio, futbol, rugby, ciclismo, calistenia, crossfit, funcional, atletismo",
    sex: "Men",
    image:
      "https://ae01.alicdn.com/kf/H91d78e98a1504192952288ec260f820cX/Camiseta-deportiva-de-camuflaje-para-hombre-camiseta-de-manga-corta-para-gimnasio-camiseta-de-compresi-n.jpg_Q90.jpg_.webp",
    category: "Remeras",
    stock: "10",
    rating: {
      rate: 4,
      count: 114,
    },
  },
  {
    title: "Hip-Hop Joggers",
    price: "4589",
    description:
      "Joggers de Hip-Hop para hombre, pantalones Cargo con cintas de letras, bolsillos, ropa táctica informal, chándal, ropa de calle deportiva",
    sex: "Men",
    image:
      "https://ae01.alicdn.com/kf/H0e0327a5ab964d9fb2aa41eae332e130X/Joggers-de-Hip-Hop-para-hombre-pantalones-Cargo-con-cintas-de-letras-bolsillos-ropa-t-ctica.jpg_Q90.jpg_.webp",
    category: "Pantalones",
    stock: "3",
    rating: {
      rate: 5,
      count: 259,
    },
  },
  {
    title: "Flash Studio",
    price: "8590",
    description:
      "Chaquetas rompevientos para hombre, abrigo informal con estampado de moda de Corea juvenil, chaquetas de Otoño de primavera",
    sex: "Men",
    image:
      "https://ae01.alicdn.com/kf/H86c72ade2ecd41728176e7bcacf12d23B/Chaquetas-rompevientos-para-hombre-abrigo-informal-con-estampado-de-moda-de-Corea-juvenil-chaquetas-de-Oto.jpg_Q90.jpg_.webp",
    category: "Camperas",
    stock: "24",
    rating: {
      rate: 4,
      count: 500,
    },
  },
  {
    title: "Hawai Short",
    price: "1590",
    description:
      "Pantalones cortos informales de verano para mujer, pantalón Sexy de cintura alta, a la moda",
    sex: "Women",
    image:
      "https://ae01.alicdn.com/kf/H58808c9b93ac4c7db97d79bb51c75436N/Pantalones-cortos-informales-de-verano-para-mujer-pantal-n-Sexy-de-cintura-alta-a-la-moda.jpg_Q90.jpg_.webp",
    category: "Shorts",
    stock: "1",
    rating: {
      rate: 5,
      count: 430,
    },
  },
  {
    title: "Remera lisa manga corta algodón",
    price: "1300",
    description: "Remeras de algodón peinado de excelente calidad",
    sex: "Men",
    image:
      "https://www.dhresource.com/0x0/f2/albu/g10/M00/DB/7F/rBVaWV6yN_OAcaPVAAVm4vE96WM365.jpg/men-hip-hop-loose-t-shirt-2020-summer-half.jpg",
    category: "Remeras",
    stock: "13",
    rating: {
      rate: 4,
      count: 400,
    },
  },
  {
    title: "Short Hombre Algodon",
    price: "1468",
    description: "Short Hombre Algodon Gym Entrenador Bermudas Tennis.",
    sex: "Men",
    image:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/108/170/products/9g1a72481-d85cad53d704ed2c8f15470739994849-1024-1024.jpg",
    category: "Shorts",
    stock: "13",
    rating: {
      rate: 5,
      count: 70,
    },
  },
  {
    title: "Pantalon De Mujer Algodon Lazo Elastizado",
    price: "1499",
    description:
      "Satisfacción garantizada. Devuelva o cambie cualquier pedido dentro de los 30 días. Diseñado y vendido por Hafeez Center en los Estados Unidos. ",
    sex: "Women",
    image:
      "https://ae01.alicdn.com/kf/Hb1979c7c3f084c719635d13a3191632df.jpg_q50.jpg",
    category: "Pantalones",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Fase Lunar Aesthetic Buzo Black & white",
    price: "4000",
    description: "Fase Lunar Aesthetic Buzo Black/withe - Japan Goth Moon.",
    sex: "Women",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_653437-MLA40662684122_022020-O.webp",
    category: "Buzos",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Rusty Malibu",
    price: "16472",
    description:
      "Esta prenda posee un tratamiento de repelencia al agua, que dificulta que el tejido la absorba favoreciendo las propiedades de impermeabilidad y antimanchas",
    sex: "Women",
    image:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/260/products/5de5392d-831a-4397-98f0-28fbc43006201-47febc531f1bdadfa515906005191065-640-0.jpeg",
    category: "Camperas",
    stock: "13",
    rating: {
      rate: 4,
      count: 70,
    },
  },
  {
    title: "Electric Grayson",
    price: "7162",
    description:
      "Es de secado rápido. Gracias a los canales generados entre sus puntos de contacto absorbe y elimina el exceso de calor corporal, manteniendo el cuerpo seco durante la actividad",
    sex: "Men",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_739829-MLA46089056406_052021-O.jpg",
    category: "Buzos",
    stock: "12",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Born Wild",
    price: "3376",
    description:
      "La moldería de esta prenda contempla un margen de encogimiento en el largo, ya que por la composición de su tejido, puede encoger después del primer lavado.",
    sex: "Women",
    image:
      "https://www.kvnstatic.com/productos/M32A3910/g/M32A3910_4-remera-estampada-mujer-kevingston.jpg",
    category: "Remeras",
    stock: "13",
    rating: {
      rate: 4,
      count: 70,
    },
  },
  {
    title: "Cross Closure",
    price: "20777",
    description:
      "Posee un tratamiento de repelencia al agua, que dificulta que el tejido la absorba favoreciendo las propiedades de impermeabilidad y antimanchas",
    sex: "Men",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_949428-MLA41305872814_042020-O.webp",
    category: "Camperas",
    stock: "13",
    rating: {
      rate: 4,
      count: 70,
    },
  },
  {
    title: "Pantalones deportivos ligeros, tipo jogger, con bolsillos",
    price: "68",
    description:
      " Los pantalones felpa son suaves, transpirables y elásticos y no se deforman, no se descoloran ni desgastan fácilmente, proporcionando la máxima durabilidad.",
    sex: "Women",
    image: "https://m.media-amazon.com/images/I/71-2LpyzPRL._AC_UX522_.jpg",
    category: "Pantalones",
    stock: "19",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Short Men",
    price: "168",
    description: "Bermudas formales cómodas, talla grande, talla asiática.",
    sex: "Men",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_849893-MLA43681293869_102020-O.webp",
    category: "Pantalones",
    stock: "13",
    rating: {
      rate: 1,
      count: 70,
    },
  },
  {
    title: "Remeron Amplio Remera",
    price: "1490",
    description: "Confeccionados en Poliéster y Lycra con mangas 3/4.",
    sex: "Women",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_787535-MLA43394711796_092020-O.webp",
    category: "Remeras",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Florcitas Blancas",
    price: "990",
    description: "Remera Importada Engomada Florcitas Blancas.",
    sex: "Women",
    image:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/960/824/products/img-20201014-wa04671-2b69154a7f932ad03a16029950548588-640-0.jpg",
    category: "Remeras",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Remera Kevingston manga larga",
    price: "3000",
    description: "Remera Kevingston manga larga con impresiones.",
    sex: "Women",
    image:
      "https://www.kvnstatic.com/imagenes/caracteristicas/2021-03-15REMERA%20-%20M%20LARGA.jpg",
    category: "Remeras",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Run Fila azul, negra y blanca",
    price: "1350",
    description: "Remera mangas cortas de running para hombre FILA RUN.",
    sex: "Men",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_610062-MLA45737896296_042021-O.webp",
    category: "Remeras",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Remera hombre retro serigrafia",
    price: "1500",
    description: "Remeras Tipo Retro - Excelente calce y confección.",
    sex: "Men",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_739740-MLA32061514275_092019-O.jpg",
    category: "Remeras",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Skinny Jeans",
    price: "4139",
    description:
      "Jeans blue- Distressed- Random Ripped- Skinny fit- Button Fastening.",
    sex: "Men",
    image:
      "https://i.pinimg.com/564x/ef/ba/65/efba6589e6848737a3fe8556d26ee431.jpg",
    category: "Pantalones",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Jeans rasgados estilo Hip Hop",
    price: "3900",
    description: "Pantalones vaqueros ajustados rotos para hombre.",
    sex: "Men",
    image:
      "https://ae01.alicdn.com/kf/H7ef7b91138ee42559b908956f8e4cc37f/Pantalones-vaqueros-ajustados-rotos-para-hombre-Jeans-rasgados-estilo-Hip-Hop-l-piz-de-dibujo-grafiti.jpg_Q90.jpg_.webp",
    category: "Pantalones",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Sudadera Hip Hop",
    price: "6050",
    description:
      "Sudaderas Hip Hop con capucha para hombres estilo Graffiti impresa - Streetwear.",
    sex: "Men",
    image:
      "https://ae01.alicdn.com/kf/HTB1DDl2a3FY.1VjSZFqq6ydbXXam/Sudaderas-Hip-Hop-con-capucha-para-hombres-2019-mujeres-Oto-o-Invierno-carta-Graffiti-chompa-con.jpg_Q90.jpg_.webp",
    category: "Buzos",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Lana cálido",
    price: "10000",
    description:
      "Chaquetas de invierno para hombre, abrigo de lana cálido, informal, de moda, ropa de alta calidad, rompevientos.",
    sex: "Men",
    image:
      "https://ae01.alicdn.com/kf/Ha487b22aa2cf434abe541d188f803bc8N/Chaquetas-de-invierno-para-hombre-abrigo-de-lana-c-lido-informal-de-moda-ropa-de-alta.jpg_Q90.jpg_.webp",
    category: "Camperas",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Chaqueta vaquera gris",
    price: "8500",
    description:
      "Chaqueta retro para hombre, abrigo informal ajustado de Nueva Juventud, ropa de calle de alta calidad, primavera y otoño.",
    sex: "Men",
    image:
      "https://ae01.alicdn.com/kf/H2a689c3d90874fb28b98768b57c796d7m/Chaqueta-vaquera-Retro-para-hombre-abrigo-informal-ajustado-de-Nueva-Juventud-ropa-de-calle-de-alta.jpg_Q90.jpg_.webp",
    category: "Camperas",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Short corto",
    price: "2300",
    description:
      "Pantalones cortos deportivos de secado rápido para hombre, elásticos, informales, transpirables, sueltos, para interiores y exteriores, para correr.",
    sex: "Men",
    image:
      "https://ae01.alicdn.com/kf/H84171a45aa94475383edbe0428644c49h/Pantalones-cortos-deportivos-de-secado-r-pido-para-hombre-el-sticos-informales-transpirables-sueltos-para-interiores.jpg_Q90.jpg_.webp",
    category: "Shorts",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Short desgastado corto",
    price: "2900",
    description:
      "Pantalones cortos de mezclilla para hombre, Vaqueros cortos de moda, desgastados, rasgados y desgastados.",
    sex: "Men",
    image:
      "https://ae01.alicdn.com/kf/Hb1fec6311a764daf828068df837b50aa2/Pantalones-cortos-de-mezclilla-para-hombre-Vaqueros-cortos-de-moda-desgastados-rasgados-y-desgastados-de-talla.jpg_Q90.jpg_.webp",
    category: "Shorts",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Short camuflaje",
    price: "1900",
    description:
      "Pantalones cortos de camuflaje para hombre, Shorts de algodón con bolsillos, informales, cordón de cintura media, holgados.",
    sex: "Men",
    image:
      "https://ae01.alicdn.com/kf/H086ce60731314f59bd7c2552f6f5c7c1W/Pantalones-cortos-de-camuflaje-para-hombre-Shorts-de-algod-n-con-bolsillos-informales-cord-n-de.jpeg_Q90.jpeg_.webp",
    category: "Shorts",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Graffiti japonés",
    price: "7500",
    description:
      "Sudadera sin capucha informal para hombre, ropa informal holgada con Graffiti japonés de gran tamaño, estilo Hip Hop.",
    sex: "Men",
    image:
      "https://ae01.alicdn.com/kf/He33c3fdb4bc840fc94723e3418a71135b/Sudadera-con-capucha-informal-para-hombre-ropa-informal-holgada-con-Graffiti-japon-s-de-gran-tama.jpg_Q90.jpg_.webp",
    category: "Buzos",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Much What, You",
    price: "6900",
    description:
      "Sudadera con capucha para hombre, ropa informal estilo Hip Hop, holgada, personalidad, sudadera con estampado de letras.",
    sex: "Men",
    image:
      "https://ae01.alicdn.com/kf/H0dde4042590247f7b962ec2c74728767b/Sudadera-con-capucha-para-hombre-ropa-informal-estilo-Hip-Hop-holgada-personalidad-sudadera-con-estampado-de.jpg_640x640.jpg",
    category: "Buzos",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Buzo Fashion",
    price: "5700",
    description:
      "Sudadera con capucha de estilo Hip Hop para hombre de moda, ropa informal de color sólido, estilo Harajuku con cuello redondo.",
    sex: "Men",
    image:
      "https://ae01.alicdn.com/kf/H9a3857e3ae8c44bba975e85219d023c7p/Sudadera-con-capucha-de-estilo-Hip-Hop-para-hombre-ropa-informal-de-Color-s-lido-estilo.jpg_640x640.jpg",
    category: "Buzos",
    stock: "13",
    rating: {
      rate: 2,
      count: 70,
    },
  },
  {
    title: "Cargo Matteobenni",
    price: "4300",
    description:
      "Pantalones Cargo para mujer, ropa de calle de cintura baja, vaqueros de pierna ancha con bolsillos, Vaqueros estéticos Harajuku Mom Boyfriend.",
    sex: "Women",
    image:
      "https://ae01.alicdn.com/kf/H5493ddf35c4142a0880cafb268cd7413c/Pantalones-Cargo-para-mujer-ropa-de-calle-de-cintura-baja-vaqueros-de-pierna-ancha-con-bolsillos.jpg_Q90.jpg_.webp",
    category: "Pantalones",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Jogging Hustle",
    price: "3400",
    description:
      "Pantalones de chándal holgados para mujer, calzas deportivas a la moda, ropa de calle para correr, Otoño.",
    sex: "Women",
    image:
      "https://ae01.alicdn.com/kf/H0fb9a034af34446faf5b5dd05d839cdbu/Pantalones-de-ch-ndal-holgados-para-mujer-calzas-deportivas-a-la-moda-ropa-de-calle-para.jpg_Q90.jpg_.webp",
    category: "Pantalones",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Campera Softshell",
    price: "13000",
    description:
      "Trekking-chaqueta Softshell para mujer, abrigo sólido para la lluvia al aire libre, impermeable con capucha de talla grande, larga, a prueba de viento, gran oferta.",
    sex: "Women",
    image:
      "https://ae01.alicdn.com/kf/Hb38cb73727f94296b6acc5ea0d4357bd4/Trekking-chaqueta-Softshell-para-mujer-abrigo-s-lido-para-la-lluvia-al-aire-libre-impermeable-con.jpg_640x640.jpg",
    category: "Camperas",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Lindo gatito",
    price: "9900",
    description:
      "Abrigo con capucha de felpa para mujer, forro polar cálido con botones y orejas de gatos, prendas de vestir exteriores de Color sólido, chaquetas sueltas con dobladillo Irregular para invierno.",
    sex: "Women",
    image:
      "https://ae01.alicdn.com/kf/H9232fdcec79d48a2bc989f9d560288e2s/Abrigo-con-capucha-de-felpa-para-mujer-forro-polar-c-lido-con-botones-y-orejas-de.jpg_Q90.jpg_.webp",
    category: "Camperas",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Felpudo Glaciar",
    price: "17000",
    description:
      "Chaqueta de retales de felpa con cremallera para mujer, abrigo con capucha, prendas de vestir, abrigo cálido de piel sintética con bolsillo, Parka holgada, abrigo de talla grande.",
    sex: "Women",
    image:
      "https://ae01.alicdn.com/kf/Hd8f6c723a4784e6d8c079fe5179287a1D/Chaqueta-de-retales-de-felpa-con-cremallera-para-mujer-abrigo-con-capucha-prendas-de-vestir-abrigo.jpg_Q90.jpg_.webp",
    category: "Camperas",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Moño gris",
    price: "1000",
    description:
      "Pantalones cortos de estilo europeo para mujer, shorts informales  de Fitness para el hogar, gran oferta.",
    sex: "Women",
    image:
      "https://ae01.alicdn.com/kf/H37d385a2aa6a40bba94d1aa1eb3ca4dfo/Pantalones-cortos-de-estilo-europeo-para-mujer-Shorts-informales-sexys-de-Fitness-para-el-hogar-de.jpg_640x640.jpg",
    category: "Shorts",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Jean con moño",
    price: "1650",
    description:
      "Pantalones cortos de cintura alta para mujer, vaqueros de verano",
    sex: "Women",
    image:
      "https://ae01.alicdn.com/kf/H76e45858cc424622a7a46ff327c231cbB/Pantalones-cortos-de-cintura-alta-para-mujer-vaqueros-de-talla-grande-XXL-de-verano-de-talla.jpg_640x640.jpg",
    category: "Shorts",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Flores del amanecer",
    price: "1200",
    description:
      "Pantalones cortos Vintage con flores para mujer, shorts ajustados de cintura media para mujer, Shorts estampados con foto de flores",
    sex: "Women",
    image:
      "https://ae01.alicdn.com/kf/Hb11d07d5d24c4873bd81aa3bca242424L/Pantalones-cortos-Vintage-con-flores-para-mujer-Shorts-ajustados-de-cintura-media-para-mujer-Shorts-estampados.jpg_Q90.jpg_.webp",
    category: "Shorts",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Jersey rojo",
    price: "4500",
    description:
      "Sudadera con capucha para mujer, Jersey informal de manga larga con capucha, jersey con capucha para mujer, chándales para mujer, ropa deportiva 2018",
    sex: "Women",
    image:
      "https://ae01.alicdn.com/kf/HTB1xjB0XyzxK1RjSspjq6AS.pXal/HCBLESS-Sudadera-con-capucha-para-mujer-Jersey-informal-de-manga-larga-con-capucha-jersey-con-capucha.jpg_Q90.jpg_.webp",
    category: "Buzos",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Fannic amarillo",
    price: "12000",
    description:
      "Fannic-sudaderas con capucha de manga larga para mujer, chándales de talla grande con capucha, Tops de color amarillo",
    sex: "Women",
    image:
      "https://ae01.alicdn.com/kf/HTB1Wnvne8Gw3KVjSZFDq6xWEpXaM/Fannic-sudaderas-con-capucha-de-manga-larga-para-mujer-ch-ndales-de-talla-grande-con-capucha.jpg_Q90.jpg_.webp",
    category: "Buzos",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
  {
    title: "Scooby Boozo",
    price: "12000",
    description:
      "Oversize perro sudadera Kawaii sudaderas con capucha de las mujeres ropa con capucha mujer se las mujeres de invierno sudaderas manga completa",
    sex: "Women",
    image:
      "https://ae01.alicdn.com/kf/H41e3c1ddad0148768f541892067112c2Q/2021-Oversize-perro-sudadera-Kawaii-sudaderas-con-capucha-de-las-mujeres-ropa-con-capucha-mujer-se.jpg_Q90.jpg_.webp",
    category: "Buzos",
    stock: "13",
    rating: {
      rate: 3,
      count: 70,
    },
  },
];

const seed = async () => {
  await User_Profile.create(userAdmin);
  return Categories.bulkCreate(categoriasParaSeedear)
    .then(() => Products.bulkCreate(productosParaSeedear))
    .then(() =>
      Products_Categories.bulkCreate(productosPorCategoriaParaSeedear)
    )
    .catch((err) => console.log(err));
};

seed().then(() => {
  process.exit();
});
