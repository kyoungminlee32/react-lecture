import { useContext, useState } from 'react';
import TodoListContext from '../index';

export const TodoForm = () => {
    const [text, setText] = useState('');
    const value = useContext(TodoListContext);

    const onChange = (e: React.FormEvent) => {
        value?.actions.addTodo(text);
        e.preventDefault();
        setText('');
    };
    return (
        <form onSubmit={onChange}>
            <input 
                value={text}
                placeholder="할 일을 입력하세요"
                onChange={(e) => setText(e.target.value)}
            />
            <button>등록</button>
        </form>
    );
};