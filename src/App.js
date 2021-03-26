import logo from './logo.svg';
import './App.css';
import { TopBar } from './layouts/TopBar';
import { Cont } from './layouts/Menu';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css'

function App() {
  return (
<>
<Layout>

    <TopBar />
    <Cont />
</Layout>
    
</>
  );
}

export default App;
