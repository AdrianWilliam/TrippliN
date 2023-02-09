import { configureStore } from "@reduxjs/toolkit";
import menu from './reducer/ClickMenu'
import login from './reducer/LoginSystem'
import categorie from './reducer/Categorie'
import Cart from "./reducer/Cart";
export default configureStore( {
    reducer: {
        click: menu,
        login: login,
        categories: categorie,
        cart: Cart
    }
})