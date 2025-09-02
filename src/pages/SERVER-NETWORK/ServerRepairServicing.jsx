import React, { useContext } from "react";
import { ProductContext } from "../../services/ProductContext";
import { Card, Container } from "react-bootstrap";
import WhyChooseSection from "../../components/WHYCHOOSEIS/WhyChooseSection ";
import "../SERVER-NETWORK/ServerRepairServicingStyles.css";
import { FaCircleChevronRight } from "react-icons/fa6";

const ServerRepairServicing = (props) => {
  // console.log(props.category)
  // @ts-ignore
  const { serverRelatedServices } = useContext(ProductContext);
  return (
    <div className="svr-repair-page pb-5">
      {/*Header Section start */}
      <header className="height-75">{/* backgorund image */}</header>
      {/*Header Section end */}

      <Container className="my-5">
        <div className="d-flex rounded justify-content-between bg-light px-2 py-1 mb-4">
          <h4 className="display-5 pt-1" id="text-color">
            Server Repair & Maintenance
          </h4>
        </div>

        <div className="mb-5">
          <div className="pt-2 fs-5">
            <p className=" text-justify lh-2 mb-5 pb-5">
              At Innovative Solutions, we offer comprehensive Server Repair &
              Maintenance services designed to ensure the continuous
              performance, security, and reliability of your server
              infrastructure. Whether you're running a small business server or
              managing complex enterprise systems, our team of certified
              technicians is here to keep your servers operating at peak
              efficiency.
            </p>

            <div className="text-center py-2 bg-info">
              <h3 className="fw-medium text-light">Services We Offer</h3>
            </div>

            <div className="row pb-5 ">
              {serverRelatedServices.map((service) => {
                const { id, category, title, item1, item2, item3, item4 } =
                  service;
                if (category === props.category) {
                  return (
                    <div key={id} className="col-lg-4 d-flex g-5">
                      <Card className="w-100 scale-hover-effect fs-6">
                        <Card.Body>
                          <Card.Title className="pb-4 text-info">
                            {title}
                          </Card.Title>
                          <Card.Text>
                            <FaCircleChevronRight className="text-danger me-2" />
                            {item1}
                          </Card.Text>
                          <Card.Text>
                            <FaCircleChevronRight className="text-danger me-2" />
                            {item2}
                          </Card.Text>
                          <Card.Text>
                            <FaCircleChevronRight className="text-danger me-2" />
                            {item3}
                          </Card.Text>
                          <Card.Text>
                            <FaCircleChevronRight className="text-danger me-2" />
                            {item4}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </Container>

      <WhyChooseSection />
    </div>
  );
};

export default ServerRepairServicing;
