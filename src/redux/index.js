import { createStore } from "redux"

const initialState = {
    login:  "developer21",
    password: "123456"
}

function reducer(state = initialState, action){
    return {
        ...state
    }
}

const store = createStore(reducer, initialState);

export default store;