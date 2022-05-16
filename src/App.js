import './App.css';
import { Box } from '@chakra-ui/react'
import { 
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom'

import ItemPage from './pages/ItemPage'
import ItemList from './pages/ItemList';
import ProjectList from './pages/ProjectList';
import ProjectPage from './pages/ProjectPage';
import SupplyList from './pages/SupplyList';
import SupplyPage from './pages/SupplyPage';
import ReglamentPage from './pages/ReglamentPage';
import LoginPage from './pages/LoginPage';
import NewItemList from './pages/NewItemList';

function App() {

  return (
    <Box className="App" mb='40px' height="100%">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/ip" element={<ItemPage/>}/>
          <Route path="/il" element={<ItemList/>}/>
          <Route path="/pl" element={<ProjectList/>}/>
          <Route path="/pp" element={<ProjectPage/>}/>
          <Route path="/sl" element={<SupplyList/>}/>
          <Route path="/sp" element={<SupplyPage/>}/>
          <Route path="/rp" element={<ReglamentPage/>}/>
          <Route path="/nil" element={<NewItemList/>}/>
        </Routes>
      </BrowserRouter>
    </Box> /* App */
  );
}

export default App;
