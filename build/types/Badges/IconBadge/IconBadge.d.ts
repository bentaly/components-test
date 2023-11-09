import React from 'react';
import { BadgeProps } from '../Badge/Badge';
import { IconBaseProps } from '../../Icons/IconBaseProps';
export interface IconBadgeProps extends Omit<BadgeProps, 'text' | 'leadingIcon' | 'trailingIcon'> {
    /** Icon to display in the badge */
    icon: string;
    IconProps?: IconBaseProps;
}
export declare const IconBadge: React.FC<IconBadgeProps>;
