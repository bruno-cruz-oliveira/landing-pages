import { TextComponent } from '.';
import React from 'react';

export default {
    title: 'TextComponent',
    component: TextComponent,
    args: {
        children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloribus, libero voluptates commodi dignissimos velit quidem deserunt. Assumenda doloremque id harum temporibus? Quaerat adipisci in possimus cumque sequi voluptate odio!`,
    },
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <TextComponent {...args} />
        </div>
    );
};