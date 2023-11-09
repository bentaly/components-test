import React from 'react';
import { BaseProps } from '../components';
export declare type IComment = {
    name?: string;
    createdAt: Date;
    value: string;
    details?: string;
};
export interface CommentProps extends BaseProps {
    comment: IComment;
    customerTimezone?: string;
    expandableLines?: number;
    shouldHideInitials?: boolean;
    usersUUID?: string;
    classes?: {
        root?: string;
        detailsSection?: string;
        tagged?: string;
        isUser?: string;
    };
}
export declare const Comment: React.FC<CommentProps>;
