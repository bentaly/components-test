import React from 'react';
import { ButtonProps } from '../Button/Button';
export interface IconButtonProps extends Omit<ButtonProps, 'size' | 'leadingIcon' | 'trailingIcon' | 'loading'> {
    classes?: {
        root?: string;
        buttonContent?: string;
    };
    iconName: string;
    iconColor?: string;
    variant?: 'destructive' | 'filled' | 'secondary' | 'primary' | 'ghost';
    size?: 'standard' | 'small' | 'tiny';
}
export declare const IconButton: React.FC<IconButtonProps>;
