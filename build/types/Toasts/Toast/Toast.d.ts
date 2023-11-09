import React from 'react';
import { BaseProps } from '../../components';
import { SnackbarProps } from '@material-ui/core/Snackbar';
export interface ToastProps extends BaseProps {
    classes?: {
        root?: string;
    };
    details?: string;
    time?: string;
    anchorOrigin?: SnackbarProps['anchorOrigin'];
    autoHideDuration?: SnackbarProps['autoHideDuration'];
    iconName?: string;
    iconColor?: string;
    action?: () => void;
    actionMessage?: string;
    message?: SnackbarProps['message'];
    onClose?: SnackbarProps['onClose'];
    open?: SnackbarProps['open'];
    size?: 'small' | 'medium' | 'large';
    variant?: 'standard' | 'inline';
}
/** <a href="https://www.figma.com/file/ri5tSmGcEYjvQDiEQhHZWe/GMDS-Guidelines-Pattern-Toast?type=design&node-id=0%3A1&t=xAyvd32DuoxaG5Ws-1">Designs</a> */
export declare const Toast: React.FC<ToastProps>;
