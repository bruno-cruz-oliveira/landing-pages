import linksMock from '../../components/NavLinks/mock';
import gridMock from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';
import React from 'react';

export const mockBase = {
    children: (
        <>
            <GridText {...gridMock} background='true' />
            <GridText {...gridMock} />
            <GridText {...gridMock} background='true' />
            <GridText {...gridMock} />
            <GridText {...gridMock} background='true' />
        </>
    ),
    links: linksMock,
    logoData: {
        text: 'Logo',
        link: '#',
    },
    footerHtml: '<p>Teste de footer</p>',
};