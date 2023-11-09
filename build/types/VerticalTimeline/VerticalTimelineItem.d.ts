import React from 'react';
export interface VerticalTimelineItemProps {
    children?: React.ReactNode;
    classes?: {
        root?: string;
        head?: string;
        tail?: string;
        content?: string;
    };
}
export declare const VerticalTimelineItem: React.FC<VerticalTimelineItemProps>;
