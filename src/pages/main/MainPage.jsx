
import Carousel from '../../widgets/carousel/Carousel';
import SearchBar from '../../widgets/searchBar/SearchBar'; // Предполагаю, что там такая же структура
import ReviewSection from '../../widgets/review/ReviewSection/ReviewSection';
import SafeWithUs from '../../widgets/SafeWithUs/SafeWithUs';
import '../../App.css'
import HotelsList from '../../components/hotelCardWrapperComponents/hotelList';
import PromoCard from '../../features/BeOurRegularSection/PromoCard';
import RegisterButton from '../../features/RegisterButtonMain/RegisterButton';

export default function MainPage() {
    return (
        <>
            <main>
                <Carousel />
                <div className="carouselWrapper">
                    
                    <div className="searchBarAbsolute">
                        <SearchBar />
                    </div>
                </div>
                <HotelsList />
                <ReviewSection />
                <SafeWithUs />
                <PromoCard />
                <RegisterButton />
            </main>
        </>
    );
}