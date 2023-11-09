import { BaseProps } from '../components';
import React from 'react';
export interface TabOption extends BaseProps {
    classes?: {
        root?: string;
        icon?: string;
        text?: string;
    };
    text?: string;
    disabled?: boolean;
    iconName?: string;
    value: string | number;
    selected?: boolean;
    onSelect?: (vals: any, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
