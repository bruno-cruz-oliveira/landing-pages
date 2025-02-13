import { GridText } from '.';
import React from 'react';

import mock from './mock'

export default {
    title: 'GridText',
    component: GridText,
    args: mock,
};

export const Template = (args) => {
    return (
        <div>
            <GridText {...args} />
        </div>
    );
};