/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Pagination from '../components/Pagination';

test('render current page', () => {
  const component = render(<Pagination page={1} />);

  component.getByText('1');
});
