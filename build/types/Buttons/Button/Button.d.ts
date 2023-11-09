import React, { MutableRefObject } from 'react';
import { BaseProps } from '../../components';
import { TooltipProps } from '../../Tooltips';
export interface ButtonProps extends BaseProps, React.ComponentPropsWithRef<'button'> {
    /** classes to override styles of component */
    classes?: {
        root?: string;
        buttonContent?: string;
        disabled?: string;
        destructive?: string;
        filled?: string;
        secondary?: string;
        primary?: string;
        text?: string;
        large?: string;
        small?: string;
        medium?: string;
        trailing?: string;
        leading?: string;
        loadingSpinnerContent?: string;
    };
    /** Determines whether or not button is disabled */
    disabled?: boolean;
    /** Icon to be displayed at the beginning of the button */
    leadingIcon?: string;
    /** Functioned called when button is clicked */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** Boolean determining whether to highlight button */
    selected?: boolean;
    /** Info to determine how big the button is */
    size?: 'large' | 'medium' | 'small';
    /** Will be shown in tooltip */
    tooltip?: React.ReactNode;
    /** Props passed to Tooltip component */
    tooltipProps?: TooltipProps;
    /** Icon to be displayed at the end of the button */
    trailingIcon?: string;
    /** Variant to determine button style */
    variant?: 'destructive' | 'filled' | 'secondary' | 'primary' | 'ghost';
    /** Whether type is iconbutton */
    iconButton?: 'standard' | 'small' | 'tiny';
    /** Whether to show a loading spinner */
    loading?: boolean;
    /** Whether icon is an icon button, should not show leading or trailing icons */
    isIconButton?: boolean;
    /** Ref for the button */
    buttonRef?: MutableRefObject<HTMLButtonElement | null>;
}
export declare const Button: ({ children, classes: classOverrides, className, disabled, leadingIcon, onClick, selected, size, tooltip, tooltipProps, testId, trailingIcon, iconButton, variant, loading, isIconButton, buttonRef, ...rest }: ButtonProps) => JSX.Element;
