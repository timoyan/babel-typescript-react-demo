import { TextBox } from '@demo/share-components';
import { css } from '@emotion/core';
import { CSSObject } from 'create-emotion';
import { css as cssfn } from 'emotion';
import React from 'react';

const color = 'white';

const style: CSSObject = {
    backgroundColor: 'hotpink',
};

const newStyle = css({
    padding: '32px',
    // backgroundColor: 'red',
    fontsize: '24px',
    borderRadius: '4px',
    ['&:hover']: {
        color: color,
    },
}).styles;

export const App = (): JSX.Element => (
    <div className={cssfn(style, newStyle)}>
        Hover to change color <br />
        <TextBox name="1" className={cssfn({ border: '3px solid green' })} />
    </div>
);
