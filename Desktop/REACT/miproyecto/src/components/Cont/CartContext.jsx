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
    function countItemsinCart(){
        let totalItems= 0;
        itemsCart.forEach(item => totalItems += item.qty)
        return totalItems;
    }

    function getTotalPrice(){
        let totalPrice= 0;
        itemsCart.forEach(item => totalPrice += item.qty * item.precio)
        return totalPrice;
    }

    function removeItem(idDelete){
        setItemsCart (itemsCart.filter(item => item.id !== idDelete))

    }
    return(
        <CartContext.Provider value={{addItem, countItemsinCart, getTotalPrice, removeItem, itemsCart, clearCart}}>
         {children}
        </CartContext.Provider>
    )
}



export default CartContext;