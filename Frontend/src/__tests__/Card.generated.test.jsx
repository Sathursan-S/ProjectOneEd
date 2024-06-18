import renderer from 'react-test-renderer';
import React from 'react';
import { FaStar } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import classImg from '../../Images/Card.png';
import Card from '../Components/Card/Card';

jest.mock('react-icons/fa');
jest.mock('./Card.css');
jest.mock('react-router-dom');
jest.mock('../../Images/Card.png');

const renderTree = tree => renderer.create(tree);
describe('<Card>', () => {
  it('should render component', () => {
    expect(renderTree(<Card 
    />).toJSON()).toMatchSnapshot();
  });
  
});