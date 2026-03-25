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
            <ReviewSection />
            <SafeWithUs />
            {/* DEV ONLY: remove before push */}
        </>
    );
}