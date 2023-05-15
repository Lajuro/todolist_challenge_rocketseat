import styles from './NewTask.module.css'
import { FiPlusCircle } from 'react-icons/fi'

export function NewTask() {
  return (
    <div className={styles.fieldGroup}>
      <input type="search" name="search" id="search" className={styles.field} placeholder='Adicione uma nova tarefa' />
      <button className={styles.button}>Criar <FiPlusCircle /></button>
    </div>
  )
}
