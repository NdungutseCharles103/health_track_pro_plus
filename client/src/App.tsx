import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy } from 'react';
const IndexPage = lazy(() => import('./pages/index'));

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<IndexPage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
