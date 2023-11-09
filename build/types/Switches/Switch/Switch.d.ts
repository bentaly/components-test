import React from 'react';
import { BaseProps } from '../../components';
export interface SwitchProps extends BaseProps {
    classes?: {
        root?: string;
    };
    checked?: boolean;
    disabled?: boolean;
    onChange?: (val: string | number | undefined, bool: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    value?: string | number;
    readOnly?: boolean;
}
/** <a href="https://www.figma.com/file/Wh5rW8ZTWehaKju99BUKl2/GMDS-Guidelines-Components-Toggle-Switch?type=design&node-id=102-23883">Designs</a> */
export declare const Switch: React.FC<SwitchProps>;
