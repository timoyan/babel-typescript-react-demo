import styled from '@emotion/styled';
import React from 'react';

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
    border: '1px solid blue',
    width: '100%',
    height: '100%',
    fontSize: '14px',
    outline: 'none',
});

export interface ITextBoxProps {
    name: string;
    className?: string;
    value?: string;
}

export const TextBox = React.memo<ITextBoxProps>(({ name, className = '', value }) => {
    return (
        <Wrapper>
            <InputWrapper>
                <Input type="input" name={name} className={className} defaultValue={value} />
            </InputWrapper>
        </Wrapper>
    );
});

TextBox.displayName = 'TextBox';
