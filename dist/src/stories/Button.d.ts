import './button.css';
import { ButtonProps as MuiButtonProps } from '@mui/material';
type ButtonBaseProps = Pick<MuiButtonProps, 'children' | 'variant' | 'size' | 'color' | 'disabled'>;
export interface ButtonProps extends ButtonBaseProps {
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: ({ children, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
