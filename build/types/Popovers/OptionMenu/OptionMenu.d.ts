import React from 'react';
import { BaseProps } from '../../components';
import { OptionMenuItemProps } from '../OptionMenuItem/OptionMenuItem';
export interface OptionMenuItemSectionProps {
    header?: string;
    divider?: boolean;
    values?: OptionMenuItemProps[];
    collapsed?: boolean;
}
export interface OptionMenuProps extends BaseProps {
    classes?: {
        root?: string;
        paper?: string;
    };
    searchable?: boolean;
    shouldSearchStaticOptions?: boolean;
    options?: OptionMenuItemSectionProps[] | OptionMenuItemProps[];
    height?: number;
    width?: number;
    displayCheckbox?: boolean;
    collapsible?: boolean;
    onCollapse?: (item: any) => void;
    autoFocusSearch?: boolean;
    onInputChange?: (value: string) => void;
    disabledText?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    onSelectAll?: () => void;
    autoScrollToSelected?: boolean;
    highlightSelectedOption?: boolean;
}
export declare const OptionMenu: React.FC<OptionMenuProps>;
