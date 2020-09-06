import React from 'react';
import { Slide } from './Slide';
import { slides } from '../data/slides';
import { useCounter } from './hooks/useCounter';

function Slides() {

    const {counter, increment, decrement, reset} = useCounter(0);

    return (
       <Slide
            slide = {slides[counter]}
            increment={increment}
            decrement = {decrement}
            reset = {reset}
            disablePrev = {(slides[counter] === slides[0])}
            disableNext = {(slides[counter] === slides[slides.length - 1])}
        />
    );

}

export default Slides;
