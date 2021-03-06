import React from 'react'
import styles from './styles.module.scss';
import TextInput from '../TextInput'

interface PassphraseProps {
  length: number
}

const Passphrase = (props: PassphraseProps) => {
  const passphraseInputs: Array<JSX.Element> = [...Array(props.length)].map((_, index:number) => (
    <TextInput error={false} className={styles.input}/>
  ))
  return (
    <>
      { passphraseInputs }
    </>
  )
}

export default Passphrase;