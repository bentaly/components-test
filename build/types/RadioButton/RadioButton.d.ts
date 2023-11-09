import React from 'react';
import { BaseProps } from '../components';
export interface RadioButtonProps extends BaseProps {
    size?: 'large' | 'medium' | 'small';
    value: string | number;
    checked?: boolean;
    labelPosition?: 'top' | 'right' | 'bottom' | 'left';
    disabled?: boolean;
    onChange?: (val: string | number, event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    readOnly?: boolean;
}
/** <a href="https://www.figma.com/file/mNl2RYvJfpr8b6d49I2KOU/GMDS-Guidelines-Components-Radio-Button?node-id=102%3A23883">Designs</a> */
export declare const RadioButton: React.FC<RadioButtonProps>;
