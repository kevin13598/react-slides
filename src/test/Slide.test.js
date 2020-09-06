import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { Slide } from '../components/Slide';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en <Slide/>', () => {

    
    const slide = {
        title: "Today's workout plan",
        text: "We're gonna do 3 fundamental exercises."
    }
    
    const wrapper = shallow(<Slide slide={slide}/>);

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
});