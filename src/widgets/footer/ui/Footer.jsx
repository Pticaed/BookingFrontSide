import styles from "../Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <ul>
            <li>Countries</li>
            <li>Regions</li>
            <li>Cities</li>
            <li>Districts</li>
            <li>Airports</li>
            <li>Hotels</li>
            <li>Places of interest</li>
          </ul>
        </div>

        <div className={styles.column}>
          <ul>
            <li>Homes</li>
            <li>Apartments</li>
            <li>Resorts</li>
            <li>Villas</li>
            <li>Hostels</li>
            <li>B&Bs</li>
            <li>Guest houses</li>
          </ul>
        </div>

        <div className={styles.column}>
          <ul>
            <li>Unique places to stay</li>
            <li>All destinations</li>
            <li>All flight destinations</li>
            <li>All car hire locations</li>
            <li>Discover</li>
            <li>Reviews</li>
            <li>Awards</li>
          </ul>
        </div>

        <div className={styles.column}>
          <ul>
            <li>Car hire</li>
            <li>Flight finder</li>
            <li>Restaurant reservations</li>
            <li>For Travel Agents</li>
          </ul>
        </div>

        <div className={styles.column}>
          <ul>
            <li>Coronavirus (COVID-19)</li>
            <li>FAQs</li>
            <li>About</li>
            <li>Booking.com Customer Service</li>
            <li>Help</li>
            <li>Partner help</li>
            <li>Careers</li>
            <li>Sustainability</li>
            <li>Press centre</li>
            <li>Safety resource centre</li>
            <li>Investor relations</li>
            <li>Terms & Conditions</li>
            <li>Partner dispute</li>
            <li>How we work</li>
            <li>Privacy & Cookie Statement</li>
            <li>MSA Statement</li>
            <li>Corporate contact</li>
            <li>We Price Match</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;