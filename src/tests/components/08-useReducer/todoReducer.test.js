import {todoReducer} from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';



describe('Pruebas en todoReducer', () => {
    test('debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('debe de agregar un todo', () => {
        const action = {
            type: 'add',
            payload: {
                id: 3,
                desc: 'Aprender Mongo',
                done: false
            }
        }
        const state = todoReducer(demoTodos, action);
        expect(state).toEqual([...demoTodos, action.payload]);
    })

    test('debe borrar un todo', () => {
        const action = {
            type: 'delete',
            payload: 2
        }

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual(demoTodos.filter(el => el.id !== action.payload));
    })

    test('debe de hacer el TOGGLE del TODO', () => {
        const action = {
            type: 'toggle',
            payload: 1
        }
        const state = todoReducer(demoTodos, action);
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);
    })
})