import React, { useRef, useEffect } from "react";
import styles from "./Footer.module.scss";

import { Link } from "react-router-dom";

export default function Footer(props) {
  const myRef = useRef(null);

  useEffect(() => {
    props.setContactUsRef(myRef);
  }, []);

  return (
    <div>
      <footer ref={myRef} className={styles.footer}>
        <div className={styles.container}>
          <div className={`${styles.sec} ${styles.aboutus}`}>
            <h2>About Us</h2>
            <p>
              We aspire to be known as the biggest semiconductor sourcing firm
              with the broadest global network, allowing us to provide our
              customers with the most difficult-to-find technical components as
              quickly as possible.
            </p>
            <ul className={styles.sci}>
              <li className={styles.li}>
                <a href="#">
                  <i
                    className={`${styles.fa} fa fa-facebook`}
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
              <li className={styles.li}>
                <a href="#">
                  <i
                    className={`${styles.fa} fa fa-twitter`}
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
              <li className={styles.li}>
                <a href="#">
                  <i
                    className={`${styles.fa} fa fa-linkedin`}
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
              <li className={styles.li}>
                <a href="#">
                  <i
                    className={`${styles.fa} fa fa-instagram`}
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
          <div className={`${styles.sec} ${styles.quickLinks}`}>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="/#about-us">About Us</a>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <a href="/#contact">Contact Us</a>
              </li>
              <li>
                <a href="/#location">Location</a>
              </li>
            </ul>
          </div>
          <div className={`${styles.sec} ${styles.contact}`}>
            <h2>Contact Info</h2>
            <ul className={`${styles.info}`}>
              <li>
                <span>
                  <i
                    className={`${styles.fa} fa fa-map-marker`}
                    aria-hidden="true"
                  />
                </span>
                <span>
                  G-17, 1st Floor, <br /> Sector-63 Noida-201301, <br /> Gautam
                  Budh Nagar (UP), <br /> India
                </span>
              </li>

              <li>
                <span>
                  <i
                    className={`${styles.fa} fa fa-phone`}
                    aria-hidden="true"
                  />
                </span>
                <p>
                  <a href="tel:9318327931">+91-9318327931</a>
                  <br />
                  <a href="tel:8505835936">+91-8505835936</a>
                </p>
              </li>

              <li>
                <span>
                  <i
                    className={`${styles.fa} fa fa-envelope`}
                    aria-hidden="true"
                  />
                </span>
                <p>
                  <a href="mailto:krishnvedentp@gmail.com">
                    krishnvedentp@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={styles.copy}>
        <p>Copyright &copy; 2022 VK-ENTP. All Rights Reserved.</p>
      </div>
    </div>
  );
}
