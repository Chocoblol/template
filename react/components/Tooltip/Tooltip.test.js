import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Tooltip from './Tooltip';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});

describe('Tooltip tests', () => {
  const component = mount(<Tooltip className="btn__test" className="tooltip__test" content="подсказка"><p>Привет, это подсказка!!!</p></Tooltip>);

  it('содержит ноду', () => {
    expect(component.find('p').text()).toEqual('Привет, это подсказка!!!');
  });

  it('появляется и исчезает', () => {
    component.find('.tooltip__target').simulate('mouseenter');
    expect(component.find('span').at(1).text()).toEqual('подсказка');
    component.find('.tooltip__target').simulate('mouseleave');
    expect(!component.contains('.tooltip')).toEqual(true);

  });

});