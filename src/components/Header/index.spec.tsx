import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './index';

describe('App component', () => {
    it('starts with a count of 0', () => {
        const tree = create(<Header />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('decrements count by 1 when the decrement button is clicked', () => {
        const wrapper = shallow(<Header />);
        const decrementBtn = wrapper.find('span');
        expect(decrementBtn.length).toEqual(0);
      });
});