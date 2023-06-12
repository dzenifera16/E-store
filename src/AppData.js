const categoryData = [
  { id: 0, name: "Visi" },
  { id: 1, name: "apģērbi" },
  { id: 2, name: "apavi" },
  { id: 3, name: "sports" },
  { id: 4, name: "aksesuāri" },
  { id: 5, name: "rotaļlietas" }
];
const sizeData = [
  { id: 1, name: "XXS" },
  { id: 2, name: "XS" },
  { id: 3, name: "S" },
  { id: 4, name: "M" },
  { id: 5, name: "L" },
  { id: 6, name: "XL" }
];
const brandData = [
  { id: 1, name: "Nike" },
  { id: 2, name: "Adidas" },
  { id: 3, name: "Reebook" },
  { id: 4, name: "Chanell" },
  { id: 5, name: "Gucci" }
];
const SortData = [
  { id: 1, name: "Augstākā cena" },
  { id: 2, name: "Zemākā cena" }
];
const colorData = [
  { id: 1, name: "melns", color: "f54242" },
  { id: 2, name: "sarkans", color: "#f54242" },
  { id: 3, name: "zaļš", color: "#f54242" },
  { id: 4, name: "zils", color: "#f54242" },
  { id: 5, name: "rozā", color: "#f54242" },
  { id: 6, name: "pelēks", color: "#f54242" },
  { id: 7, name: "dzeltens", color: "#f54242" },
  { id: 8, name: "balts", color: "#f54242" },
  { id: 9, name: "brūns", color: "#f54242" }
];
const cartData = {
  totalPrice: 70.0,
  totalQuantity: 5,
  items: [
    {
      productId: 1,
      price: 20.0,
      quantity: 2
    },
    {
      productId: 2,
      price: 10.0,
      quantity: 3
    }
  ]
};

