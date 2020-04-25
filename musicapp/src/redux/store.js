import {createStore}  from 'redux'
import reducer from './reducer'
const initialState = {
    menuName: ''
}
const store = () => createStore(reducer,initialState);
export default store;