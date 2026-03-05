import { createContext, useState } from 'react';

type TodoListItemType = {
    no: number;
    todo: string;
    do: boolean;
}

type TodoListContextValueType = {
    state: { todoList: Array<TodoListItemType> };
    actions: {
        addTodo: (todo: string) => void;
        deleteTodo: (no: number) => void;
        toggleTodo: (no: number) => void;
    };
}

const TodoListContext = createContext<TodoListContextValueType | undefined>(
    undefined
);

interface Props {
    children: React.ReactNode;
}

export const TodoProvider = ({ children }: Props) => {
    const [todoList, setTodoList] = useState<Array<TodoListItemType>>([
        { no: 1, todo: '리엑트 공부하기', do: false },
        { no: 2, todo: '리액트 네이티브 공부하기', do: false },
        { no: 3, todo: '자바스크립트 공부하기', do: true },
        { no: 4, todo: '타입스크립트 공부하기', do: false },
    ]);

    const addTodo = (todo: string): void => {
        setTodoList([
            ...todoList,
            { no: Date.now(), todo: todo, do: false }
        ]);
    };

    const deleteTodo = (no: number): void => {
        setTodoList(
            todoList.filter((item: TodoListItemType) => item.no !== no)
        );
    };

    const toggleTodo = (no: number): void => {
        setTodoList(
            todoList.map((item) =>
                item.no === no ? { ...item, do: !item.do } : item
            )
        );
    };

    const value: TodoListContextValueType = {
        state: { todoList },
        actions: { addTodo, deleteTodo, toggleTodo },
    };

    return (
        <TodoListContext.Provider value={value}>{children}</TodoListContext.Provider>
    );
};

export default TodoListContext;


