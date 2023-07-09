import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface BtnProps extends ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  variant?: 'text' | 'outlined' | 'contained';
  className?: string;
}

export default function BTN({
  children,
  size,
  color,
  variant,
  className,
}: BtnProps): React.JSX.Element {
  return (
    <Button
      style={{ boxShadow: 'none' }}
      className={className}
      size={size}
      variant={variant}
      color={color}
    >
      {children}
    </Button>
  );
}

BTN.defaultProps = {
  size: 'medium',
  color: 'primary',
  variant: 'contained',
};
