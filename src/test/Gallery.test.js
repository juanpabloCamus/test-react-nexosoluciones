/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Gallery from '../components/Gallery';

test('render "no photos" advice', () => {
  const photos = [];
  const page = 1;
  const component = render(<Gallery photos={photos} page={page} />);

  component.getByText('There are no photos with these search parameters');
});

test('render photo', async () => {
  const photos = [
    {
      id: 1023395,
      sol: 3578,
      camera: {
        id: 20,
        name: 'FHAZ',
        rover_id: 5,
        full_name: 'Front Hazard Avoidance Camera',
      },
      img_src:
        'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03578/opgs/edr/fcam/FRB_715145463EDR_F0970966FHAZ00337M_.JPG',
      earth_date: '2022-08-30',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
  ];
  const page = 1;
  const component = render(<Gallery photos={photos} page={page} />);

  component.getByAltText('rover_image');
});
