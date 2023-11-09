import React from 'react';
import { BaseProps } from '../../components';
interface PopoverWrapperAnchor {
    horizontal: 'center' | 'left' | 'right' | number;
    vertical: 'bottom' | 'center' | 'top' | number;
}
interface PopoverWrapperAnchorPosition {
    left: number;
    top: number;
}
export interface PopoverWrapperProps extends BaseProps {
    classes?: {
        root?: string;
        paper?: string;
    };
    open?: boolean;
    anchorOrigin?: PopoverWrapperAnchor;
    transformOrigin?: PopoverWrapperAnchor;
    anchorPosition?: PopoverWrapperAnchorPosition;
    anchorReference?: 'anchorEl' | 'anchorPosition' | 'none';
    anchorEl?: Element | null;
    marginThreshold?: number;
    elevation?: number;
    onClose?: (e: any) => void;
    transitionDuration?: 'auto' | number;
    disableAutoFocus?: boolean;
    disableEnforceFocus?: boolean;
}
export declare const PopoverWrapper: React.FC<PopoverWrapperProps>;
export {};
