import React from 'react';
import { OptionMenuItemSectionProps } from '../OptionMenu/OptionMenu';
import { PopoverWrapperProps } from '../PopoverWrapper/PopoverWrapper';
import { OptionMenuItemProps } from '../OptionMenuItem/OptionMenuItem';
export interface MenuProps extends PopoverWrapperProps {
    classes?: {
        root?: string;
        paper?: string;
    };
    searchable?: boolean;
    shouldSearchStaticOptions?: boolean;
    height?: number;
    width?: number;
    options?: OptionMenuItemSectionProps[] | OptionMenuItemProps[];
    displayCheckbox?: boolean;
    collapsible?: boolean;
    onCollapse?: (item: any) => any | void;
    autoFocusSearch?: boolean;
    onInputChange?: (value: string) => void;
    isSelectMenu?: boolean;
    disabledText?: string;
    allOptionsDisabled?: boolean;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    onSelectAll?: () => void;
    autoScrollToSelected?: boolean;
    highlightSelectedOption?: boolean;
}
export declare const Menu: React.FC<MenuProps>;
