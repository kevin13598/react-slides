import {useState} from 'react';
import { slides } from '../../data/slides';

export const useCounter = ( initialState = 0) => {

    const [counter, setCounter] = useState(initialState);

    const increment = () =>{
        setCounter(counter + 1);
    }

    const decrement = () =>{
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
    
}