import styles from './Task.module.css'
import { Checkbox } from './Checkbox';
import { FiTrash2 } from "react-icons/fi";
import { ChangeEvent } from 'react'

interface TaskProps {
  taskId: string;
  message: string;
  status?: boolean;
  handleChange: (id: string, event: ChangeEvent<HTMLElement>) => void;
  handleDelete: (id: string) => void;
}

export function Task({taskId, message, status = false, handleChange, handleDelete}: TaskProps) {

  return (
    <div className={`${styles.task} ${status ? styles.done : ""}`} onClick={(event) => handleChange(taskId, event)}>
      <div className={styles.flex}>
        <Checkbox checked={status} />
        <p>{message}</p>
      </div>
      <button onClick={() => handleDelete(taskId)} aria-label={`Este botão, ao ser pressionado, irá deletar a tarefa com a mensagem "${message}"`}><FiTrash2  /></button>
    </div>
  )
}
