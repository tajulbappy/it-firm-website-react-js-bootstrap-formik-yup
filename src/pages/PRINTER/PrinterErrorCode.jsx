// @ts-nocheck
import React, { useContext } from "react";
import WhyChooseSection from "../../components/WHYCHOOSEIS/WhyChooseSection ";
import "../PRINTER/PrinterErrorCodeStyles.css";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
//icons
import { FaPhoneVolume } from "react-icons/fa6";
import { ProductContext } from "../../services/ProductContext";


const PrinterErrorCode = () => {
  const { printerError } = useContext(ProductContext);
  console.log(printerError);

  return (
    <div className="printer-error-code-page pb-5">
      {/*Header Section start */}
      <header className="height-75">
        <Container className="h-100 d-flex flex-column align-items-center justify-content-center text-light ">
          <h1 className="text-center fw-semibold">Printer Error Code</h1>
          <p className="text-center w-75 mb-5">
            Error codes help users and technicians quickly identify issues such
            as paper jams, hardware failures, communication errors, or toner
            problems.
          </p>
        </Container>
      </header>
      {/*Header Section end */}

      <Container className="my-5 pb-5">
        <div className="bg-warning px-2 py-2 mb-4 rounded">
          <h4 className="text-uppercase fw-semibold pt-1" id="text-color">
            About Laser Printer Error Codes
          </h4>
        </div>

        <div className="mb-5">
          <div className="fs-5">
            <p className="text-justify">
              Laser printer error codes are specific numeric or alphanumeric
              signals displayed on the printer's screen or control panel to
              indicate problems or malfunctions. These codes help users and
              technicians quickly identify issues such as paper jams, hardware
              failures, communication errors, or toner problems
            </p>

            <p>
              Each printer brand—like HP, Canon, Brother, or Samsung—has its own
              set of error codes, which correspond to particular faults. Common
              codes include paper jams, fuser errors, overheating, or firmware
              faults.
            </p>
            <p>
              Understanding these error codes is crucial for efficient
              troubleshooting and minimizing downtime. Many errors can be
              resolved by following simple steps such as restarting the printer,
              clearing paper jams, or replacing consumables.
            </p>
            <p>
              For complex errors, professional repair services can diagnose and
              fix the underlying problems to restore your printer's smooth
              operation.
            </p>
          </div>

          {/* ---------------------------------------------------- */}

          {/* -------------------------------------------- */}

          <div className="row my-5">
            <div className="col-lg-12 d-flex flex-column  pt-4">
              <h5
                className="text-uppercase bg-info py-3 my-5 rounded text-center"
                id="text-color"
              >
                Available Printer Error Codes
              </h5>

              <div className="row py-3 bg-secondary bg-opacity-10">
                {printerError.map((errorItem) => {
                  const { id, errorCode, errorDesc, errorSolution } = errorItem;

                  return (
                    <div key={id} className="col-lg-4 d-flex g-4">
                      <Card className="w-100 scale-hover-effect" id="bg-color">
                        <Card.Body>
                          <Card.Title className="fs-6 fw-normal border rounded-pill p-2 text-center">
                            <span className="fw-semibold text-danger">
                              ERROR CODE :
                            </span>
                            {errorCode}
                          </Card.Title>
                          <hr />
                          <Card.Text>
                            <span className="fw-semibold">
                              Error Description :{" "}
                            </span>
                            {errorDesc}
                          </Card.Text>
                          <hr />
                          <Card.Text>
                            <span className="fw-semibold">Solutions : </span>
                            {errorSolution}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ------------------------------- */}
        </div>
      </Container>

      <WhyChooseSection />
    </div>
  );
};

export default PrinterErrorCode;
