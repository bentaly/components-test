import React from 'react';
import { BaseProps } from '../components';
import { ModalProps, PaperProps } from '@material-ui/core';
interface PanelProps extends BaseProps {
    title?: string;
    displayLeftBorder?: boolean;
    disableRestoreFocus?: boolean;
    open: boolean;
    displayFooterButton?: boolean;
    displayFooterSeparation?: boolean;
    footerButtonVariant?: 'destructive' | 'filled' | 'secondary' | 'primary' | 'ghost';
    onClose?: () => void;
    onFooterButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
    footerButtonText?: string;
    anchor?: 'right' | 'left' | 'top' | 'bottom' | undefined;
    variant?: 'persistent' | 'temporary' | undefined;
    hideBackdrop?: boolean;
    ModalProps?: ModalProps;
    PaperProps?: PaperProps;
    shouldShowCloseIcon?: boolean;
    classes?: {
        root?: string;
    };
    width?: string;
    height?: string;
    customFooter?: React.ReactNode;
}
export declare const Panel: React.FC<PanelProps>;
export {};
