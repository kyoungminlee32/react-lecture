import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { PropsAndState } from './example/PropsAndState';
import { StateComponent1 } from './example/StateComponent1';
import { StateComponent2 } from './example/StateComponent2';
import { Worklist } from './pages/Worklist';
import { Layout } from './layouts/Layout';


function App() {
  return (
     <Routes>
      <Route path="/Worklist" element={<Worklist />} />
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/메뉴1" element={<Layout><PropsAndState /></Layout>} />
      <Route path="/메뉴2" element={<Layout><StateComponent1 /></Layout>} />
      <Route path="/메뉴3" element={<Layout><StateComponent2 /></Layout>} />
    </Routes>
  );
}

export default App;
