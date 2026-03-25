import SafeWithUs from '../../widgets/SafeWithUs/SafeWithUs';
import Carousel from "../../widgets/carousel/Carousel";
import SearchBar from "../../widgets/searchBar/SearchBar";
import './MainPage.css';
import HotelsList from "../../components/hotelCardWrapperComponents/hotelList";
export default function MainPage() {
    return (
        <>
            {/* DEV ONLY: remove before push */}
            <main>
                <div className="carouselWrapper">
                <Carousel />
                <div className="searchBarAbsolute">
                    <SearchBar />
                </div>
                </div>
                <HotelsList></HotelsList>
            </main>
            <SafeWithUs />
            {/* DEV ONLY: remove before push */}
        </>
    );
}