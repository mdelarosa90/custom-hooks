import React from 'react';
import {shallow} from 'enzyme';
import {RealExampleRef} from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExample />', () => {
    const wrapper = shallow(<RealExampleRef />);
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    })

    test('debe mostrar el componente <MultipleCustomHook', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
})