// AppRouter.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main/MainPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};