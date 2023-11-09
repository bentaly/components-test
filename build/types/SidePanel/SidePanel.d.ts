import React from 'react';
import { DrawerProps } from '@material-ui/core';
export interface SidePanelProps extends DrawerProps {
    onClose: (e: React.MouseEvent | React.KeyboardEvent, reason: 'backdropClick' | 'escapeKeyDown' | 'closeBtn') => void;
    size?: 'small' | 'medium' | 'large';
    testId?: string;
}
export declare const SidePanel: React.FC<SidePanelProps>;
