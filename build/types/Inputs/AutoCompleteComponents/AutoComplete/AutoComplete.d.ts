import { InputProps } from '../../index';
import { OptionMenuItemProps } from '../../../Popovers/OptionMenuItem/OptionMenuItem';
import React from 'react';
import { BaseProps } from '../../../components';
import { AutoCompleteMenuProps } from '../SharedAutoComplete/AutoCompleteMenu/AutoCompleteMenu';
export interface AutoCompleteProps extends Omit<BaseProps, 'className'> {
    options: OptionMenuItemProps[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    loading?: boolean;
    noOptionText?: string;
    InputProps?: Partial<InputProps>;
    helperText?: string;
    MenuProps?: Partial<AutoCompleteMenuProps>;
    width?: number | string;
    classOverrides?: {
        root?: string;
        inputWrapper?: string;
        optionMenu?: string;
    };
    menuHeight?: number;
    error?: boolean;
    onBlur?: () => void;
    disabled?: boolean;
    endAdornment?: React.ReactNode;
    startAdornment?: React.ReactNode;
    startAdornmentTooltipText?: string;
    onSelectedValueChange?: (isSelected: boolean) => void;
}
export declare const AutoComplete: React.ForwardRefExoticComponent<AutoCompleteProps & React.RefAttributes<HTMLInputElement>>;
