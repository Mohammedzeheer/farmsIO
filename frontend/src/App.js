import React from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import DynamicDropdown from './components/DynamicDropdown';

const App = () => {
  return (
 
    <BrowserRouter>
      <Routes>      
        <Route path='/' element={<DynamicDropdown/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