const productData = [
  {
    id: 1,
    name: "Pludmales jaka",
    description:
      "Lieliskā pludmales jaka apvieno stilu, komfortu un funkcionalitāti ar vieglu, ātri žūstošu audumu, kas nodrošina perfektu pludmales apģērba pieredzi.",
    price: 20,
    category: [1],
    size: [1, 2, 3, 4, 5, 6],
    brand: 5,
    color: [3, 4, 7, 8],
    isFreeShipping: true,
    Image: "images/bilde1.jpg"
  },
  {
    id: 2,
    name: "Džinsa bikses",
    description:
      "Stilīgi, daudzpusīgi džinsi ar glaimojošu piegulumu un izturīgu džinsu, lieliski piemēroti jebkuram gadījumam.",
    price: 15.2,
    category: [1],
    size: [1, 2, 3, 4, 5],
    brand: 4,
    color: [4],
    isFreeShipping: true,
    Image: "images/bilde2.jpg"
  },
  {
    id: 3,
    name: "Zābaki",
    description:
      "Moderni un daudzpusīgi sieviešu zābaki, kas apvieno stilu, komfortu un izturību pārliecinošam solim.",
    price: 40.0,
    category: [2],
    size: [6, 2, 3],
    brand: 3,
    color: [1],
    isFreeShipping: false,
    Image: "images/bilde3.jpg"
  },
  {
    id: 4,
    name: "Džemperis",
    description:
      "Mājīgs un stilīgs džemperis, kas izgatavots no mīksta un silta auduma, lieliski piemērots vēsām dienām un mājīgiem vakariem.",
    price: 30.0,
    category: [1],
    size: [6, 5, 3],
    brand: 1,
    color: [6],
    isFreeShipping: true,
    Image: "images/bilde4.jpg"
  },
  {
    id: 5,
    name: "Ūdens kurpes",
    description:
      "Izturīgi un ātri žūstoši ūdens apavi aktīviem piedzīvojumiem, nodrošinot komfortu, aizsardzību un lielisku saķeri mitrā vidē.",
    price: 6.5,
    category: [2, 3],
    size: [1, 2, 3, 5],
    brand: 4,
    color: [1],
    isFreeShipping: true,
    Image: "images/bilde5.jpg"
  },
  {
    id: 6,
    name: "Botes",
    description:
      "Stilīgas un ērtas kedas, kas izstrādātas, lai nodrošinātu atbalstu, amortizāciju un daudzpusību jūsu aktīvajam dzīvesveidam visas dienas garumā.",
    price: 25.75,
    category: [2, 3],
    size: [1, 2, 6, 5],
    brand: 1,
    color: [8],
    isFreeShipping: true,
    Image: "images/bilde6.jpg"
  },
  {
    id: 7,
    name: "Saules brilles",
    description:
      "Uzlabojiet savu stilu un aizsargājiet acis ar modernām saulesbrillēm ar UV aizsardzību un mūžīgu dizainu.",
    price: 6.0,
    category: [4],
    size: [1, 2],
    brand: 4,
    color: [8, 1],
    isFreeShipping: true,
    Image: "images/bilde7.jpg"
  },
  {
    id: 8,
    name: "Šalle",
    description:
      "Ietiniet sevi siltumā un stilā ar mūsu elegantajām šallēm, kas izgatavotas no mīkstiem un mājīgiem materiāliem visiem gadalaikiem.",
    price: 7.0,
    category: [4],
    size: [6],
    brand: 2,
    color: [2],
    isFreeShipping: false,
    Image: "images/bilde8.jpg"
  },
  {
    id: 9,
    name: "Pulkstenis",
    description:
      "Gluds un izsmalcināts pulkstenis, kas apvieno stilu un precizitāti, lieliski piemērots elegances pieskāriena pievienošanai.",
    price: 36.25,
    category: [4],
    size: [6, 2, 4],
    brand: 5,
    color: [6],
    isFreeShipping: true,
    Image: "images/bilde9.jpg"
  },
  {
    id: 10,
    name: "Auskari",
    description:
      "Izceliet savu izskatu ar mūsu satriecošajiem auskariem, kas izstrādāti, lai pievienotu krāšņumu un izsmalcinātību jebkuram apģērbam.",
    price: 1.75,
    category: [4],
    size: [1],
    brand: 4,
    color: [7, 8],
    isFreeShipping: true,
    Image: "images/bilde10.jpg"
  },
  {
    id: 11,
    name: "Peldkostīms",
    description:
      "Izbaudiet savu stilu un pārliecību ar mūsu modernao peldkostīmu, kas radīts ideālam komfortam un elegances sajaukumam.",
    price: 17.0,
    category: [1, 3],
    size: [1, 2, 3, 4, 5, 6],
    brand: 5,
    color: [1],
    isFreeShipping: false,
    Image: "images/bilde11.jpg"
  },
  {
    id: 12,
    name: "T-krekls",
    description:
      "Neformāls un ērts T-krekls, kas izgatavots no mīksta un elpojoša auduma, lieliski piemērots ikdienas valkāšanai.",
    price: 9.0,
    category: [1, 3],
    size: [6, 5, 4],
    brand: 3,
    color: [1, 6],
    isFreeShipping: false,
    Image: "images/bilde12.jpg"
  },
  {
    id: 13,
    name: "Dinozaurs",
    description:
      "Reālistiska dinozaura rotaļlieta, kurā ir dinamiskas krāsas un reālistiskas detaļas nebeidzamiem piedzīvojumiem.",
    price: 54.39,
    category: [5],
    size: [6],
    brand: 4,
    color: [3],
    isFreeShipping: false,
    Image: "images/bilde13.jpg"
  },
  {
    id: 14,
    name: "Rotaļu lelle",
    description:
      "Skaista rotaļu lelle, kas paredzēta nebeidzamai stāstu stāstīšanai un izdomas pilnai rotaļu jautrībai.",
    price: 29.99,
    category: [5],
    size: [2, 3],
    brand: 3,
    color: [2, 3, 7, 8],
    isFreeShipping: true,
    Image: "images/bilde14.jpg"
  },
  {
    id: 15,
    name: "Rotaļu lācis",
    description:
      "Rotaļu lācītis ar mīkstu plīša kažokādu un mierinošu klātbūtni jaukajiem mirkļiem.",
    price: 15.0,
    category: [5],
    size: [6, 1, 2],
    brand: 3,
    color: [9],
    isFreeShipping: false,
    Image: "images/bilde15.jpg"
  },
  {
    id: 16,
    name: "Rotaļu mašīna",
    description:
      "Papildiniet jautrību ar mūsu aizraujošo automašīnu rotaļlietu, kurai ir gluds dizains un reālistiskas detaļas aizraujošiem spēles piedzīvojumiem.",
    price: 26.8,
    category: [5],
    size: [4],
    brand: 2,
    color: [1],
    isFreeShipping: false,
    Image: "images/bilde16.jpg"
  },
  {
    id: 17,
    name: "Legingi",
    description:
      "Izbaudiet izcilu komfortu un stilu ar mūsu daudzpusīgajiem legingiem, kas izgatavoti no elastīga auduma, lai tie būtu glaimojoši visu dienu.",
    price: 11.25,
    category: [3],
    size: [1, 2, 3, 4],
    brand: 1,
    color: [1],
    isFreeShipping: true,
    Image: "images/bilde17.jpg"
  },
  {
    id: 18,
    name: "Sporta krekls",
    description:
      "Sasniedziet visaugstāko veiktspēju ar mūsu augstas kvalitātes sporta kreklu, kas izstrādāts ar mitrumu izvadošu audumu, lai nodrošinātu maksimālu komfortu un elpošanu.",
    price: 14.0,
    category: [3],
    size: [6, 3, 4, 5],
    brand: 5,
    color: [8],
    isFreeShipping: true,
    Image: "images/bilde18.jpg"
  },
  {
    id: 19,
    name: "Svārki",
    description:
      "Izceliet savu sievišķīgo stilu ar  modernajiem svārkiem, kuriem ir glaimojošs siluets un moderns dizains jebkuram gadījumam.",
    price: 17.65,
    category: [1],
    size: [6, 1, 2, 3],
    brand: 4,
    color: [1],
    isFreeShipping: true,
    Image: "images/bilde19.jpg"
  },
  {
    id: 20,
    name: "Čības",
    description:
      "Iegūstiet maksimālu komfortu ar  mājīgajām čībām, kurām ir mīksts, plīša materiāls un polsterēta zole greznai atpūtai.",
    price: 8.5,
    category: [2],
    size: [6, 1, 2, 3, 4, 5],
    brand: 2,
    color: [1, 8],
    isFreeShipping: false,
    Image: "images/bilde20.jpg"
  },
  {
    id: 21,
    name: "Augstpapēžu kurpes",
    description:
      "Pastipriniet savu modes spēli ar elegantajām augstpapēžu kurpēm, kas apvieno stilu, eleganci un pārliecinošu augumu, lai iegūtu satriecošu izskatu.",
    price: 240.0,
    category: [2],
    size: [6, 5, 1],
    brand: 5,
    color: [5],
    isFreeShipping: false,
    Image: "images/bilde21.jpg"
  },
  {
    id: 22,
    name: "Matu sprādzes",
    description:
      "Piešķiriet savai frizūrai eleganci ar modernajām matu sprādzēm, kas ir lieliski piemērotas vienkāršai un stilīgai aksesuāru veidošanai.",
    price: 5.0,
    category: [4],
    size: [1, 2, 3],
    brand: 3,
    color: [7, 8],
    isFreeShipping: true,
    Image: "images/bilde22.jpg"
  },
  {
    id: 23,
    name: "Soma",
    description:
      "Pārnēsājiet savus svarīgākos priekšmetus ar moderno un funkcionālo somu, kas paredzēta gan ērtībām, gan izsmalcinātībai.",
    price: 12.7,
    category: [4],
    size: [6, 4, 5],
    brand: 5,
    color: [1],
    isFreeShipping: true,
    Image: "images/bilde23.jpg"
  },
  {
    id: 24,
    name: "Zeķes",
    description:
      "Saglabājiet savas kājas mājīgas un siltas ar ērtajām zeķēm, kas izgatavotas no mīkstiem un elpojošiem materiāliem, lai nodrošinātu komfortu visas dienas garumā.",
    price: 7.99,
    category: [1, 3, 4],
    size: [6, 4, 2],
    brand: 5,
    color: [2],
    isFreeShipping: false,
    Image: "images/bilde24.jpg"
  },
  {
    id: 25,
    name: "Futbola bumba",
    description:
      " Augstas kvalitātes futbola bumba, kas paredzēta precizitātei, izturībai un optimālai veiktspējai.",
    price: 37.0,
    category: [5, 3],
    size: [6, 3, 4],
    brand: 3,
    color: [4, 8],
    isFreeShipping: true,
    Image: "images/bilde25.jpg"
  }
];

export default {
  categoryData,
  productData,
  sizeData,
  SortData,
  brandData,
  colorData,
  cartData
};
