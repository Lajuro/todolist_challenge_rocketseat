import Logo from '../assets/Logo.png'
import styles from './Header.module.css'
import { NewTask } from './NewTask'

export function Header() {
  return (
    <>
      <header className={styles.box}>
        <img src={Logo} alt="Logo Todo App" />
      </header>
      <NewTask />
    </>
  )
}
