import * as C from './App.styles';
import { useState } from 'react';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
const App = ()=>{
  const [ list, setList ] = useState<Item[]>([
    {id: 1, name: 'Comprar pão na padaria', done: true},
    {id: 1, name: 'Comprar um bolo na padaria', done: false},
  ]);
  
  const handleAddTask = (taskname: string)=>{
    let newList = [...list] ;
    newList.push({
        id: list.length + 1,
        name: taskname,
        done:false,
    });
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />
        {
          list.map((item, index)=>(
            <ListItem item={item} key={index}
             />
          ))
        }

      </C.Area>
    </C.Container>
  );
}

export default App;