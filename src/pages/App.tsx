import { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import Stopwatch from '../components/stopwatch';
import { ITask } from '../types/task';
import style from './App.module.scss';

function App() {
  const [taskList, setTask] = useState<ITask[]>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask}/>
      <List taskList={taskList} />
      <Stopwatch />
    </div>
  );
}

export default App;
