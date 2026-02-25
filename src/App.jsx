import { useState } from 'react'
import './App.css'
import Header from './widgets/header/Header.jsx';
import Footer from './widgets/footer/Footer.jsx';
import { AppRouter } from './app/routes/AppRouter';

export default function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}
