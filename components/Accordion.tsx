import React from 'react';
import { ReactNode } from 'react';
import styles from '../styles/Accordion.module.css';
export interface HeadProps
{
    question: string;
    children: ReactNode;
}

export default function Header(props: HeadProps)
{
    const [open, setOpen] = React.useState(false);
    return (
    <>
            <div className={`${styles.question} ${open && styles.active}`} onClick={() => setOpen(!open)}>
                {props.question}
                <i className="fa fa-angle-down"></i>
            </div>
            <div className={`${styles.answer} ${open && styles.answerActive}`}>
                {props.children}
            </div>
            </>
            )
}
