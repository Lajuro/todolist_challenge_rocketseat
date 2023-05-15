import './Main.css'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

// const tasks = []

const tasks = [
  {
    message: "Fazer compras",
    status: false
  },
  {
    message: "Cortar a grama",
    status: true
  },
  {
    message: "Lavar as roupas",
    status: true
  },
  {
    message: "Limpar o quintal",
    status: false
  }
]

function Main() {

  return (
    <>
      <Header />
      <Tasks tasks={tasks} />
    </>
  )
}

export default Main
