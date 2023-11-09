import React from 'react';
import { ButtonProps } from '../Button/Button';
export interface ToggleButtonProps extends Omit<ButtonProps, 'leadingIcon' | 'trailingIcon' | 'onClick' | 'variant'> {
    classes?: {
        root?: string;
        buttonContent?: string;
    };
    iconName?: string;
    value?: string | number;
    onClick?: (val: string | number | undefined, selected: boolean, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export declare const ToggleButton: React.FC<ToggleButtonProps>;
