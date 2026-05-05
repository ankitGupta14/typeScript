function author(type: string, book: number) {
    console.log(`The author of the book is ${type} and the number of pages is ${book}`);
}

author("Good Vibes",5220)

function Game(player: string, watch: number, isOnline: boolean) {
     console.log(`The player is ${player}, the number of watch is ${watch} and the game is online: ${isOnline}`);
}

function getPrice():string {
    return "that is the price of the book";
}

function getBookInfo(info: string){
    if (!info) return null; {
        return info; // this is a simple function that takes a string as an argument and returns the same string if it is not empty, otherwise it returns null
    }
}

function bookDealer(): void { // this is a function that does not return anything, it just logs a message to the console
    console.log("book dealer is open");
}

function calculatePrice(type?: string){

}

// this is a function that takes an optional parameter of type string and does not return anything. It can be used to calculate the price of a book based on its type, but since the implementation is not provided, it does not do anything at the moment.
function sellBook(order:{
    bookName: string;
    price: number;
    isAvailable: boolean;
    bookType: "fiction" | "non-fiction" | "biography" | "self-help";
}): number{
    return 4
} 
