import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingList(){
    const [items, setItems] = useState([{product : "bana", quantity :5 , id: 5}]); 
    const addItem = (item) => {
       setItems(currItems => {
        return [ 
            ...currItems, 
            {...item , id : 5 }
        ]
       })
    }
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(item =>{
                    return <li key={item.id}>{item.product} - {item.quantity}</li>
                })}
            </ul>
            <ShoppingListForm addItem = {addItem} />
        </div>
    )
}