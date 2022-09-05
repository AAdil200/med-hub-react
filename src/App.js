
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeLayout from './features/HomeLayout/HomeLayout';
import Dashboard from './features/dashboard/Dashboard';
import NotFoundPage from './features/NotFoundPage/NotFoundPage';
import Layout from './features/layout/Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeLayout />}></Route>
          <Route path='dashboard' element={<Dashboard />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Route>
      </Routes >
    </BrowserRouter >
  );
}

export default App;
