import React from 'react';
import { BaseProps } from '../components';
export interface ExpandableTextProps extends BaseProps {
    children?: React.ReactNode;
    text?: React.ReactNode;
    className?: string;
    maxLines?: number;
    viewMoreText?: string;
    viewLessText?: string;
}
export declare const ExpandableText: React.FC<ExpandableTextProps>;
