import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import checkPropTypes from 'check-prop-types';

const findByTestAttr = (component, attr) => {
  const result = component.find(`[data-test='${attr}']`);
  return result;
};

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Testing prop-types', () => {
    it('Should not Throw a warning', () => {
      const expectedProps = {
        header: 'testheader',
        desc: 'testDesc',
        tempArr: [
          {
            fName: 'test fName',
            lName: 'test lName',
            email: 'test@gmail.com',
            age: 25,
            onlineStatus: false
          }
        ]
      };

      const propsErr = checkPropTypes(Headline.propTypes, expectedProps, 'props', Headline.name);
      expect(propsErr).toBeUndefined();
    });
  });

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
      const component = findByTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
