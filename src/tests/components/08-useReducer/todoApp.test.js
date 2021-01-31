import React from 'react';
import {mount, shallow} from 'enzyme';
import {TodoApp }from '../../../components/08-useReducer/TodoApp';
import {demoTodos} from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('Pruebas en <TodoApp />', () => {
    const wrapper = shallow(<TodoApp />)

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de agregar un Todo', () => {
        const spy = jest.spyOn(Storage.prototype, 'setItem');
        const wrapper = mount(<TodoApp />);
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')({type: 'add', payload: demoTodos[0]});
            wrapper.find('TodoAdd').prop('handleAddTodo')({type: 'add', payload: demoTodos[1]});
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp: (2)'); // Debe ser 2
        expect(spy).toHaveBeenCalledTimes(2); // Debe ser 2
    });

    test('Debe de eliminar un todo', () => {
        //wrapper.find('Todo')
        wrapper.find('TodoAdd').prop('handleAddTodo')({type: 'add', payload: demoTodos[0]});
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp: (1)'); // Should be 0
    })
})