import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';

export const SectionContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};