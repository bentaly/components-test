import React from 'react';
import { BaseProps } from '../../components';
import { TooltipProps } from '../../Tooltips';
export interface LinkButtonProps extends BaseProps, React.ComponentPropsWithRef<'a'> {
    /** classes to override styles of component */
    classes?: {
        root?: string;
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
    };
    /** Icon to be displayed at the beginning of the link */
    leadingIcon?: string;
    /** Boolean determining whether to highlight link */
    selected?: boolean;
    /** Info to determine how big the link is */
    size?: 'large' | 'medium' | 'small';
    /** Will be shown in tooltip */
    tooltip?: React.ReactNode;
    /** Props passed to Tooltip component */
    tooltipProps?: TooltipProps;
    /** Icon to be displayed at the end of the link */
    trailingIcon?: string;
    /** Variant to determine link style */
    variant?: 'destructive' | 'filled' | 'secondary' | 'primary' | 'ghost';
    /** Whether type is iconButton */
    iconButton?: 'standard' | 'small' | 'tiny';
}
/**
 * This component will render a link, in the 'style' of a button.
 * This will give full link a11y but can meet design constraints.
 * Either a hyperlink can be passed such as:
 * ```<LinkButton><a href={'https://www.google.com'}>Some content</a></LinkButton>```
 * or a component that renders a link such as reach router's `Link`:
 * ```<LinkButton><Link to={'https://www.google.com'}>Some content</Link></LinkButton>```
 */
export declare const LinkButton: React.FC<LinkButtonProps>;
