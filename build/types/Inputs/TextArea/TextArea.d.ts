import React from 'react';
import { BaseProps } from '../../components';
interface TextAreaProps extends BaseProps, React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    /** Overrides for styles */
    classes?: {
        root?: string;
        textarea?: string;
        textareaBox?: string;
        cornerGrip?: string;
        TopEndAdornment?: string;
        TopStartAdornment?: string;
        BottomEndAdornment?: string;
        Label?: string;
        HelperLabel?: string;
        error?: string;
        disabled?: string;
        bottomRow?: string;
    };
    /** The value of the textarea */
    value: string;
    /** If the textarea is in an error state */
    error?: boolean;
    /** Which directions the textarea can resize */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    /** Information placed at the top of the textarea */
    Label?: React.ReactNode;
    /** Information placed at the bottom of the textarea */
    HelperLabel?: React.ReactNode;
    /** Adornment placed at the start of the textarea */
    TopStartAdornment?: React.ReactNode;
    /** Adornment placed at the end of the textarea */
    TopEndAdornment?: React.ReactNode;
    /** Adornment placed at the bottom right of the textarea. Will replace the CornerGrip icon */
    BottomEndAdornment?: React.ReactNode;
    /** Height of the textarea */
    height?: string | number;
    /** Width of the textarea */
    width?: string | number;
    /** Minimum height of the textarea */
    minHeight?: string | number;
    /** Minimum width of the textarea. IMPORTANT: if the `HelperLabel` is long this minWidth must be adjusted to account for that.  */
    minWidth?: string | number;
}
/** <a href="https://www.figma.com/file/UIwOewMtY62ERnQ7ahvRov/GMDS-Guidelines-Components-Text-Area?node-id=415%3A114307">Designs</a> */
export declare const TextArea: ({ classes: classOverrides, value, resize, placeholder, Label, TopStartAdornment, TopEndAdornment, BottomEndAdornment, error, height, width, minWidth, minHeight, HelperLabel, testId, className, maxLength, disabled, readOnly, ...textareaProps }: TextAreaProps) => JSX.Element;
export {};
