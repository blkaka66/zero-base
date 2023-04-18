import { useState } from "react";
import styles from './Tab.module.css';
import classNames from 'classnames';
import { NavLink } from "react-router-dom";
import Digital from "../../Body/Digital/Digital";
import App from "../../App";

export type Props = {
  title: string;
  link: string;
  index: number;
};


export default function Tabs({ title, link, index }: Props): JSX.Element {
    const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0);
  
    const handleClick = () => {
      setSelectedTabIdx(index);
    }
  
    const isActive = index === selectedTabIdx ? styles.active : '';
  
    return (
      <>
        <li>
          <NavLink to={link} className={classNames(styles.a, isActive)} onClick={handleClick}>
            <span className={styles.title}>{title}</span>
          </NavLink>
        </li>
      </>
    );
  }
  