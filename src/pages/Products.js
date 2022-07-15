import React, { useState, useEffect } from "react";
import styles from "./products.module.scss";

import { Button, Container, Image, Form, InputGroup } from "react-bootstrap";

const data = [
  {
    src: require("../assets/box capicitor.jpeg"),
    name: "Box capacitors",
    desc: "GDHY, EPCOS SAMWHA DEIKY, DESAI",
  },
  {
    src: require("../assets/bridge rectifier.jpeg"),
    name: "Bridge rectifier",
    desc: "NANJING, TK, MIC GOODARK",
  },
  { src: require("../assets/buzzer.jpeg"), name: "buzzer", desc: "HXD" },
  {
    src: require("../assets/capicitor.jpeg"),
    name: "Capicitors 1000-8000 hours",
    desc: "JWCO, KELTRON, SAMWHA",
  },
  {
    src: require("../assets/connector.jpeg"),
    name: "Connectors",
    desc: "BERG STRIP",
  },

  {
    src: require("../assets/crystal.jpeg"),
    name: "Crystal",
    desc: "YIC CRYSTAL, KDS",
  },

  {
    src: require("../assets/dial and pot.jpeg"),
    name: "Dial and pot",
    desc: "BOURNS",
  },

  {
    src: require("../assets/diode cerimic capicitor.jpeg"),
    name: "DISC ceramic capacitor",
    desc: "CEDICOM, ZONKAS, HEL, JNC, TC, AEC",
  },

  {
    src: require("../assets/diodes.jpeg"),
    name: "Diodes",
    desc: "NANJING INTERNATIONAL GROUP CO. LTD., MIC, GOODARK, VISHAY",
  },
  {
    src: require("../assets/dip and smd switch.jpeg"),
    name: "Dip and smd switch",
    desc: "CWT, IMPORTED",
  },
  {
    src: require("../assets/electronic capicitor pg grade.jpeg"),
    name: "Electronic capacitor pg grade",
    desc: "JWCO, KELTRON, SAMWHA",
  },
  {
    src: require("../assets/ic dip.jpeg"),
    name: "IC dip",
    desc: "MICRO CONTROLLER MICRO PROCESSOR, RAM, EEPROM, RTC, OPAM, LOGIC IC, DAC / ADC etc.",
  },
  {
    src: require("../assets/ic sockets.jpeg"),
    name: "IC sockets",
    desc: "CONFLY, IMPORTED",
  },
  {
    src: require("../assets/lcd display.jpeg"),
    name: "LCD display",
    desc: "JHD, AV",
  },
  {
    src: require("../assets/Li-ion Battery.jpeg"),
    name: "Li-ion Battery",
    desc: "IMPORTED",
  },
  {
    src: require("../assets/metallic polyster capictor.jpeg"),
    name: "Metalic polyster capacitor",
    desc: "GHDY, WEIDY, SAMWHA, DEIKY, DESAI",
  },
  {
    src: require("../assets/mosfet.jpeg"),
    name: "Mosfets",
    desc: "WXDH, HK SEMI, ST, INFINEON, FAIRCHILD, TOSHIBA, WINSEMI",
  },
  {
    src: require("../assets/MOV PTC NTC.jpeg"),
    name: "MOV PTC NTC",
    desc: "ZOV, HEL, EPCOS, SAMWHA",
  },
  {
    src: require("../assets/network resistor.jpeg"),
    name: "Network resistors",
    desc: "FENGHUA, IMPORTED",
  },
  {
    src: require("../assets/regulator to 220 to 99.jpeg"),
    name: "Regulator to 220 to 99",
    desc: "WXDH, IK SEMI ST, FSC, MICREL etc.",
  },
  {
    src: require("../assets/resistor.jpeg"),
    name: "Resistors",
    desc: "SUPERCOM, WATTS, THAKOR",
  },
  {
    src: require("../assets/scr module.jpeg"),
    name: "SCR module",
    desc: "IXYS, FUJI, SEMIKRON, INFINEON, MITSUBISHI",
  },
  {
    src: require("../assets/igbt.jpeg"),
    name: "IGBT",
    desc: "SEMIKRON, INFINEON, ST, etc.",
  },
  {
    src: require("../assets/smd ics.jpeg"),
    name: "SMD ICS",
    desc: "MICRO CONTROLLER MICRO PROCESSOR, RAM, EEPROM, RTC, OPAM, LOGIC IC, DAC / ADC etc.",
  },
  {
    src: require("../assets/smd registor chip resistor.jpeg"),
    name: "SMD registor chip capacitors",
    desc: "YAGEO, ROYALOHM, WALSIN",
  },
  {
    src: require("../assets/tactile switch.jpeg"),
    name: "Tactile switch",
    desc: "IMPORTED",
  },

  {
    src: require("../assets/tantalum capicitor.jpeg"),
    name: "Tantalum Capacitor",
    desc: "AVX, GUJARAT POLY, AEC, VISHAY",
  },

  {
    src: require("../assets/transistor.jpeg"),
    name: "Transistors",
    desc: "ST, FAIRCHILD, TEXAS, CDIL, WXDH, NANJING",
  },

  {
    src: require("../assets/Trimpot.jpeg"),
    name: "Trimpot",
    desc: "BOURNS, BI TECHNOLOGIES",
  },

  {
    src: require("../assets/tvs diode.jpeg"),
    name: "TVS diode",
    desc: "NANJING, VISHAY, LITTLEFUSE, DIODES INC",
  },
];

const Products = (props) => {
  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let txt = search.toLowerCase();
    let filteredData = data.filter(function (item) {
      return (
        item.name.toLowerCase().includes(txt) ||
        item.desc.toLowerCase().includes(txt)
      );
    });

    setFilteredData(filteredData);
  }, [search]);

  return (
    <div>
      <Container
        fluid
        style={{
          minHeight: "calc(100vh - 400px)",
          background: "#292828",
          paddingTop: "30px",
        }}
      >
        <div className="row" style={{ width: "90%", marginLeft: "5%" }}>
          <div className="col-lg-6">
            <h2 style={{ marginBottom: "-4vw", color: "#fff" }}>
              Products we offer
            </h2>
          </div>

          <div className={`col-lg-6 ${styles.searchContainer}`}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">Search</InputGroup.Text>
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </InputGroup>
          </div>
        </div>

        <div className={styles.container}>
          {filteredData.map((component) => (
            <div key={component.name} className={styles.productContainer}>
              <h5>{component.name}</h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Image width={"150px"} fluid="True" src={component.src} />
              </div>
              <p
                style={{
                  textAlignLast: "center",
                  color: "red",
                }}
              >
                {component.desc}
              </p>

              <div style={{ justifyContent: "center", display: "flex" }}>
                <Button
                  onClick={() => props.contactUsRef.current.scrollIntoView()}
                  size="md"
                  variant="primary"
                >
                  Contact us for details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
