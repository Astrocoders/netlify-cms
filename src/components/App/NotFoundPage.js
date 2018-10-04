import React from 'react';
import styled from 'react-emotion';
import { lengths } from '../../ui';

const NotFoundContainer = styled.div`
  margin: ${lengths.pageMargin};
`;

const NotFoundPage = () => (
  <NotFoundContainer>
    <h2>Not Found</h2>
  </NotFoundContainer>
);

export default NotFoundPage;
