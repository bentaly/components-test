import React from 'react';
import { BaseProps } from '../components';
export interface CheckboxProps extends BaseProps {
    indeterminate?: boolean;
    /** Whether the checkbox is checked */
    checked: boolean;
    /** Whether the checkbox should be disabled */
    disabled?: boolean;
    /** Function that fires when the component is clicked. It returns the value and if the box is checked */
    onClick?: (val: string | number | undefined, bool: boolean, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /** Content to be rendered to the right of the checkbox*/
    label?: React.ReactNode;
    /** Passed back with onClick to determine which checkbox was clicked */
    value?: string | number;
    /** Type that will determine the color scheme of the checkbox */
    type?: 'error' | 'danger' | 'success' | 'warning' | 'default';
    /** Type that will determine the layout scheme of the checkbox */
    variant?: 'default' | 'filter' | 'banner';
    readOnly?: boolean;
}
/** <a href="https://www.figma.com/file/4NDW6wYMNkxtWygmMteJ8V/GMDS-Guidelines-Components-Checkbox?type=design&node-id=0-1&mode=design">Designs</a> */
export declare const Checkbox: React.FC<CheckboxProps>;
