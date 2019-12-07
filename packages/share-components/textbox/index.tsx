import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled('div')({
    display: 'inline-block',
    position: 'relative',
    width: '100%',
});

const InputWrapper = styled('div')({
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px',
    '& svg': {
        marginLeft: '8px',
        marginRight: '8px',
    },
    '& svg + svg': {
        marginLeft: '0px',
    },
});

const Input = styled('input')({
    border: 'none',
    width: '100%',
    height: '100%',
    fontSize: '14px',
    outline: 'none',
});

export interface ITextBoxProps {
    name: string;
}

export const TextBox = React.memo<ITextBoxProps>(() => {
    return (
        <Wrapper>
            <InputWrapper>
                <Input type="input" />
            </InputWrapper>
        </Wrapper>
    );
});

TextBox.displayName = 'TextBox';
