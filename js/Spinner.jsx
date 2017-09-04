// @flow

import React from 'react';
import styled, {keyframes} from 'styled-components';

const spin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const Image = styled.img`
  animation: ${spin} r2 inifinite linear;
`;

const Spinner = () => (
  <Image src="/public/img/loading.png" alt="loading indicator" />
);

export default Spinner;
