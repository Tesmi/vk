import React from "react";
import styles from "./home.module.scss";

import { Container, Row, Col, Image } from "react-bootstrap";

import Footer from "../components/Footer";

const header_img = require("../assets/other/circuit_header.jpg");
const about_img = require("../assets/other/circuit_about.jpg");
const map_img = require("../assets/other/map_img.png");

const mapLocation = "https://goo.gl/maps/BBS62SCqb7UyYk4V8";

const Home = () => {
  return (
    <div>
      <Container fluid className="mb-5">
        <Row className="mt-5">
          <Col lg className={styles.center}>
            <div className="leftContent">
              <div className={styles.companyNameContainer}>
                <div className={styles.dividerRow} />
                <h2 className={styles.companyName}>VK Enterprises</h2>
                <div className={styles.dividerRow} />
              </div>
              <h1 className={styles.secondaryTxt}>
                Find All Electronic Components At One Spot
              </h1>
              <h5 className={styles.bottomTxt}>
                We aspire to be known as the biggest semiconductor sourcing firm
                with the broadest global network, allowing us to provide our
                customers with the most difficult-to-find technical components
                as quickly as possible.
              </h5>
              <div className={styles.btnContainer}>
                <div className={styles.button}>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg>
            <Image fluid="True" src={header_img} />
          </Col>
        </Row>
      </Container>
      {/* <Row className={`mt-5 ${styles.aboutSectionContainer}`}> </Row> */}

      {/* MAP SECTION */}
      <a
        id="location"
        style={{ textDecoration: "none" }}
        target="_blank"
        href={mapLocation}
      >
        <div className={styles.mapContainer}>
          <h2 className={styles.mapHeader}>Location</h2>
          <Image
            fluid="True"
            style={{
              marginLeft: "5%",
              paddingBottom: "20px",
              borderRadius: "4%",
            }}
            width="90%"
            height="90%"
            src={map_img}
          />
        </div>
      </a>

      <Footer />
    </div>
  );
};

export default Home;
