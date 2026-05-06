
// Interface and Generics in TypeScript
// what is inferface in TypeScript?
//"TypeScript mein Interface ek blueprint (naksha) hota hai jo kisi object ka structure tay karta hai. Ye strictly define karta hai ki ek object ke andar kaun-kaun si properties aayengi aur unka data type (jaise string, number) kya hoga.


interface house {
    name: string,
    price: number,
    location: string
}
const myHouse: house = {
    name: "My Dream House",
    price: 500000,
    location: "New York"
}

interface Car {
    readonly brand: string
    model: number
}

const myCar : Car = {
    brand: "BMW",
     model: 2024
}
myCar.model = 2025; // valid
// myCar.brand = "Audi"; // invalid, will give error because brand is readonly

interface carEquipment {
    (price: number): number
}
const calculatePrice: carEquipment = (price) => price * 1.2; // adding 20% tax

interface User {
    name(): void;
    middleName(): void;
    lastName(): string;
}
//
const user1: User = {
    name() {
        console.log("Ankit"); 
    },
    middleName() {
        console.log("Kumar"); 
    },
    lastName() {
        return "Sharma"; 
    }
}

interface Book {
    author: string;
}
interface Book {
    pageNo: number;
}
// In TypeScript, you can declare multiple interfaces with the same name, and they will be merged together. This is called interface merging. When you declare multiple interfaces with the same name, TypeScript will combine their properties into a single interface. 
const b : Book ={
    author: "F. Scott Fitzgerald",
    pageNo: 180
}


