import { DialogProps } from '../Dialog';
import React from 'react';
export interface ConfirmContextProps {
    children: React.ReactNode;
}
export interface ConfirmDialogOptions extends Omit<DialogProps, 'open' | 'onButtonPress' | 'onClose' | 'shouldShowCloseIcon' | 'displayButtonControls' | 'testIds'> {
    message?: React.ReactNode;
}
export declare const ConfirmDialogProvider: ({ children }: ConfirmContextProps) => JSX.Element;
export declare const useConfirm: () => (data: ConfirmDialogOptions) => Promise<boolean>;
