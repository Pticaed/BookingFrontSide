import HotelCard from "../hotelCard/hotelCard";
import styles from "../hotelCardWrapperComponents/hotelList.module.scss";

const HotelsList = () => {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: 8 }).map((_, index) => (
        <HotelCard key={index} />
      ))}
    </div>
  );
};

export default HotelsList;