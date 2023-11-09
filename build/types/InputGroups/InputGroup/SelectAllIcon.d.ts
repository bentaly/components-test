/// <reference types="react" />
export interface SelectAllIconProps {
    isSelected?: boolean;
    isTernary?: boolean;
    colorOverrides?: {
        selected?: string;
        ternary?: string;
        empty?: string;
    };
}
export declare const SelectAllIcon: ({ isSelected, isTernary, colorOverrides }: SelectAllIconProps) => JSX.Element;
