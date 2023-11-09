import React from 'react';
import { ButtonProps } from '../Button/Button';
export interface TextLinkProps extends Omit<ButtonProps, 'variant' | 'size' | 'selected' | 'leadingIcon' | 'trailingIcon'> {
    executing?: boolean;
    variant?: 'standard' | 'breadcrumb';
}
export declare const TextLink: React.FC<TextLinkProps>;
