import { BaseProps } from '../components';
import React from 'react';
export interface InputCommonProps extends React.ComponentPropsWithRef<'input'>, BaseProps {
    active?: boolean;
    autofocus?: boolean;
    disabled?: boolean;
    /** Adornment that will render at the right of the input. Can be a string, which will be interpreted as an Icon name, or a React node. */
    endAdornment?: React.ReactNode;
    endAdornmentTooltipText?: string;
    error?: boolean;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onEndAdornmentClick?: React.MouseEventHandler;
    onStartAdornmentClick?: React.MouseEventHandler;
    placeholder?: string;
    /** Adornment that will render at the left of the input. Can be a string, which will be interpreted as an Icon name, or a React node. */
    startAdornment?: React.ReactNode;
    startAdornmentTooltipText?: string;
    value?: string;
    type?: React.HTMLInputTypeAttribute;
}
