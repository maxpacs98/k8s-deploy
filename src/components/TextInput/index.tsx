import React from 'react'
import classNames from 'classnames';

import styles from './syles.module.scss';

interface InputProps {
    type?: string,
    error?: boolean,
    className?: string,
}

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) =>
    <input
      className={classNames(styles.input, props.className, { [styles.inputError]: props.error })}
      ref={ref}
      type={props.type || 'text'}
      {...props}
    />
);

export default TextInput;