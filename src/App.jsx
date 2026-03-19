import React from "react";
import { Header } from "./widgets/header/ui/Header"; 
import { Footer } from "./widgets/footer/ui/Footer";
import Carousel from "./widgets/carousel/Carousel";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Carousel></Carousel>
      </main>
      <Footer />  
    </div>
  );
}