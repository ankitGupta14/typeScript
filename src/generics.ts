// Generics in TypeScript
// "TypeScript mein Generics ek aisa feature hai jisme hum ek placeholder (<T>) ka use karke reusable code likhte hain. Isme data type pehle se nahi batana padta, balki function use karte waqt tay hota hai."

function wrapInArray<T>(item: T): T[]{
    return [item];
}

wrapInArray("ankit")
wrapInArray(23)
wrapInArray({name: "Shiva", age: 24})  // return ouput

// APi handeling with generics 

interface APiPromise<T> {
      status: number
      data: T
      error: string | null 
}

const apiResponse: APiPromise<{name: string, age: number}> = {
    status: 200,
    data: {
        name: "Ankit",
        age: 24
    },
    error: null
}

