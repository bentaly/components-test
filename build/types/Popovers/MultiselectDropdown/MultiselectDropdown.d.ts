import React from 'react';
import { InputCommonProps } from '../../Inputs/inputs';
import { StartEndAdornmentProps } from '../../Inputs/Adornment/Adornment';
import { OptionMenuItemProps } from '../OptionMenuItem/OptionMenuItem';
export interface MultiselectDropdownOptionProps extends Omit<OptionMenuItemProps, 'label'> {
    label?: string;
    value: string | number;
    childOptions?: MultiselectDropdownOptionProps[];
    selected: boolean;
    collapsed?: boolean;
}
export interface MultiselectDropdownProps extends Omit<InputCommonProps, 'onChange'> {
    /** Classes to override styles of component */
    classes?: {
        root?: string;
        disabled?: string;
        error?: string;
        contentText?: string;
        content?: string;
        contentIcons?: string;
        errorAdornment?: string;
        adornments?: {
            startAdornment?: string;
            endAdornment?: string;
        };
    };
    /** A set of options to display in the dropdown menu */
    options: MultiselectDropdownOptionProps[];
    /** If the input should be disabled */
    disabled?: boolean;
    /** If the input should show an error state */
    error?: boolean;
    /** If the options should be searchable */
    searchable?: boolean;
    /** If the parent of child options should be collapsible. NOTE: If set to true the options must set their `collapsed` field to false. */
    collapsible?: boolean;
    /** The height of the option menu */
    height?: number;
    /** The height of the option menu and the input */
    width?: number;
    errorText?: string;
    /** Text displayed above the input */
    label?: string;
    /** Icon that is part of the label. Passed down as JSX to make it more flexible */
    labelIcon?: React.ReactNode;
    /** Text displayed inside of the input to label the value */
    internalLabel?: string;
    /** Callback when an item is collapsed */
    onCollapse?: ({ index, item, isCollapsed, }: {
        index: number;
        item: MultiselectDropdownOptionProps;
        isCollapsed: boolean;
    }) => void;
    /** Callback when an item is selected */
    onChange: ({ isSelected, parentIndex, childIndex, item, }: {
        isSelected: boolean;
        parentIndex: number;
        childIndex: number;
        item: MultiselectDropdownOptionProps;
    }) => void;
    /** Callback when all selected values are cleared. If undefined, clear button will not display. */
    onClear?: () => void;
    onSelectAll?: () => void;
    adornments?: StartEndAdornmentProps;
    /** Show count of selected items in footer */
    shouldShowCountInFooter?: boolean;
    /** Should focus on open */
    autoFocusSearch?: boolean;
}
export declare const MultiselectDropdown: React.FC<MultiselectDropdownProps>;
