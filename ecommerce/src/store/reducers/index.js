import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productCatalogReducer from "./productCatalogReducer";
import productDetailReducer from "./productDetailReducer";
import ordersReducer from "./ordersReducer";
import authReducer from "./authReducer";




export default combineReducers({
    productCatalog: productCatalogReducer,
    cartReducer,
    product: productDetailReducer,
    auth: authReducer,
    orders: ordersReducer
})