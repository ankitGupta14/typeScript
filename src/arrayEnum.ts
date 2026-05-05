const cars: string[] = ['BMW', 'Audi', 'Mercedes'];
const carNumbers: number[] = [1, 2, 3, 4, 5];

const rating: Array<number> = [4.5, 3.8, 5.0];

type Car = {
    name: string;
    year: number;
}
const carDetails: Car[] = [
    { name: 'BMW', year: 2020 },
    { name: 'Audi', year: 2019 },
    { name: 'Mercedes', year: 2021 }
];

// multiple dimensional array
const multiDimensionalArray: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// tuple
let tuple: [string, number] = ['Hello', 42];

tuple = ['World', 24]; // valid
// tuple = [42, 'Hello']; // invalid, will give error


const locations: readonly [string, number] = ['New York', 23];

//enum
enum Color {
    Red,
    Green,
    Blue
}

enum Status {
    Active = 201, 
    Inactive,  // Inactive will be 202 auctomatically incremented from the previous value
    Pending  // Pending will be 203 
}

let t: [string, number] = ['Hello', 42];
t.push('Worldd');