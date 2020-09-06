import React from 'react';

export const Slide = ({
    slide, 
    increment, 
    decrement, 
    reset, 
    disablePrev, 
    disableNext
}) => {

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={reset}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={decrement} disabled={disablePrev}>Prev</button>
                <button data-testid="button-next" className="small" onClick={increment} disabled={disableNext}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slide.title}</h1>
                <p data-testid="text">{slide.text}</p>    
            </div>
        </div>
    )
}
