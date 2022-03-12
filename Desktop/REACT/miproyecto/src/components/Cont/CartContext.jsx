import { createContext, useState} from "react";

const CartContext = createContext();

export function CartContextProvider({children}){

    const [itemsCart, setItemsCart] = useState([]);
    function addItem(item, qty){
        const itemToAdd ={...item, qty}
        setItemsCart([...itemsCart, itemToAdd]);
    }
    function clearCart(){
        setItemsCart([]);
    }
    return(
        <CartContext.Provider value={{addItem, itemsCart, clearCart}}>
         {children}
        </CartContext.Provider>
    )
}



export default CartContext;