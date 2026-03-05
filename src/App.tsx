import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Example1 } from './pages/Example1';
import { Example2 } from './pages/Example2';
import { PropsAndState } from './example/PropsAndState';
import { StateComponent1 } from './example/StateComponent1';
import { StateComponent2 } from './example/StateComponent2';
import { BlogPosts } from './pages/BlogPosts';
import { Worklist } from './pages/Worklist';
import { Layout } from './layouts/Layout';


function App() {
  return (
     <Routes>
      <Route path="/Worklist" element={<Worklist />} />
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/About" element={<Layout><About /></Layout>} />
      <Route path="/Example1" element={<Layout><Example1 /></Layout>} />
      <Route path="/Example2" element={<Layout><Example2 /></Layout>} />
      <Route path="/메뉴1" element={<Layout><PropsAndState /></Layout>} />
      <Route path="/메뉴2" element={<Layout><StateComponent1 /></Layout>} />
      <Route path="/메뉴3" element={<Layout><StateComponent2 /></Layout>} />
      <Route path="/BlogPosts" element={<Layout><BlogPosts /></Layout>} />
      <Route path="/Worklist" element={<Layout><Worklist /></Layout>} />
      <Route 
        path="*"
        element={
          <Layout>
            <h2>404 Not Found</h2>
          </Layout>
        }
      />
     </Routes>
  );
}

export default App;
