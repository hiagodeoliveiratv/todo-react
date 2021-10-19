import { setMaxListeners } from 'process';
import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskname: string) => void;
  
}

export const AddArea = ({ onEnter, setList }: Props) =>{
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code == 'Enter' && inputText != ''){
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <C.Container>
            <div className="imagem">&#10133;</div>
            <input 
                type="text"
                placeholder="Adicionar uma tarefa"
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
                value={inputText}
                />
        </C.Container>
    );
}