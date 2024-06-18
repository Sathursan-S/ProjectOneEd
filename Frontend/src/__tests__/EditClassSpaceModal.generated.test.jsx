import renderer from 'react-test-renderer';
import React, { useState } from 'react';

import EditClassSpaceModal from '../Components/EditClassSpaceModal/EditClassSpaceModal';

jest.mock('./EditClassSpaceModal.css');

const renderTree = tree => renderer.create(tree);
describe('<EditClassSpaceModal>', () => {
  it('should render component', () => {
    expect(renderTree(<EditClassSpaceModal 
    />).toJSON()).toMatchSnapshot();
  });
  
});