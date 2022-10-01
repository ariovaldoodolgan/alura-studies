import { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import Stopwatch from '../components/stopwatch';
import { ITask } from '../types/task';
import style from './App.module.scss';

function App() {
  const [taskList, setTask] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function getTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTask(oldTasks => oldTasks.map(item => ({
      ...item,
      selected: item.id === selectedTask.id ? true : false
    })));
  }

  function endTask() {
    if (selected) {
      setSelected(undefined);
      setTask(oldTasks => oldTasks.map(item => {
        if (item.id === selected.id) {
          return {
            ...item,
            selected: false,
            completed: true
          }
        }
        return item;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTask}/>
      <List 
        taskList={taskList} 
        getTask={getTask} />
      <Stopwatch 
        selected={selected}
        endTask={endTask}/>
    </div>
  );
}

export default App;
