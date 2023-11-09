import React from 'react';
import { OptionMenuItemProps } from '../../../../Popovers';
export interface AutoCompleteMenuProps {
    getMenuProps: () => any;
    getItemProps: ({ item, index }: {
        item: OptionMenuItemProps;
        index: number;
    }) => any;
    closeMenu: () => void;
    isOpen: boolean;
    width?: number | string;
    classOverrides?: {
        root?: string;
        inputWrapper?: string;
        optionMenu?: string;
    };
    options: OptionMenuItemProps[];
    noOptionText?: string;
    menuHeight?: number;
    value: string;
    highlightedIndex: number;
    loading?: boolean;
    onInputChange?: (value: string) => void;
    onPillChange?: (values: string[]) => void;
    type: 'input' | 'pill';
    values?: string[];
}
export declare const AutoCompleteMenu: React.ForwardRefExoticComponent<AutoCompleteMenuProps & React.RefAttributes<HTMLInputElement | HTMLDivElement>>;
