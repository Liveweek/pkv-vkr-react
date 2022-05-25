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
import NewItemPage from './pages/NewItemPage';
import FcstList from './pages/FcstList'
import FcstPage from './pages/FcstPage';


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
          <Route path="/nip" element={<NewItemPage/>}/>
          <Route path="/fcl" element={<FcstList/>}/>
          <Route path="/fcp" element={<FcstPage/>}/>
        </Routes>
      </BrowserRouter>
    </Box> /* App */
  );
}

export default App;
