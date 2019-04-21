import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListGroup from './ListGroup';

Enzyme.configure({
  adapter: new Adapter()
});

describe('ListGroup Test', () => {

  it('correctly render', () => {
    const component = shallow(<ListGroup><li>{'item'}</li></ListGroup>);
    
    expect(component.hasClass('list-group'));
    expect(component.find('li')).toHaveLength(1);
    expect(component.find('li').text()).toEqual('item');
  });
});