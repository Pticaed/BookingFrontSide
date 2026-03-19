import React from "react";
import { Header } from "./widgets/header/ui/Header"; 
import { Footer } from "./widgets/footer/ui/Footer";
import Carousel from "./widgets/carousel/Carousel";
import SearchBar from "./widgets/searchBar/SearchBar";
import './App.css';
import HotelsList from "./components/hotelCardWrapperComponents/hotelList";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
         <div className="carouselWrapper">
          <Carousel />
          <div className="searchBarAbsolute">
            <SearchBar />
          </div>
        </div>

        <HotelsList></HotelsList>
      </main>
      <Footer />  
    </div>
  );
}