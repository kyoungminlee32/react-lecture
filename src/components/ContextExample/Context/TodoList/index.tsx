import { TodoItem } from '../TodoItem';
import { useContext } from 'react';
import TodoListContext from '../index';

export const TodoList = () => {
    const value = useContext(TodoListContext);

    if (!value) {
        return null;
    }

    return (
        <ul>
            {value.state.todoList.map((item) => (
                <TodoItem
                    key={item.no}
                    todo={item}
                    onToggle={value.actions.toggleTodo}
                    onDelete={value.actions.deleteTodo}
                />
            ))}
        </ul>
    );
};