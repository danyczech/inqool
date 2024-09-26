import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import style from './Button.module.css';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: 'basic' | 'search';
}


const Button = ({
  children,
  className,
  disabled = false,
  type = 'button',
  variant = 'basic',
  ...props
}:IProps):ReactElement => (
  <button
    {...props}
    className={clsx(style.button, style[variant], className)}
    disabled={disabled}
    type={type}
  >
    {children}
  </button>
)

export default Button;
