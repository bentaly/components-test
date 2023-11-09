import React from 'react';
import { BaseProps } from '../../components';
export declare type BadgeType = 'error' | 'danger' | 'success' | 'warning' | 'critical' | 'high' | 'medium' | 'low' | 'informational' | 'unassessed' | 'default';
export interface BadgeProps extends BaseProps {
    /** Text inside the badge */
    text: string;
    /** Function called when badge is clicked */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    /** Icon to display at the beginning of the badge */
    leadingIcon?: string;
    /** Icon to display at the end of the badge */
    trailingIcon?: string;
    /** Type that will determine the color scheme of the badge */
    type?: BadgeType;
    /** Whether the badge displays as disabled */
    disabled?: boolean;
    /** Whether the badge has compact padding */
    small?: boolean;
}
export declare const Badge: React.FC<BadgeProps>;
