import React from 'react';
import { MenuProps } from '../Menu/Menu';
export interface ContextMenuProps extends MenuProps {
    allowPropagation?: boolean;
}
export declare const ContextMenu: React.FC<ContextMenuProps>;
