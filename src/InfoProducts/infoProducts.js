export const products = [
    {
        id: 1,
        name:"Perfume Armaf Club De Nuit Intense Edt 105",
        description:"Intense This perfume combines citrus, fruity, leather, smoky, woody, aromatic, sweet and musky notes to create a balanced and captivating olfactory experience that captures the freshness and energy of citrus fruits with an intriguing touch...",
        price: "67.988",
        category: "men",
        stock: 8,
        image:"https://mundoaromas.cl/cdn/shop/products/club-de-nuit-intense.jpg?v=1646238975"
    },
    {
        id: 2,
        name:"Perfume Armaf Club De Nuit Edp",
        description:"This women's perfume presents a harmonious combination of notes that create a captivating fragrance.",
        price: "45.200",
        category: "women",
        stock:3,
        image:"https://mundoaromas.cl/cdn/shop/products/club-nuit-mujer-armaf.jpg?v=1646239005"
    },
    {
        id: 3,
        name:"Perfume Zara Vibrant Leather Edp",
        description:"It is an aromatic woody fragrance for men that was launched in 2018. It is a fresh, vibrant and masculine fragrance that is perfect for everyday wear.",
        price: "69.980",
        category: "men",
        stock:5,
        image:"https://mundoaromas.cl/cdn/shop/products/zaravibrantleathernuevo2023.jpg?v=1677693425"
    },
    {
        id: 4,
        name:"Perfume Cuba La Vida Edp",
        description:"Cuba La Vida Perfume Edp 100ml for Women (Aroma Como La Vide Es Belle by Lancome)",
        price: "13.980",
        category: "women",
        stock:9,
        image:"https://mundoaromas.cl/cdn/shop/products/cuba-la-vida-edp-100ml.jpg?v=1646239262"
    },
    {
        id: 5,
        name:"Perfume Lattafa Asad Edp",
        description:"It is an oriental woody fragrance that combines citrus and fresh notes in the top notes, a spicy and exotic heart of spices and oud, and a warm and amber base of woods and amber.",
        price: "55.980",
        category: "men",
        stock:7,
        image:"https://mundoaromas.cl/cdn/shop/products/asad.jpg?v=1687455819"
    },
    {
        id: 6,
        name:"Tester Cacharel Amor Amor Edt",
        description:"It was launched in 2003 and was created by Laurent Bruyere and Dominique Ropion. Top notes: black currants, orange, mandarin orange, cassia, bergamot. Heart notes: rose, apricot, jasmine, lily and lily of the valley",
        price: "51.980",
        category: "women",
        stock:12,
        image:"https://mundoaromas.cl/cdn/shop/products/amor_amor_tester.png?v=1646238173"
    },
    {
        id: 7,
        name:"Perfume Tommy Hilfiger Men Edt",
        description:"The fragrance opens with a fresh and clean mint and bergamot aroma. Mint gives it a refreshing touch, while bergamot gives it a citrus touch.",
        price: "47.980",
        category: "men",
        stock:10,
        image:"https://mundoaromas.cl/cdn/shop/products/04_AM82668-02_000_01.jpg?v=1646238122"
    },
    {
        id: 8,
        name:"Perfume Ralph Lauren Big Pony 2 Edt",
        description:"The fragrance begins with a burst of fresh fruity notes, such as apple, pear, orange, strawberry and melon.",
        price: "67.980",
        category: "women",
        stock:7,
        image:"https://mundoaromas.cl/cdn/shop/products/perfume-ralph-lauren-big-pony-2-dama-de-100ml.jpg?v=1646237496"
    },
    {
        id: 9,
        name:"Perfume Zara Vibrant Leather Edp",
        description:"ara Vibrant Leather Edp 120ml Men is an aromatic woody fragrance for men that was launched in 2018.",
        price: "51.800",
        category: "men",
        stock:2,
        image:"https://mundoaromas.cl/cdn/shop/files/gsc_116409738_1483057_1.jpg?v=1696353391"
    }

]

const infoProducts = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(products)
    }, 3000)
})

export default infoProducts