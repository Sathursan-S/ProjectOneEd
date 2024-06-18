import renderer from 'react-test-renderer';
import React from 'react'

import ClassSchedule from '../Components/ClassSchedule/ClassSchedule';

jest.mock('./ClassSchedule.css');

const renderTree = tree => renderer.create(tree);
describe('<ClassSchedule>', () => {
  it('should render component', () => {
    expect(renderTree(<ClassSchedule 
    />).toJSON()).toMatchSnapshot();
  });
  
});