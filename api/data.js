let products = [
  {
    id: 1,
    category_id: 1,
    category_name: "Cemilan",
    sku: "MHZVTK",
    name: "Ciki ciki",
    description: "Ciki ciki yang super enak, hanya di toko klontong kami",
    weight: 500,
    width: 5,
    length: 5,
    height: 5,
    image: "https://plus.unsplash.com/premium_photo-1669648878551-0490585cfd74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    price: "30000"
  },
  {
    id: 2,
    category_id: 1,
    category_name: "Cemilan",
    sku: "PLMNOQ",
    name: "Keripik Singkong Balado",
    description: "Keripik singkong pedas manis, bikin nagih!",
    weight: 250,
    width: 4,
    length: 6,
    height: 3,
    image: "https://plus.unsplash.com/premium_photo-1669648878551-0490585cfd74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    price: "15000"
  },
  {
    id: 3,
    category_id: 2,
    category_name: "Minuman",
    sku: "QWERTY",
    name: "Es Teh Manis",
    description: "Segar dan nikmat, pelepas dahaga.",
    weight: 300,
    width: 7,
    length: 7,
    height: 10,
    image: "https://plus.unsplash.com/premium_photo-1669648878551-0490585cfd74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    price: "8000"
  },
  {
    id: 4,
    category_id: 3,
    category_name: "Kebutuhan Pokok",
    sku: "AZBYCX",
    name: "Beras Premium 5kg",
    description: "Beras pilihan kualitas terbaik untuk keluarga.",
    weight: 5000,
    width: 30,
    length: 20,
    height: 10,
    image: "https://plus.unsplash.com/premium_photo-1669648878551-0490585cfd74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    price: "65000"
  },
  {
    id: 5,
    category_id: 1,
    category_name: "Cemilan",
    sku: "POIUYT",
    name: "Permen Aneka Rasa",
    description: "Berbagai rasa permen dalam satu kemasan.",
    weight: 100,
    width: 3,
    length: 8,
    height: 2,
    image: "https://plus.unsplash.com/premium_photo-1669648878551-0490585cfd74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    price: "5000"
  },
  {
    id: 6,
    category_id: 2,
    category_name: "Minuman",
    sku: "LKJHGF",
    name: "Kopi Hitam Bubuk",
    description: "Kopi bubuk asli, siap seduh.",
    weight: 200,
    width: 10,
    length: 12,
    height: 5,
    image: "https://plus.unsplash.com/premium_photo-1669648878551-0490585cfd74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    price: "25000"
  },
  {
    id: 7,
    category_id: 4,
    category_name: "Peralatan Rumah Tangga",
    sku: "ZXCVBN",
    name: "Sabun Cuci Piring",
    description: "Efektif membersihkan noda minyak.",
    weight: 750,
    width: 6,
    length: 6,
    height: 20,
    image: "https://plus.unsplash.com/premium_photo-1669648878551-0490585cfd74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    price: "12000"
  },
  {
    id: 8,
    category_id: 1,
    category_name: "Cemilan",
    sku: "MNBVCX",
    name: "Roti Coklat Keju",
    description: "Roti lembut dengan isian coklat dan keju melimpah.",
    weight: 150,
    width: 10,
    length: 8,
    height: 4,
    image: "https://plus.unsplash.com/premium_photo-1669648878551-0490585cfd74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    price: "10000"
  },
  {
    id: 9,
    category_id: 2,
    category_name: "Minuman",
    sku: "ASDFGH",
    name: "Susu UHT Coklat",
    description: "Susu segar rasa coklat, cocok untuk sarapan.",
    weight: 1000,
    width: 7,
    length: 7,
    height: 25,
    image: "https://plus.unsplash.com/premium_photo-1669648878551-0490585cfd74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    price: "18000"
  },
  {
    id: 10,
    category_id: 3,
    category_name: "Kebutuhan Pokok",
    sku: "TYUIOP",
    name: "Minyak Goreng 2L",
    description: "Minyak goreng berkualitas tinggi untuk memasak.",
    weight: 2000,
    width: 15,
    length: 10,
    height: 30,
    image: "https://plus.unsplash.com/premium_photo-1669648878551-0490585cfd74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    price: "35000"
  }
];

let productCategories = [
  {
    id: 1,
    name: "Cemilan",
  },
  {
    id: 2,
    name: "Minuman",
  },
  {
    id: 3,
    name: "Kebutuhan Pokok",
  },
  {
    id: 4,
    name: "Peralatan Rumah Tangga",
  },
]

export { products, productCategories };