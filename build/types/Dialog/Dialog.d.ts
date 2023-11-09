import React, { ReactNode } from 'react';
import { BaseProps } from '../components';
export declare type CloseReason = 'backdropClick' | 'escapeKeyDown' | 'closeButtonClick';
export interface DialogProps extends BaseProps {
    open: boolean;
    classes?: {
        root?: string;
        buttonControls?: string;
        title?: string;
        children?: string;
        MuiDialogPaper?: string;
    };
    title?: ReactNode;
    onClose?: (reason?: CloseReason) => void;
    onExited?: (node: HTMLElement) => void;
    onButtonPress?: React.MouseEventHandler<HTMLButtonElement>;
    cancelButtonText?: string;
    okButtonText?: string;
    displayButtonControls?: boolean;
    fullScreen?: boolean;
    shouldShowCloseIcon?: boolean;
    variant?: 'dialog' | 'modal' | undefined;
    position?: [number, number, number, number];
    buttonVariant?: 'destructive' | 'filled' | 'secondary' | 'primary' | 'ghost' | undefined;
    disableOkButton?: boolean;
    okButtonLoading?: boolean;
    scroll?: 'body' | 'paper';
    /** Options to set the max width, matching mui-dialog API. This is not a fixed width, just the maximum. */
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    size?: 'xs' | 'sm' | 'md' | 'lg' | number;
    testIds?: {
        okButton?: string;
        cancelButton?: string;
        closeButton?: string;
        title?: string;
        children?: string;
    };
}
export declare const Dialog: React.FC<DialogProps>;
