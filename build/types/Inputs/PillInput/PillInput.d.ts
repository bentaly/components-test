import React, { MutableRefObject } from 'react';
import { BaseProps } from '../../components';
import { StartEndAdornmentProps } from '../Adornment/Adornment';
import { GetPropsCommonOptions, UseComboboxGetInputPropsOptions } from 'downshift';
import { OptionMenuItemProps } from '../../Popovers';
export interface OptionsStatus {
    value?: string;
    icon?: string;
    type?: string;
}
export interface PillInputProps extends BaseProps {
    classes?: {
        root?: string;
        adornments?: {
            endAdornment?: string;
            startAdornment?: string;
        };
    };
    values: string[];
    optionsStatus?: OptionsStatus[];
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    ValueRenderer?: React.FC<{
        value: string;
    }>;
    onChange?: (newVal: string[]) => void;
    onBlur?: (value: string) => boolean | void;
    width?: number | string;
    maxHeight?: number | string;
    adornments?: StartEndAdornmentProps;
    autoCompleteProps?: {
        selectedItem: OptionMenuItemProps;
        getInputProps: (options?: UseComboboxGetInputPropsOptions, otherOptions?: GetPropsCommonOptions) => any;
        closeMenu: () => void;
        isOpen?: boolean;
        openMenu: () => void;
    };
    wrapperRef?: MutableRefObject<HTMLDivElement | null>;
    loading?: boolean;
    helperText?: string;
    validate?: (val: string, setErrorMessages?: boolean) => boolean;
    submitKeyboardKeys?: string[];
    pasteDelimiter?: string;
    disablePasteSubmit?: boolean;
    disallowDuplicates?: boolean;
    clearErrors?: () => void;
    hideClearAll?: boolean;
    label?: React.ReactNode;
    readOnly?: boolean;
}
export declare const PillInput: React.ForwardRefExoticComponent<PillInputProps & React.RefAttributes<HTMLInputElement>>;
