import styles from '../styles/Button.module.css'
import {Children, HTMLAttributes, ReactNode} from 'react';
import Link from 'next/link';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  text: string | ReactNode;
  context?: string;
  ticketsUrl?: any;
  disabled?: boolean;
  onClick?: () => void;
  style?: any;
};

export default function Button({context = 'primary', text, ticketsUrl, disabled, onClick, style}: ButtonProps) {

  return (
    <button style={style} disabled={disabled} className={styles[context]} onClick={onClick}>
      {!onClick && <Link
        href={ticketsUrl ?? 'https://www.ticketmaster.ie/'}
      >
        {text}
      </Link>}
      {onClick && text}
    </button>
  )
}
