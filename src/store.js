import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { sampleDetailsReducer, sampleListReducer } from './reducers/sampleReducer';
import { productDetailsReducer, productListReducer,  allproductListReducer } from './reducers/productReducers';

const reducer = combineReducers({
    sampleDetails: sampleDetailsReducer,
    sampleList: sampleListReducer,
    productList: productListReducer,
    allproductList: allproductListReducer,
    productDetails: productDetailsReducer,
});
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(
    reducer, 
    composeEnhancer(applyMiddleware(thunk))
 );

export default store;
