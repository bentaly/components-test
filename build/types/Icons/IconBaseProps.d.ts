export interface IconBaseProps {
    size: number;
    color?: string;
    className?: string;
    testId?: string;
}
export interface IconStyleProps {
    size: IconBaseProps['size'];
    color: IconBaseProps['color'];
}
