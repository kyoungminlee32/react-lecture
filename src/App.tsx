import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { PropsAndState } from './example/PropsAndState';
import { StateComponent1 } from './example/StateComponent1';
import { StateComponent2 } from './example/StateComponent2';
import { Layout } from './layouts/Layout';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PropsAndState />} />
        <Route path="/StateComponent1" element={<StateComponent1 />} />
        <Route path="/StateComponent2" element={<StateComponent2 />} />
      </Routes>
    </Layout>
  );
}

export default App;
