const initialState = {
    list: [
        {
        name: 'First item',
        price: 10.50
        }
    ],
    total: 10.50   
}

const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

export function addItem(newItem){
    return {
        type: ADD_ITEM,
        payload: newItem
    }
}

export function deleteItem(item){
    return {
        type: DELETE_ITEM,
        payload: item
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case ADD_ITEM:
            return Object.assign({}, state, {list: [...state.list, {name: action.payload.name, price: action.payload.price}]}, {total: state.total + action.payload.price});

        case DELETE_ITEM:
            let newList = state.list.filter(item => item.name !== action.payload.name && item.price !== action.payload.price)
            return Object.assign({}, state, {list: newList}, {total: state.total - action.payload.price})

        default:
            return state;
    }
}