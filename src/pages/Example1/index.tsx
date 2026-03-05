import styled from '@emotion/styled';
import assetImage from '../../assets/images/assets.png';
import assetImage2 from '../../assets/images/context.png';

const Container = styled.section`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
`;

export const Example1 = () => {
  return (
    <Container>
      <Title>Example 1</Title>
      <Content>
        <Card>
          {/* public폴더아래 아미지 있을때 */}
          <Image
            src='/assets/images/assets.png'
            alt='Image'
          />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Card>
        <Card>
           {/* public폴더아래 아미지 있을때 */}
          <Image
            src='/assets/images/context.png'
            alt='Image'
          />
          <Text>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Card>
        <Card>
          {/* src폴더아래 아미지 있을때 */}
          <Image
            src={assetImage}
            alt='Image'
          />
          <Text>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Card>
        <Card>
          {/* src폴더아래 아미지 있을때 */}
          <Image
            src={assetImage2}
            alt='Image'
          />
          <Text>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Card>
      </Content>
    </Container>
  );
};
