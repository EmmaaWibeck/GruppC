const actiontypes = () => {
    return {
        productCatalog: {
            getProductCatalog: 'GET_PRODUCT_CATALOG',
            getProductCatalogSuccess: 'GET_PRODUCT_CATALOG_SUCCESS',
            getProductCatalogFailure: 'GET_PRODUCT_CATALOG_FAILURE'
        },
        cart: {
            add: 'ADD_TO_CART',
            decrement: 'DECREMENT',
            removeOne: 'REMOVE_ONE',

            clearCart: 'CLEAR_CART'
            
        },
        product: {
            loadProductStart: 'LOAD_PRODUCT_START',
            loadProductSuccess: 'LOAD_PRODUCT_SUCCESS',
            loadProductFailure: 'LOAD_PRODUCT_FAILURE',
            clearProduct: 'CLEAR_PRODUCT'      
        }

    }  
}

export default actiontypes