import React from 'react';
import { ToastProps } from '../Toast';
import { BaseProps } from '../../components';
export declare type ToastType = 'loading' | 'error' | 'success' | null;
export interface DataHandlingToastsProps extends BaseProps, Omit<ToastProps, 'onClose'> {
    anchorOrigin?: ToastProps['anchorOrigin'];
    errorMsg?: string;
    loadingMsg?: string;
    onClose?: (toastClosed: string) => void;
    successMsg?: string;
    details?: string;
    time?: string;
    toastToShow: ToastType;
}
export declare const DataHandlingToasts: React.FC<DataHandlingToastsProps>;
