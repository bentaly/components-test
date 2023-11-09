import React from 'react';
import { BaseProps } from '../../components';
export interface TargetContentProps extends BaseProps {
    /** Icon to be displayed at the beginning of the button */
    leadingIcon?: string;
    /** Icon to be displayed at the end of the button */
    trailingIcon?: string;
    /** Color of leading Icon */
    leadingIconColor?: string;
    /** Color of trailing Icon */
    trailingIconColor?: string;
}
/**
 * This houses the content of a 'target' (such as a hyperlink or a button).
 */
export declare const TargetContent: React.FC<TargetContentProps>;
