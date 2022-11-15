/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import PhotoCard from '../components/PhotoCard';

test('render content', () => {
  const props = {
    src: 'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03578/opgs/edr/fcam/FRB_715145463EDR_F0970966FHAZ00337M_.JPG',
    cameraName: 'Front Hazard Avoidance Camera',
    earthDate: '2022-08-30',
    sunDate: '3578',
    rover: 'Curiosity',
  };

  const component = render(
    <PhotoCard
      src={props.src}
      cameraName={props.cameraName}
      earthDate={props.earthDate}
      sunDate={props.sunDate}
      rover={props.rover}
    />,
  );

  component.getByText('Front Hazard Avoidance Camera');
  component.getByAltText('rover_image');
});
