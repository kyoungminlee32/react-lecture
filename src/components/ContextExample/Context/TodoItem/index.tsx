import styled from '@emotion/styled';


const LI = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`;
interface TextSpanProps {
    do: boolean;
}

const TextSpan = styled.span<TextSpanProps>`
    color: ${({ do: isDone }) => (isDone ? '#999' : 'inherit')};
    text-decoration: ${({ do: isDone }) => (isDone ? 'line-through' : 'none')};
    cursor: pointer;
`;

const RemoveSpan = styled.button`
    margin-left: 4px;
    cursor: pointer;
    padding: 0 10px;
`;

interface TodoItemProps {
    todo: {
        no: number;
        todo: string;
        do: boolean;
    };
    onToggle: (no: number) => void;
    onDelete: (no: number) => void;
};

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
    return (
        <LI>
            <TextSpan do={todo.do} onClick={() => onToggle(todo.no)}>{todo.todo}</TextSpan>
            <RemoveSpan onClick={() => onDelete(todo.no)}>닫기</RemoveSpan>
        </LI>
    );
};