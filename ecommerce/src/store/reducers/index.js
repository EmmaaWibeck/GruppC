import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productCatalogReducer from "./productCatalogReducer";
import productDetailReducer from "./productDetailReducer";






export default combineReducers({
    productCatalog: productCatalogReducer,
    cartReducer,
    product: productDetailReducer
})