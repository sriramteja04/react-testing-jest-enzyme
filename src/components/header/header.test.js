import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props}/>);
  return component;
};

const findByTestAttr = (component,attr) => {
    const result = component.find(attr);
    return result;
}

describe('Header Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component,'.headerComponent')
    expect(wrapper.length).toBe(1);
  });
});
