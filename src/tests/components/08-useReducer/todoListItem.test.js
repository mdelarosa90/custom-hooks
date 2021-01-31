import React from 'react';
import {shallow} from 'enzyme'
import { demoTodos } from '../../fixtures/demoTodos';
import TodoListItem from '../../../components/08-useReducer/TodoListItem';

describe('Pruebas <TodoListItem />', () => {

    const todo = {...demoTodos[0]}
    const handleEliminar = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(<TodoListItem todo={demoTodos[0]} index={0} handleDelete={handleEliminar} handleToggle={handleToggle} />);
    
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de llamar la función handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleEliminar).toHaveBeenCalledTimes(0);
    })

    test('debe de llamar la función handleToggle', () => {
        wrapper.find('p').simulate('click');
        //expect(handleToggle).toHaveBeenCalledWith(1);
    })

    test('debe de mostrar correcamente el texto', () => {
        const p = wrapper.find('p');
        expect(p.text()).toBe(`${1}. ${demoTodos[0].desc}`)
    })
    test('debe de tener la clase complete si done = true', () => {
        const todo = demoTodos[0];
        todo.done = true;
        const handleEliminar = jest.fn();
        const handleToggle = jest.fn();
        const wrapper = shallow(<TodoListItem todo={todo} index={0} handleToggle={handleToggle} handleDelete={handleEliminar} />);
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    })
})