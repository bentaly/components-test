import { ReactNode } from 'react';
import { BaseProps } from '../components';
import { CloseReason } from '../Dialog';
interface FullscreenImageDialogProps extends BaseProps {
    /** Is the dialog open */
    open: boolean;
    /** Change the root class */
    classes?: {
        root?: string;
    };
    /** Title prefix */
    titleLabel?: string;
    /** Title on right of titleLabel */
    titleValue?: string;
    /** Url of the image to show */
    imageURL: string;
    /** Handle closing */
    onClose?: (reason?: CloseReason) => void;
    /** This can be one or more buttons */
    actions?: ReactNode;
}
/** Alternative to dialog that takes up the entire view */
export declare const FullscreenImageDialog: ({ classes: classOverrides, open, titleLabel, titleValue, imageURL, onClose, actions, }: FullscreenImageDialogProps) => JSX.Element;
export {};
