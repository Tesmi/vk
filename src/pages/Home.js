import React, { useState } from "react";
import styles from "./home.module.scss";
import axios from "axios";

import { Container, Row, Col, Image } from "react-bootstrap";

import Footer from "../components/Footer";

const URI = "http://localhost:5000/mail";
// const URI = "vkentp.com/mail";

const header_img = require("../assets/other/circuit_header.jpg");
const about_img = require("../assets/other/circuit_about.jpg");
const map_img = require("../assets/other/map_img.png");
const contact_img = require("../assets/other/contact-us.png");

const mapLocation = "https://goo.gl/maps/BBS62SCqb7UyYk4V8";

const Home = () => {
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await sendMail();
  };

  const sendMail = async () => {
    await axios.get(URI, { params: { mail, phone, query } }).then((result) => {
      alert("Message Sent");
      setMail("");
      setPhone("");
      setQuery("");
      setLoading(false);
    });
  };

  return (
    <div>
      <Container style={{ maxWidth: "90%" }} fluid className="mb-5">
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
              <a style={{ textDecoration: "none" }} href="/products">
                <div className={styles.btnContainer}>
                  <div className={styles.button}>
                    <span>Show Products</span>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col lg>
            <Image fluid="True" src={header_img} />
          </Col>
        </Row>
      </Container>

      {/* About Us Section */}
      <div className={styles.border} />

      <section
        style={{ marginBottom: "60px" }}
        id="about-us"
        className="aboutus-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-img-right">
                <Image
                  className={`${styles.aboutImg1}`}
                  src={about_img}
                  alt="about"
                  fluid="True"
                />
              </div>
            </div>
            <div className={`col-lg-6 ${styles.aboutUsTxtContainer}`}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className={styles.dividerRow} />
                <h2 className={styles.companyName}>Why Us</h2>
                <div className={styles.dividerRow} />
              </div>

              <h2 style={{ color: "rgb(74, 74, 95)" }}>
                Best place in India to shop for electronic components.
              </h2>
              <p style={{ color: "#808080" }}>
                Welcome to VK-ENTP! We aim to offer our customers a variety of
                the latest Electronic Components. We’ve come a long way, so we
                know exactly which direction to take when supplying you with
                high quality yet budget-friendly products. We offer all of this
                while providing excellent customer service and friendly support.
                We always keep an eye on the latest trends in electronics and
                put our customers’ wishes first. The interests of our customers
                are always top priority for us, so we hope you will enjoy our
                products as much as we enjoy making them available to you.
              </p>
              <ul className="list" style={{ color: "#808080" }}>
                <li>Optimized for out specific customer base</li>
                <li>
                  Proven value on our sites to give consumers a reason to buy
                  there instead of third-party channels
                </li>
                <li>All types of electronics componnents</li>
                <li>High availability</li>
              </ul>
            </div>
            {/* Visible only on small */}
            <div className="col-lg-6">
              <div className="section-img-right">
                <Image
                  className={`${styles.aboutImg2}`}
                  src={about_img}
                  alt="about"
                  fluid="True"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About us section ends */}

      {/* Contact Us Section */}
      <section
        style={{
          backgroundColor: "#f6f6f6",
          padding: "8%",
        }}
        id="about-us"
        className="aboutus-section"
      >
        <div id="contact" className="container">
          <div className="row">
            <div className={`col-lg-6 ${styles.aboutUsTxtContainer}`}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className={styles.dividerRow} />
                <h2 className={styles.companyName}>Contact Us</h2>
                <div className={styles.dividerRow} />
              </div>

              <h2 style={{ color: "rgb(74, 74, 95)" }}>
                For any further queries please feel free to contact us.
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                  <label htmlFor="exampleFormControlInput1">
                    Email address
                  </label>
                  <input
                    onChange={(e) => setMail(e.target.value)}
                    value={mail}
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="exampleFormControlInput1">Phone Number</label>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="exampleFormControlTextarea1">
                    Enter Query
                  </label>
                  <textarea
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter your query"
                  />
                </div>
                {loading && (
                  <div
                    className="mt-3 spinner-border text-primary"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                {!loading && (
                  <button type="submit" className="mt-3 btn btn-primary">
                    Submit
                  </button>
                )}
              </form>
            </div>

            <div className={`col-lg-6 ${styles.sectionImgRight}`}>
              <div>
                <Image src={contact_img} alt="about" fluid="True" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us Section Ends*/}

      {/* MAP SECTION */}
      <a
        id="location"
        style={{ textDecoration: "none" }}
        target="_blank"
        href={mapLocation}
      >
        <div className={styles.mapContainer}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "15px 20px",
            }}
          >
            <div className={styles.dividerRow} />
            <h2 className={styles.companyName}>Location</h2>
            <div className={styles.dividerRow} />
          </div>

          <Image fluid="True" width="100%" height="100%" src={map_img} />
        </div>
      </a>

      <Footer />
    </div>
  );
};

export default Home;
