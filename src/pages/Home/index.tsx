import style from '@emotion/styled';
import { CountProvider } from '../../components/ContextExample/Contexts';
import { CountLabel } from '../../components/ContextExample/Contexts/CountLabel';
import { PlusButton } from '../../components/ContextExample/Contexts/PlusButton';

const CounterContainer = style.div`
    margin-top: 20px;
    &.counter-container {
      display: flex;
      align-items: center; 
      gap: 10px;
      > button {
        padding: 5px 10px;
        font-size: 16px;
        cursor: pointer;
      }
      > span {
        font-size: 20px;
        font-weight: bold;
        padding: 0;
      }
    }
`;


export const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        lectus nec orci bibendum tristique. Nulla facilisi. Vestibulum in
        pulvinar mauris. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Cras efficitur eleifend velit, nec
        finibus ligula bibendum eget. Vivamus accumsan ultricies lacus, sed
        efficitur sapien tristique nec. Nullam eget ante vitae neque accumsan
        sollicitudin. Mauris volutpat augue nec est venenatis, et volutpat
        libero eleifend.
      </p>
      <CountProvider>
        <CounterContainer className="counter-container">
          <CountLabel />
          <PlusButton />
        </CounterContainer>
      </CountProvider>
    </div>
  );
};