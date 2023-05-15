import styles from './Task.module.css'

interface TaskProps {
  message: string;
  status?: boolean;
}

export function Task({message, status = false}: TaskProps) {
  return (
    <div className={`${styles.task} ${status ? styles.done : ""}`}>
      <p>{message}</p>
    </div>
  )
}
