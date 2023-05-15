import { FiCheck } from "react-icons/fi";

import styles from './Checkbox.module.css'

interface CheckboxProps {
  checked: boolean;
}


export function Checkbox({checked}: CheckboxProps) {

  return (
    <>
      {checked ? (
        <div className={`${styles.checkbox} ${styles.checkboxDone}`}>
          <FiCheck />
        </div>
      ) : (
        <div className={`${styles.checkbox}`}></div>
      )}
      <input type="checkbox" checked={checked} className={styles.hidden}/>
    </>
  )
}
