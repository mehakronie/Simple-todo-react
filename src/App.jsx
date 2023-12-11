import { useState } from 'react'
import './App.css'
import { AddTask } from './AddTask'
import { TaskList } from './TaskList';


let nextId = 0;
function App() {

  const [alltask, setalltask] = useState([])
  function adding(text) {
    setalltask([
      ...alltask,
      {
        id: nextId++,
        text: text,
        done: false
      }
    ])
  }
  function update(task) {
    setalltask(alltask.map((eachval) => {
      if (eachval.id == task.id) {
        return task
      } else {
        return eachval
      }
    }))
  }
  const deleting = (id) => {
    setalltask(alltask.filter((eachval) => eachval.id !== id))
  }
  return (
    <>
      <center><h2>Add Your Tasks</h2></center>
      <AddTask adding={adding} />
      <TaskList alltask={alltask} update={update} deleting={deleting} />
    </>
  )
}

export default App
