let response:any = "24";

let numberCheck:number = (response as string).length; // this is type of assertion


type Book = {
    name: string;
}

let bookString = '{"name": "The art of letting go"}';

let bookObject = JSON.parse(bookString) as Book; // this is type assertion

console.log(bookObject.name)

const inputElement = document.getElementById('user-input') as HTMLInputElement; // this is type assertion

let value:any 

value = "ankit"
value = 22
value = true
value = 2.4
value.toUpperCase()

let newValue:unknown

newValue = "ankit"
newValue = 22
newValue = true
newValue = 2.4
// newValuealue.toUpperCase() // this will give error because newValue is of type unknown and we cannot call any method on it without checking its type first

if (typeof newValue === "string") {
    newValue.toUpperCase(); //
}

try {
    
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    console.error("error", error);
}


type Role = 'admin' | 'user' | 'guest' | 'ankit';
function redirectURl(role:Role): void {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard...");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user dashboard...");
        return;
    }
    role;
}

function neverReturn():never{
         while (true){}
         
}
