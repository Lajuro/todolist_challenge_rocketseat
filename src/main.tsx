// @ts-nocheck
import { useState, ChangeEvent } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import {v4 as uuidV4} from 'uuid'

interface ITasks {
  id: string;
  message: string;
  status?: boolean;
}

function Main() {

  const [tasks, setTasks] = useState<ITasks[]>([])
  const [searchValue, setSearchValue] = useState("")

  function handleCreate(search: string) {
    
    setTasks(prevState => [...prevState, {
      id: uuidV4(),
      message: search,
      status: false
    }])
    
    setSearchValue("")
  }

  function handleChange(id: string, event: ChangeEvent<HTMLElement>) {
    if (event.target.tagName !== "svg") {
      setTasks(tasks.map(taskMap => taskMap.id === id ? {...taskMap, status: !taskMap.status} : {...taskMap}))
    }
  }

  function handleDelete(id: string) {
    const tasksExceptDeletedOne = tasks.filter(task => task.id !== id)
    setTasks(tasksExceptDeletedOne)
  }

  return (
    <>
      <Header handleCreate={handleCreate} handleSearch={({searchValue, setSearchValue})} />
      <Tasks tasks={tasks} handleChange={handleChange} handleDelete={handleDelete} />
    </>
  )
}

export default Main
