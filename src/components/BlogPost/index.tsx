import styled from '@emotion/styled';

const Container = styled.dl`
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow:
    10px 10px 20px #d9d9d9,
    -10px -10px 20px #ffffff;
`;

const Title = styled.dt`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Body = styled.dd``;

interface Props {
  readonly title: string;
  readonly body: string;
}

export const BlogPost = ({ title, body }: Props) => {
  return (
    <Container className="boxCardList">
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
};
