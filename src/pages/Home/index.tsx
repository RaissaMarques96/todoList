import {PlusCircle} from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../components/Button'
import {v4 as uuid} from 'uuid'
import './style.scss'

export function Home(){
    const [todos, setTodos] = useState<Todo[]>([])
    const [task, setTask] = useState('')

    function handleAdd(){
        if(task){
            const todo = {
                id: uuid(),
                task,
                done:false
            }
            setTodos([ ...todos, todo])
        } else{
            alert("Preencha a tarefa")
        }
    }

    return(
        <div id='page-home'>
        <header>
            <input type='text' value={task} onChange={ e => setTask(e.target.value)} placeholder="Digite uma tarefa"/>
            <Button title='Adicionar' Icon= {PlusCircle} onClick={handleAdd} />
        </header>
        <main>
            {
                JSON.stringify(todos, null, 2)
            }
        </main>
        
    </div>
    )
}
