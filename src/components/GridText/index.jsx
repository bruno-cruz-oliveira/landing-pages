import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({ title, description, grid, background = 'false', sectionId = '' }) => {
    return (
        <SectionBackground background={background} sectionId={sectionId}>
            <Styled.Container>
                <Heading size='huge' uppercase='true' color_dark={background === 'false'? 'true' : 'false'} as="h2">{title}</Heading>
                <TextComponent>{description}</TextComponent>
                <Styled.Grid>
                    {grid.map((el) => (
                        <Styled.GridElement key={el.title}>
                            <Heading size="medium" color_dark={background === 'false'? 'true' : 'false'} as="h3">{el.title}</Heading>
                            <TextComponent>{el.description}</TextComponent>
                        </Styled.GridElement>
                    ))}
                </Styled.Grid>
            </Styled.Container>
        </SectionBackground>
    );
};

GridText.propTypes = {
    background: P.oneOf(['true', 'false']),
    title: P.string.isRequired,
    description: P.string.isRequired,
    grid: P.arrayOf(
        P.shape({
            title: P.string.isRequired,
            description: P.string.isRequired,
        }),
    ).isRequired,
    sectionId: P.string,
};