import React from 'react';
import { InputCommonProps } from '../../Inputs/inputs';
import { OptionMenuItemProps } from '../OptionMenuItem/OptionMenuItem';
export interface SelectOptionProps extends Omit<OptionMenuItemProps, 'label' | 'index'> {
    label?: React.ReactNode;
    value: string | number;
    disabled?: boolean;
    divider?: boolean;
}
export interface SelectProps extends Omit<InputCommonProps, 'onChange' | 'value' | 'onBlur'> {
    classes?: {
        root?: string;
        content?: string;
        disabled?: string;
        contentText?: string;
        activeLabel?: string;
        active?: string;
        contentIcons?: string;
        error?: string;
        errorAdornment?: string;
        selectButton?: string;
        trailingIcon?: string;
        menuRoot?: string;
        menuPaper?: string;
    };
    /** The value of the component */
    value?: string | number;
    /** The value that should be displayed in the select input. Used in composition. */
    valueLabel?: React.ReactNode;
    /** Callback when the value changes */
    onChange?: (item: SelectOptionProps, event: React.MouseEvent) => void;
    /** Blur callback */
    onBlur?: () => void;
    /** Array of options for the dropdown */
    options?: SelectOptionProps[];
    /** Component height */
    height?: number;
    /** Component width */
    width?: number;
    /** Whether or not to display the search box at the top of the dropdown. Defaults to true. */
    searchable?: boolean;
    /** Should options be filtered by text in the searchbox. Defaults to true. */
    shouldSearchStaticOptions?: boolean;
    /** Callback when the input value changes. Can be used for filtering custom dropdown menuItems passed as children. */
    onInputChange?: (value: string) => void;
    /** Use button as select instead of div styled to act like a button */
    useButton?: boolean;
    testIds?: {
        select?: string;
        menuRoot?: string;
    };
    /** Secondary text to be displayed on the right edge of the select */
    secondaryText?: string;
    errorText?: string;
    /** display loading spinner on top of select */
    loading?: boolean;
    /** text to display near disabled options */
    disabledText?: string;
    /** Text displayed above the input */
    label?: string;
    /** Icon that is part of the label. Passed down as JSX to make it more flexible */
    labelIcon?: React.ReactNode;
    /** Text displayed inside of the input to label the value */
    internalLabel?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}
export declare const Select: React.FC<SelectProps>;
