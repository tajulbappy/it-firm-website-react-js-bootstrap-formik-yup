import React from "react";
import { Card, Container } from "react-bootstrap";
import WhyChooseSection from "../../components/WHYCHOOSEIS/WhyChooseSection ";
import "../POWER-BACKUP/OnlineOfflineUpsStyles.css";
//icons
import { FaCircleChevronRight } from "react-icons/fa6";

const OnlineOfflineUps = () => {
  return (
    <div className="ups-onoff-page pb-5">
      {/*Header Section start */}
      <header className="height-75">
        <Container className="h-100 d-flex flex-column align-items-center justify-content-center text-light ">
          <h1 className="text-center fw-semibold">Online - Offline UPS</h1>
          <p className="text-center w-75 mb-5">
            We offer smart and scalable backup systems to protect your equipment
            and ensure business continuity.
          </p>
        </Container>
      </header>
      {/*Header Section end */}

      <Container className="my-5">
        <div className="d-flex rounded justify-content-between bg-light px-2 py-1 mb-4">
          <h4 className="display-5 pt-1" id="text-color">
            Power & Backup Solutions (Online-Offline UPS)
          </h4>
        </div>

        <div className="mb-5">
          <div className="pt-2 fs-5">
            <p className=" text-justify lh-2">
              We specialize in providing reliable{" "}
              <span className="fw-semibold">Power & Backup Solutions</span>,
              including both Online and Offline UPS (Uninterruptible Power
              Supply) systems. In today's digital world, uninterrupted power is
              essential for smooth operations. We offer smart and scalable
              backup systems to protect your equipment and ensure business
              continuity.
            </p>

            {/* <div className="text-center py-5 bg-light">
              <p className="display-6">Our Power & Backup Services Include</p>
            </div> */}
            <div className="bg-warning px-2 py-2 mb-4 rounded">
              <h3
                className="text-capitalize fw-medium pt-1 text-center"
                id="text-color"
              >
                Our Power & Backup Services Include
              </h3>
            </div>

            <div className="row pb-5 ">
              <div className="col-lg-4 d-flex g-4">
                <Card className="w-100 scale-hover-effect fs-6">
                  <Card.Body>
                    <Card.Title className="pb-4 pt-0 mt-0 text-info fs-5">
                      UPS System Supply & Installation
                    </Card.Title>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      <span className="fw-medium">Online UPS:</span> Ideal for
                      sensitive IT equipment, servers, and data centers.
                      Delivers clean, constant power with zero transfer time.
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      <span className="fw-medium">Offline UPS:</span> Ideal for
                      sensitive IT equipment, servers, and data centers.
                      Delivers clean, constant power with zero transfer time.
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      <span className="fw-medium">
                        Hybrid & Line-Interactive UPS:{" "}
                      </span>{" "}
                      Advanced models for dynamic power environments.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 d-flex g-4">
                <Card className="w-100 scale-hover-effect fs-6">
                  <Card.Body>
                    <Card.Title className="pb-4 pt-0 mt-0 text-info fs-5">
                      Load Assessment & Backup Design
                    </Card.Title>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      We analyze your equipment and power usage to recommend the
                      right UPS capacity and configuration tailored to your
                      environment.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 d-flex g-4">
                <Card className="w-100 scale-hover-effect fs-6">
                  <Card.Body>
                    <Card.Title className="pb-4 pt-0 mt-0 text-start text-info fs-5">
                      Battery Backup Solutions
                    </Card.Title>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      High-efficiency, long-lasting batteries
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      Safe installation and battery bank configuration
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      Maintenance and replacement services
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 d-flex g-4">
                <Card className="w-100 scale-hover-effect fs-6">
                  <Card.Body>
                    <Card.Title className="pb-4 pt-0 mt-0 text-start text-info fs-5">
                      Preventive Maintenance & Monitoring
                    </Card.Title>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />{" "}
                      Regular health check-ups for UPS systems
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      24/7 performance monitoring
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      Fast support in case of emergency breakdowns
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 d-flex g-4">
                <Card className="w-100 scale-hover-effect fs-6">
                  <Card.Body>
                    <Card.Title className="pb-4 pt-0 mt-0 text-start text-info fs-5">
                      Why Choose Us?
                    </Card.Title>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />{" "}
                      Trusted supplier of branded UPS systems (APC, Power Guard,
                      Emerson, etc.)
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      Certified electricians and engineers
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      Custom solutions for every industry and power load
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      Reliable after-sales service and support
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 d-flex g-4">
                <Card className="w-100 scale-hover-effect fs-6">
                  <Card.Body>
                    <Card.Title className="pb-4 pt-0 mt-0 text-start text-info fs-5">
                      Applications We Serve
                    </Card.Title>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" /> Data
                      Centers & IT Rooms
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      Corporate Offices
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      Hospitals & Clinics
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      Educational Institutions
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      Industrial & Commercial Facilities
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <WhyChooseSection />
    </div>
  );
};

export default OnlineOfflineUps;
