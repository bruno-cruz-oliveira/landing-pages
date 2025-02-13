import { Footer } from '.';
import React from 'react';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p>By Bycoding</p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};