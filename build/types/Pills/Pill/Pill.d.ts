import React from 'react';
import { BaseProps } from '../../components';
export interface PillProps extends BaseProps {
    classes?: {
        root?: string;
        content?: string;
        error?: string;
        errorIcon?: string;
        clickable?: string;
    };
    iconName?: string;
    disabled?: boolean;
    hasError?: boolean;
    leadingIcon?: string;
    trailingIcon?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onLeadingIconClick?: React.MouseEventHandler<HTMLDivElement>;
    onTrailingIconClick?: React.MouseEventHandler<HTMLDivElement>;
    id?: string;
    type?: string;
    readOnly?: boolean;
}
export declare const Pill: React.FC<PillProps & React.HTMLAttributes<HTMLDivElement>>;
