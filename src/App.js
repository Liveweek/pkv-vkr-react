import './App.css';
import { Box } from '@chakra-ui/react'

import ItemPage from './pages/ItemPage'
import ItemList from './pages/ItemList';

function App() {

  return (
    <Box className="App" mb='40px' height="100%">
      <ItemList/>
    </Box> /* App */
  );
}

export default App;
