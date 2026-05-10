import {useState} from "react";

interface OrderFromProps {
    onSubmit(order: {name: string; price: number;}) : void
}

export function OrderFrom({onSubmit}: OrderFromProps) {
const [name, setName] = useState("Ankit");
const [price, setPrice] = useState(1);
   
        return  <form onSubmit = {handleSubmit}>
            <label>Cars Name </label>
            <input  
            value={name} 
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => 
                setName(e.target.value)} 
                />
            
        </form>;
    
} 