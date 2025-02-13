import P from 'prop-types'
import * as Styled from './styles'
import React from 'react';

export const Heading = ({ children, color_dark = 'true', as = 'h1', size = 'huge', uppercase = 'false'}) => {
    return <Styled.Title color_dark={color_dark} as={as} size={size} uppercase={uppercase}>{children}</Styled.Title>
}

Heading.propTypes = {
    children: P.node.isRequired,
    color_dark: P.oneOf(['true', 'false']),
    as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    size: P.oneOf(['small', 'medium', 'big', 'huge']),
    uppercase: P.oneOf(['true', 'false']),
}