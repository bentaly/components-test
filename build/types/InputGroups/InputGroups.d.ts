export interface SimpleOption {
    label?: string;
    iconName?: string;
    value: string | number;
    children?: Omit<SimpleOption, 'children'>[];
}
