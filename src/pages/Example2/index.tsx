import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import assetImage from '../../assets/images/assets.png';
import assetImage2 from '../../assets/images/context.png';

const Container = styled.section`
  padding: 20px;
  > .go-home-button {
    position:fixed;
    bottom: 80px;
    right: 20px;
    margin-top: 20px;
    padding: 30px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #0056b3;
    }
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

const scrollToTop = () => {
  // 페이지 이동 및 스크롤 맨 위로 이동
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 부드러운 스크롤 효과,
  });
};

export const Example2 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    scrollToTop();
  };

  return (
    <Container>
      <Title>Example 2</Title>
      <Content>
        <Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card><Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card>
        <Card>
          <Image
            src={assetImage}
            alt='Image'
          />
          <Text>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Text>
        </Card>
        <Card>
          <Image
            src={assetImage2}
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card>
      </Content>
      <button className='go-home-button' onClick={handleClick}>go home</button>
    </Container>
  );
};
