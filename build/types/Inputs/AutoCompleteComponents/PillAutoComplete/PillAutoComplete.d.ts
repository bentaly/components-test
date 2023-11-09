import { PillInputProps, OptionsStatus } from '../../index';
import { OptionMenuItemProps } from '../../../Popovers/OptionMenuItem/OptionMenuItem';
import React from 'react';
import { BaseProps } from '../../../components';
import { AutoCompleteMenuProps } from '../SharedAutoComplete/AutoCompleteMenu/AutoCompleteMenu';
export interface PillAutoCompleteProps extends Omit<BaseProps, 'className'> {
    options: OptionMenuItemProps[];
    values: string[];
    optionsStatus?: OptionsStatus[];
    onChange: (value: string[]) => void;
    placeholder?: string;
    label?: string;
    loading?: boolean;
    noOptionText?: string;
    InputProps?: Partial<PillInputProps>;
    MenuProps?: Partial<AutoCompleteMenuProps>;
    width?: number | string;
    classOverrides?: {
        root?: string;
        inputWrapper?: string;
        optionMenu?: string;
    };
    menuHeight?: number;
    onBlur?: (val: string) => boolean | void;
    hideClearAll?: boolean;
}
export declare const PillAutoComplete: React.ForwardRefExoticComponent<PillAutoCompleteProps & React.RefAttributes<HTMLInputElement>>;
