import React from 'react';
import { BaseProps } from '../../components';
import { TabOption } from '../Tabs';
export interface TabGroupProps extends BaseProps {
    classes?: {
        root?: string;
    };
    onSelect?: (val: any) => void;
    disabled?: boolean;
    selected?: string | number;
    options: TabOption[];
    direction?: 'row' | 'column';
    isBordered?: boolean;
}
export declare const TabGroup: React.FC<TabGroupProps>;
