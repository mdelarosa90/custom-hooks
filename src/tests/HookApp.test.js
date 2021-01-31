import React from 'react';
import {shallow} from 'enzyme';
import {HookApp} from '../HookApp';
import toJson from 'enzyme-to-json';

describe('Pruebas <HookApp />', () => {
    test('Debe Mostrar <HookApp /> correctamente', ()=> {
        const wrapper = shallow(<HookApp />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });
})