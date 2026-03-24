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
import { AppPhoto } from './pages/Photo';
import { AppTodoList } from './pages/TodoList';
import { Worklist } from './pages/Worklist';
import { Layout } from './layouts/Layout';
import { AType } from './prototype/A-type/html/A-type';
import { AType2 } from './prototype/A-type/html/A-type-2';
import { BType } from './prototype/B-type/html/B-type';
import { FwProductDetail } from './html/_FW/fw_product_detail';
import { FMDCTemp } from './html/_PD/FMDC-temp';
import { FMHATemp } from './html/_PD/FMHA-temp';
import { FMAA0100000000F01B } from './html/UD/FMAA-0100000000F01-B';
import { FMAA0200000000F01B } from './html/UD/FMAA-0200000000F01-B';
import { FMAA0300000000F01B } from './html/UD/FMAA-0300000000F01-B';
import { FMAA0400000000F01B } from './html/UD/FMAA-0400000000F01-B';
import { FMEC0103030100F01A } from './html/FU/FMEC-0103030100F01-A';
import { FMBB0400000000F01 } from './html/MM/FMBB-0400000000F01';
import { FMBB0500000000F01 } from './html/MM/FMBB-0500000000F01';

import './assets/css/reset.css';
import './assets/css/base.css';
import './assets/css/variables.css';
import './assets/css/layout.css';
import './assets/css/title.css';
import './assets/css/list.css';
import './assets/css/form.css';
import './assets/css/ico.css';
import './assets/css/table.css';
import './assets/css/button.css';
import './assets/css/sample.css';
import './assets/css/util.css';
import './assets/css/banner.css';
import './assets/css/popup.css';
import './assets/css/tabs.css';
import './assets/css/swiper.css';

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
      <Route path="/Photo" element={<Layout><AppPhoto /></Layout>} />
      <Route path="/TodoList" element={<Layout><AppTodoList /></Layout>} />
      <Route path="/prototype/A-type/html/A-type" element={<AType />} />
      <Route path="/prototype/A-type/html/A-type-2" element={<AType2 />} />
      <Route path="/prototype/B-type/html/B-type" element={<BType />} />
      <Route path="/html/_FW/fw_product_detail" element={<FwProductDetail />} />
      <Route path="/html/_PD/FMDC-temp" element={<FMDCTemp />} />
      <Route path="/html/_PD/FMHA-temp" element={<FMHATemp />} />
      <Route path="/html/UD/FMAA-0100000000F01-B" element={<FMAA0100000000F01B />} />
      <Route path="/html/UD/FMAA-0200000000F01-B" element={<FMAA0200000000F01B />} />
      <Route path="/html/UD/FMAA-0300000000F01-B" element={<FMAA0300000000F01B />} />
      <Route path="/html/UD/FMAA-0400000000F01-B" element={<FMAA0400000000F01B />} />
      <Route path="/html/FU/FMEC-0103030100F01-A" element={<FMEC0103030100F01A />} />
      <Route path="/html/MM/FMBB-0400000000F01" element={<FMBB0400000000F01 />} />
      <Route path="/html/MM/FMBB-0500000000F01" element={<FMBB0500000000F01 />} />
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
