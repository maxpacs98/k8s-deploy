import React from 'react'
import styles from './styles.module.scss';

interface RootProps {
  name: string
}

export default (props: RootProps) => {
  return <h1 className={styles.h1}>Hi, {props.name}</h1>
}