import styles from './EmptyTasks.module.css'

import Clipboard from '../assets/clipboard.png'

export function EmptyTasks() {
  return (
    <div className={styles.box}>
      <img src={Clipboard} alt="Imagem para representar uma Área de Transferência" />
      <h3>Você ainda não tem tarefas cadastradas</h3>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
