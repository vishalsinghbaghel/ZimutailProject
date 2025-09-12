
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.brand}>
            <h2 className={styles.logo}>Zimutali</h2>
            <p className={styles.description}>
              Zimutali is all about making users order their desired clothes and
              reduce return rates. Users can also browse and try clothes of
              their choice.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.links}>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/store">Store</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/report-bug">Report Bug</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          {/* <div className={styles.section}>
            <h3 className={styles.heading}>Get in touch with us</h3>
            <ul className={styles.contact}>
              <li>
                <img src="/footer/location.png" /> City, State, Pin Code.
              </li>
              <li>
                <img src="/footer/call.png" /> +91 0123456789
              </li>
              <li>
                <img src="/footer/mail.png" /> Email@gmail.com
              </li>
            </ul>
          </div> */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Get in touch with us</h3>
            <ul className={styles.contact}>
              <li className={styles.item}>
                <img
                  src="/footer/location.png"
                  className={styles.icon}
                  alt="Location"
                />
                <span>City, State, Pin Code.</span>
              </li>
              <li className={styles.item}>
                <img
                  src="/footer/call.png"
                  className={styles.icon}
                  alt="Phone"
                />
                <span>+91 0123456789</span>
              </li>
              <li className={styles.item}>
                <img
                  src="/footer/mail.png"
                  className={styles.icon}
                  alt="Email"
                />
                <span>Email@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className={styles.footerBottom}>
          <h3 className={styles.heading}>Follow Us</h3>
          <div className={styles.socials}>
            <Link to="/linkedin" aria-label="LinkedIn">
              <img src="linkedin.png" height="20px" width="20px" />
            </Link>
            <Link to="/facebook" aria-label="Facebook">
              <img src="facebook.png" height="20px" width="20px" />
            </Link>
            <Link to="/instagram" aria-label="Instagram">
              <img src="instagram.png" height="20px" width="20px" />
            </Link>
            <Link to="/youtube" aria-label="YouTube">
              <img src="youtube.png" height="20px" width="20px" />
            </Link>
            <Link to="/twitter" aria-label="Twitter">
              <img src="twitter.png" height="20px" width="20px" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}