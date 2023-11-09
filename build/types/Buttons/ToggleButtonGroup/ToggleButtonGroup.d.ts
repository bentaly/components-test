/// <reference types="react" />
import { BaseProps } from '../../components';
import { IconNamesEnum, IconOptionsType } from '../../Icons';
export interface ToggleButtonGroupProps extends BaseProps {
    /** Overrides for component styles */
    classes?: {
        root?: string;
        toggleButton?: string;
    };
    /** An array of objects representing the buttons used */
    buttons: {
        iconName: IconNamesEnum | IconOptionsType;
        value: string;
    }[];
    /** Decides which button is selected by comparing this prop to each button's value. Passing in null will not select a button. */
    selected: string | null;
    /** Function that returns the clicked button's value */
    onClick: (selectedButton: string) => void;
}
export declare const ToggleButtonGroup: ({ classes: classOverrides, buttons, selected, onClick, testId, }: ToggleButtonGroupProps) => JSX.Element;
