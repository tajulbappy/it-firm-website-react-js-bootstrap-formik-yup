// @ts-nocheck
import React, { useContext } from "react";
import { ProductContext } from "../../services/ProductContext";
import { Card, Container } from "react-bootstrap";
import WhyChooseSection from "../../components/WHYCHOOSEIS/WhyChooseSection ";
import "../SERVER-NETWORK/ServerSparePartsStyles.css";
//icons
import { FaCircleChevronRight } from "react-icons/fa6";


const ServerSpareParts = (props) => {
  // console.log(props.category)
  const { serverRelatedServices } = useContext(ProductContext);
  return (
    <div className="svr-spare-page pb-5">
      {/*Header Section start */}
      <header className="height-75">{/* backgorund image */}</header>
      {/*Header Section end */}

      <Container className="my-5">
        <div className="d-flex rounded justify-content-between bg-light px-2 py-1 mb-4">
          <h4 className="display-5 pt-1" id="text-color">
            Server Spare Parts Sales
          </h4>
        </div>

        <div className="mb-5">
          <div className="pt-2 fs-5">
            <p className=" text-justify lh-2 mb-5 pb-5">
              At <span className="fw-medium">Innovative Solutions</span>, we
              provide a wide range of
              <span className="fw-medium">
                {" "}
                high-quality server spare parts
              </span>{" "}
              to meet the demands of growing IT infrastructures. Whether you're
              looking to upgrade, replace faulty components, or stock up on
              essential parts, we ensure reliable products backed by expert
              guidance and prompt delivery.
            </p>

            <div className="text-center py-2 bg-info">
              <h3 className="fw-medium text-light">
                Available Server Spare Parts
              </h3>
            </div>

            <div className="row pb-5 ">
              {serverRelatedServices.map((service) => {
                const { id, category, title, item1, item2 } = service;
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
                        </Card.Body>
                      </Card>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
              <div className="col-lg-4 d-flex g-5">
                <Card className="w-100 scale-hover-effect fs-6">
                  <Card.Body>
                    <Card.Title className="pb-4 text-info">
                      {/* <Card.Img
                        className="fluid-img p-2"
                        id="service-img"
                        src={s_Icon}
                        alt="server-img"
                      /> */}
                      <span>Why Buy from Us</span>
                    </Card.Title>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      100% Genuine & Tested Server Parts
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      Wide Compatibility with Top Brands (HP, Dell, IBM, Lenovo,
                      Cisco)
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      Bulk Supply & Corporate Discounts
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      Expert Consultation & Compatibility Checks
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      Delivery Across Bangladesh
                    </Card.Text>
                    <Card.Text>
                      <FaCircleChevronRight className="text-danger me-2" />
                      Warranty Available on Select Products
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

export default ServerSpareParts;
