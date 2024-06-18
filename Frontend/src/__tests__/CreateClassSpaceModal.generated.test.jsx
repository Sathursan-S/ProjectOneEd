import renderer from 'react-test-renderer';
import React, { useState } from 'react';

import CreateClassSpaceModal from '../Components/CreateClassSpaceModel/CreateClassSpaceModal';

jest.mock('./CreateClassSpaceModal.css');

const renderTree = tree => renderer.create(tree);
describe('<CreateClassSpaceModal>', () => {
  it('should render component', () => {
    expect(renderTree(<CreateClassSpaceModal 
    />).toJSON()).toMatchSnapshot();
  });
  
});