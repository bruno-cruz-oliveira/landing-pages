import { LogoLink } from '.';
import React from 'react';

export default {
    title: 'LogoLink',
    component: LogoLink,
    args: {
      text: 'LogoLink',
      srcImg: 'assets/images/logo.svg',
      link: 'http://localhost',
    },
};
  
export const ImageOnly = (args) => {
    return (
        <div>
            <LogoLink {...args} />
        </div>
    );
};

export const TextOnly = (args) => {
    return (
        <div>
            <LogoLink {...args} />
        </div>
    );
};

TextOnly.args = {
    srcImg: '',
};