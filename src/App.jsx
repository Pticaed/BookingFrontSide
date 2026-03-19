import React from "react";
import { Header } from "./widgets/header/ui/Header"; 
import {Footer} from "./widgets/footer/ui/Footer";
import './App.css';

export default function App() {
  return (
    <>
      <Header />
        <main style={{ flex: 1 }}> 
          
        </main>
      <Footer />  
    </>
  );
}