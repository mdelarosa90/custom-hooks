import React from 'react';
import {shallow} from 'enzyme';
import {MultipleCustomHooks} from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');


describe('Pruebas en <MultipleCustomHooks />', () => {


    test('debe de mostrarse correctamente', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: false,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar la información', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Fernando');

    })
})