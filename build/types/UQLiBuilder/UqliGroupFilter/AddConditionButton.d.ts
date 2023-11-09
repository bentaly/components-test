import React from 'react';
export interface AddConditionButtonProps {
    className?: string;
    canAddGroup?: boolean;
    onAddGroup: () => void;
    onAddFilter: () => void;
    buttonText?: string;
    hasChildren: boolean;
}
export declare const AddConditionButton: React.FC<AddConditionButtonProps>;
