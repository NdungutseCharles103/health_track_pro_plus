import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy } from 'react';
import AccountIndex from './pages/account';
const IndexPage = lazy(() => import('./pages/index'));

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/account" element={<AccountIndex />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
