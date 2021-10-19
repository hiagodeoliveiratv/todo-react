import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';

const App = ()=>{
  const [ list, setList ] = useState<Item[]>([
    {id: 1, name: 'Comprar pão na padaria', done: true},
    {id: 1, name: 'Comprar um bolo na padaria', done: false},
  ]);
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Área de adiconar nova tarefa*/}
        {
          list.map((item, index)=>(
            <ListItem item={item} key={index} />
          ))
        }

      </C.Area>
    </C.Container>
  );
}

export default App;