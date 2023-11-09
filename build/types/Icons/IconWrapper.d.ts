import React from 'react';
import { BaseProps } from '../components';
interface IconWrapperProps extends BaseProps {
    style?: React.CSSProperties;
    classes?: {
        root?: string;
    };
    viewBox?: string;
    width?: string;
    height?: string;
    size?: string;
}
export declare const IconWrapper: React.FC<IconWrapperProps>;
export {};
