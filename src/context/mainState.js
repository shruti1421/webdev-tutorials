import React, { useReducer } from 'react';
import MainContext from './mainContext';
import MainReducer from './mainReducer';
import{
    SET_LOADING
} from './types';

const MainState = props => {
    const initialState = {
        loading: false
    };

     const [state, dispatch] = useReducer(reducer, initialState);

     //Set Loading 
     const setLoading = () => dispatch({ type: SET_LOADING });


     return (
         
     );

}
