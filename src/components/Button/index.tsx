import styled from '@emotion/styled';

const Container = styled.button`
    background-color: #19973C;
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 10px 20px;
    cursor: pointer;
    min-height: 52px;
    min-width:78px;
    &:active {
        background-color: #0D5722;
    }
`;

interface Props {
    label : string;
    onClick : () => void;
}

export const Button = (props: Props) => {
    return <Container onClick={props.onClick}>{props.label}</Container>;
}

export default Button;