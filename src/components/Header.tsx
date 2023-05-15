import Logo from '../assets/Logo.png'
import styles from './Header.module.css'
import { NewTask } from './NewTask'

interface HeaderProps {
  handleCreate: () => void;
  handleSearch: {
    searchValue: string;
    setSearchValue: () => void;
  };
}

export function Header({handleCreate, handleSearch}: HeaderProps) {
  return (
    <>
      <header className={styles.box}>
        <img src={Logo} alt="Logo Todo App" />
      </header>
      <NewTask handleCreate={handleCreate} handleSearch={handleSearch} />
    </>
  )
}
