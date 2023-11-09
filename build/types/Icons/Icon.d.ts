import React from 'react';
import { IconOptionsType } from './interface';
interface IconProps {
    name: IconOptionsType | string;
    size?: 'tiny' | 'standard' | 'large' | number;
    color?: string;
    className?: string;
    testId?: string;
}
export declare const Icon: React.FC<IconProps>;
export {};
