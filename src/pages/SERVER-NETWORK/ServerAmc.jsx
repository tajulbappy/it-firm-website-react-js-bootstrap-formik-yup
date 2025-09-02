
import React, { useContext } from "react";
import { ProductContext } from "../../services/ProductContext";
import { Card, Container } from "react-bootstrap";
import WhyChooseSection from "../../components/WHYCHOOSEIS/WhyChooseSection ";
import "../SERVER-NETWORK/ServerAmcStyles.css";
import { FaCircleChevronRight } from "react-icons/fa6";

const ServerAmc = (props) => {
  // console.log(props.category)
  // @ts-ignore
  const { serverRelatedServices } = useContext(ProductContext);
  // console.log(serverRelatedServices);
  return (
    <div className="svr-amc-page pb-5" id="contact-position">
      {/*Header Section start */}
      <header className="height-75 position-relative">
        <div id="position-item"></div>
      </header>
      {/*Header Section end */}

      <Container className="my-5">
        <div className="d-flex rounded justify-content-between bg-light px-2 py-1 mb-4">
          <h4 className="display-5 pt-1" id="text-color">
            Server Maintenance Yearly Contract
          </h4>
        </div>

        <div className="mb-5">
          <div className="pt-2 fs-5">
            <p className=" text-justify lh-2 mb-5 pb-5">
              Our Server Maintenance Yearly Contract offers complete care for
              your servers—ensuring maximum uptime, robust security, and ongoing
              performance tuning. With this contract, Innovative Solutions
              becomes your dedicated partner in keeping your critical IT
              infrastructure running seamlessly throughout the year.
            </p>

            <div className="text-center py-2 bg-info">
              <h3 className="fw-semibold text-light">
                What's Included in the Annual Maintenance Contract (AMC)
              </h3>
            </div>

            <div className="row pb-5 ">
              {serverRelatedServices.map((service) => {
                const {
                  id,

                  category,
                  title,
                  item1,
                  item2,
                  item3,
                  item4,
                } = service;
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

export default ServerAmc;
