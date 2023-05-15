import styles from './NewTask.module.css'
import { FiPlusCircle } from 'react-icons/fi'
import { useState, ChangeEvent } from 'react';

interface NewTaskProps {
  handleCreate: (search: string) => void;
  handleSearch: {
    searchValue: string;
    setSearchValue: (value: string) => void;
  };
}

export function NewTask({ handleCreate, handleSearch }: NewTaskProps) {

  const {searchValue, setSearchValue} = handleSearch

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
  }

  return (
    <div className={styles.fieldGroup}>
      <input type="search" name="search" id="search" className={styles.field} placeholder='Adicione uma nova tarefa' value={searchValue} onChange={handleInputChange} />
      <button className={styles.button} onClick={() => handleCreate(searchValue)}>Criar <FiPlusCircle /></button>
    </div>
  )
}
