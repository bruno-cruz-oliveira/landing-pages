import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumn } from '.';
import React from 'react';
import mock from './mock';

describe('<GridTwoColum />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});