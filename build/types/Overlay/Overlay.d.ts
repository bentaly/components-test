import React from 'react';
export declare enum OverlayType {
    error = 0,
    loading = 1,
    warning = 2,
    empty = 3
}
export interface OverlayProps {
    type: OverlayType;
    errorMessage?: string;
    children?: React.ReactNode;
    anchorRef: any | null;
    classOverrides?: {
        loadingSpinner?: string;
        root?: string;
    };
    testIds?: {
        root?: string;
        loadingSpinner?: {
            icon?: string;
            root?: string;
        };
        emptyState?: {
            message?: string;
            subText?: string;
            icon?: string;
            root?: string;
        };
    };
}
export declare const Overlay: React.FC<OverlayProps>;
