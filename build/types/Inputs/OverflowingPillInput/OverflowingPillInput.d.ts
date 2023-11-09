import React, { ReactNode } from 'react';
import { PillInputProps } from '../PillInput/PillInput';
export interface OverflowingPillInputProps extends Omit<PillInputProps, 'autoCompleteProps' | 'ValueRenderer'> {
    renderPills: (vals: string[], maxPillsToShow: number) => ReactNode;
    renderOverflow: (vals: string[], open?: boolean, setOpen?: (open: boolean) => void) => ReactNode;
    maxPillsToShow?: number;
    open?: boolean;
    setOpen?: (open: boolean) => void;
}
export declare const OverflowingPillInput: React.ForwardRefExoticComponent<OverflowingPillInputProps & React.RefAttributes<HTMLInputElement>>;
