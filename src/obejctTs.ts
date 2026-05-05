const book = {
      name: "The Great Gatsby",
      page: 180,
      isGood: true
}


let bookNew: {
    name: string;
    price: number;
    totalPage: number;
    isGood: boolean;
}

bookNew = {
    name: "Attutide is everything",
    price: 259,
    totalPage: 200,
    isGood: true
}

type Book ={
    name: string;
    price: number;
    qualityBook: string[];

}
const book3: Book = {
    name: "The art of letting go",
    price: 299,
    qualityBook: ["good", "best", "excellent"]
}

