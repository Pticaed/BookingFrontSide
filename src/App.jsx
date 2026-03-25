import React from "react";
import { Header } from "./widgets/header/ui/Header"; 
import { Footer } from "./widgets/footer/ui/Footer";
import { AppRouter } from "./app/routes/AppRouter";

export default function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />  
    </div>
  );
}