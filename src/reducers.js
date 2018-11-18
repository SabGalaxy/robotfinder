import { CHANGE_SEARCH_FIELD } from './constants';
import { REQUEST_ROBOTS_PENDING } from './constants';
import { REQUEST_ROBOTS_SUCCESS } from './constants';
import { REQUEST_ROBOTS_FAILED } from './constants';


const initialStateSearch = {
    searchField: '',
}

export const searchRobots = (state=initialStateSearch, action={}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
        return {...state, searchField: action.payload}
        default: 
            return state;
    }
}

const robots = {  
    isPending: false,
    robots: [],
    isError:''
}

export const requestRobots =(state=robots, action={}) =>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
        return {...state, isPending:true }
        case REQUEST_ROBOTS_SUCCESS:
        return {...state, robots:action.payload,isPending:false }
        case REQUEST_ROBOTS_FAILED:
        return {...state, isError: action.payload, isPending:false}
        default:
        return state;
    }
}