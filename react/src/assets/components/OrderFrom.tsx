import {useState} from "react";

interface OrderFromProps {
    onSubmit(order: {name: string; price: number;}) : void
}

export function OrderFrom({onSubmit}: OrderFromProps) {
const [name, setName] = useState("Ankit");
const [price, setPrice] = useState(1);

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({name, price});
}   
   
        return  <form onSubmit = {handleSubmit}>
            <label>Cars Name </label>
            <input  
            value={name} 
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => 
                setName(e.target.value)} 
                />
            <label>Price</label>
            <input 
            type="number"
            value={price}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => 
                setPrice(Number(e.target.value))} 
                />
            <button type="submit">Submit</button>
        </form>;
    
} 