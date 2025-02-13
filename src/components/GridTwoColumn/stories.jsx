import { GridTwoColumn } from '.';
import React from 'react';
import mock from './mock';

export default {
    title: 'GridTwoColumn',
    component: GridTwoColumn,
    args: mock,
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};