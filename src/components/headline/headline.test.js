import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

const findByTestAttr = (component, attr) => {
  const result = component.find(`[data-test='${attr}']`);
  return result;
};

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Have Props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Some Test Desc'
      };
      wrapper = setUp(props);
    });

    it('Should render without errors', () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    it('should render with h1', () => {
      const component = findByTestAttr(wrapper, 'header');
      expect(component.length).toBe(1);
    });

    it('Should render with p', () => {
      const component = findByTestAttr(wrapper, 'desc');
      expect(component.length).toBe(1);
    });
  });
  describe('Have No Props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('should not render', () => {
        const component = findByTestAttr(wrapper,'HeadlineComponent');
        expect(component.length).toBe(0);
    })
  });
});
