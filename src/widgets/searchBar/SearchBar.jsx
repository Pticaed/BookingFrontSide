import React from "react";
import styles from "./SearchBar.module.scss";
import { Airplane, Calendar, Profile2User, ArrangeVertical, SearchNormal } from "iconsax-react";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.column} style={{marginLeft: '10px'}}>
        <Airplane size="24" color="#333" variant="Linear"></Airplane>
        <span>Where are you going?</span>
      </div>

      <div className={styles.column}>
        <Calendar size="24" color="#333" variant="Linear"></Calendar>
        <span>Check in - Check out</span>
      </div>

      <div className={styles.column} style={{ borderRight: "none" }}>
        <Profile2User size="24" color="#333" variant="Linear"></Profile2User>
        <span style={{marginRight: "30px"}}>2 adults 0 childrens 1 room</span>
        <ArrangeVertical size="24" color="#333" variant="Linear"></ArrangeVertical>
      </div>

      <button className={styles.searchBtn}>
        <SearchNormal size="24" color="white" variant="Linear"></SearchNormal>
      </button>
    </div>
  );
};

export default SearchBar;