
// Object Oriented Programming in TypeScript
class bike {
     cc: number;
     brand: string;

     constructor(cc: number, brand: string){
        this.cc = cc;
        this.brand = brand; 
     }
}
// creating an instance of the bike class
const bike1 = new bike(555, "Yamaha");
bike1.brand = "Yamaha";

// access modifiers
class motorcycle {
    public brand: string = "Hero" // can be accessed from anywhere
    private cc: number = 550 // can only be accessed within the class
    protected model: string = "XYZ" // can be accessed within the class and its subclasses
    
     reveal(){
        return this.cc; // can access private property within the class
     }
}