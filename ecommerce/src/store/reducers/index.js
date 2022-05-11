import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productCatalogReducer from "./productCatalogReducer";






export default combineReducers({
    productCatalog: productCatalogReducer,
    cartReducer
})