const products = [
    {
        id: "1",
        name:"Perfume Armaf Club De Nuit Intense Edt 105",
        description:"Intenso Este perfume combina notas cítricas, afrutadas, cuero, ahumadas, amaderadas, aromáticas, dulces y almizcladas para crear una experiencia olfativa equilibrada y cautivadora que captura la frescura y energía de los cítricos con un toque intrigante...",
        price: 67988,
        stock: 1,
        category: "men",
        image:"https://mundoaromas.cl/cdn/shop/products/club-de-nuit-intense.jpg?v=1646238975"
    },
    {
        id: "2",
        name:"Perfume Armaf Club De Nuit Edp",
        description:"Este perfume de mujer presenta una combinación armoniosa de notas que crean una fragancia cautivadora.",
        price: 45200,
        stock: 1,
        category: "women",
        image:"https://mundoaromas.cl/cdn/shop/products/club-nuit-mujer-armaf.jpg?v=1646239005"
    },
    {
        id: "3",
        name:"Perfume Zara Vibrant Leather Edp",
        description:"Es una fragancia amaderada aromática para hombres que se lanzó en 2018. Es una fragancia fresca, vibrante y masculina que es perfecta para el uso diario.",
        price: 69980,
        stock: 1,
        category: "men",
        image:"https://mundoaromas.cl/cdn/shop/products/zaravibrantleathernuevo2023.jpg?v=1677693425"
    },
    {
        id: "4",
        name:"Perfume Cuba La Vida Edp",
        description:"Perfume Cuba La Vida Edp 100ml Mujer (Aroma Como La Vide Es Belle de Lancome )",
        price: 13980,
        stock: 1,
        category: "women",
        image:"https://mundoaromas.cl/cdn/shop/products/cuba-la-vida-edp-100ml.jpg?v=1646239262"
    },
    {
        id: "5",
        name:"Perfume Lattafa Asad Edp",
        description:"Es una fragancia oriental amaderada que combina notas cítricas y frescas en las notas de salida, un corazón especiado y exótico de especias y oud, y una base cálida y ambarina de maderas y ámbar.",
        price: 55980,
        stock: 1,
        category: "men",
        image:"https://mundoaromas.cl/cdn/shop/products/asad.jpg?v=1687455819"
    },
    {
        id: "6",
        name:"Tester Cacharel Amor Amor Edt",
        description:"Se lanzó en 2003 y fue creada por Laurent Bruyere y Dominique Ropion. Notas de salida: grosellas negras, naranja, mandarina, casia, bergamota. Notas de corazón: rosa, chabacano, jazmín, azucena y lirio de los valles (muguete)",
        price: 51980,
        stock: 1,
        category: "women",
        image:"https://mundoaromas.cl/cdn/shop/products/amor_amor_tester.png?v=1646238173"
    },
    {
        id: "7",
        name:"Perfume Tommy Hilfiger Men Edt",
        description:"La fragancia se abre con un aroma a menta y bergamota fresco y limpio. La menta le da un toque refrescante, mientras que la bergamota le da un toque cítrico.",
        price: 47980,
        stock: 1,
        category: "men",
        image:"https://mundoaromas.cl/cdn/shop/products/04_AM82668-02_000_01.jpg?v=1646238122"
    },
    {
        id: "8",
        name:"Perfume Ralph Lauren Big Pony 2 Edt",
        description:"La fragancia comienza con una explosión de notas afrutadas frescas, como la manzana, la pera, la naranja, la fresa y el melón.",
        price: 67980,
        stock: 1,
        category: "women",
        image:"https://mundoaromas.cl/cdn/shop/products/perfume-ralph-lauren-big-pony-2-dama-de-100ml.jpg?v=1646237496"
    },
    {
        id: "9",
        name:"Perfume Zara Vibrant Leather Edp",
        description:"ara Vibrant Leather Edp 120ml Hombre es una fragancia amaderada aromática para hombres que se lanzó en 2018.",
        price: 51800,
        stock: 1,
        category: "men",
        image:"https://mundoaromas.cl/cdn/shop/files/gsc_116409738_1483057_1.jpg?v=1696353391"
    }

]

const infoProducts = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(products)
    }, 4000)
})

export default infoProducts