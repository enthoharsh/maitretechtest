import React, {useContext,createContext, useReducer} from 'react';
import { reducer } from './reducer';
import data from '../api/procductApi';


const AppContext = createContext();
let initialState = {
    data:data,
    noi:[],
    isLogin:false,
};


const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const increment = (data) => {
        dispatch({type:"increment",payload: data})
    }
    const decrement = (data) => {
        dispatch({type:"decrement",payload: data})
    }
    const login = () => {
        dispatch({type:"login"})
    }
  return (
        <AppContext.Provider value={{state,increment,decrement,login}}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext}