import { Task } from './Task'
import { EmptyTasks } from './EmptyTasks';

import styles from './Tasks.module.css'

interface TasksProps {
  tasks: [
    {
      message: string;
      status: boolean;
    }
  ]
}

export function Tasks({ tasks }: TasksProps) {
  return (
    <div className={styles.container}>
      <main className={styles.box}>
        <header className={styles.info}>
          <p className={styles.created}>Tarefas criadas <span className={styles.counter}>{tasks.length}</span></p>
          <p className={styles.done}>Concluídas <span className={styles.counter}>{tasks.length > 0 ? `${tasks.filter(task => task.status).length} de ${tasks.length}` : 0}</span></p>
        </header>
        <section className={styles.tasks} >
          {tasks.length > 0 ? tasks.map(task => (
            <Task message={task.message} status={task.status} key={task.message} />
          )) : (
            <EmptyTasks />
          )}
        </section>
      </main>
    </div>
  )
}
