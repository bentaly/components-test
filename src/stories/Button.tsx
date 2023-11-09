import './button.css';
import { ButtonProps as MuiButtonProps, Button as MuiButton } from '@mui/material';

// Only pass some of Muis props (these show up in  controls)
type ButtonBaseProps = Pick<MuiButtonProps,  'children' | 'variant' | 'size' | 'color' | 'disabled'>;

export interface ButtonProps extends ButtonBaseProps {}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  children,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      {...props}
    >
      {children}
    </MuiButton>
  );
};
