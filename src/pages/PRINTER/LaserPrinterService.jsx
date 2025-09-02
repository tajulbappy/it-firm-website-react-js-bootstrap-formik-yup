import React from "react";
import "../PRINTER/LaserPrinterServiceStyles.css";
import WhyChooseSection from "../../components/WHYCHOOSEIS/WhyChooseSection ";
import { Container } from "react-bootstrap";
import { FaRegHandPointRight } from "react-icons/fa";

const LaserPrinterService = () => {
  return (
    <div className="laser-printer-service-page pb-5">
      {/*Header Section start */}
      <header className="height-75">
        <Container className="h-100 d-flex flex-column align-items-center justify-content-center text-light ">
          <h1 className="text-center fw-semibold">
            Laser Printer Repair & Servicing
          </h1>
          <p className="text-center w-75 mb-5">
            We are proud to be one of the leading providers of professional
            printer repair services in Bangladesh.
          </p>
        </Container>
      </header>
      {/*Header Section end */}

      <Container className="my-5">
        <div className="bg-warning px-2 py-2 mb-4 rounded">
          <h4 className="text-uppercase fw-semibold pt-1" id="text-color">
            Laser Printer Repair & Servicing Approach
          </h4>
        </div>

        <div className="mb-5">
          <div className="pt-2 fs-5">
            <p className=" text-justify lh-2">
              At{" "}
              <span className="fw-semibold" id="text-color">
                INNOVATIVE SOLUTIONS
              </span>{" "}
              we are proud to be one of the leading providers of{" "}
              <span className="fw-semibold">
                professional printer repair services in Bangladesh
              </span>
              . With a strong reputation for reliability, expertise and fast
              response times, we serve businesses, offices, schools and
              individuals across the country—ensuring their printers stay in top
              working condition.
            </p>
            <p className=" text-justify lh-2">
              Our team have Experts technician.They are diagnosing and repairing
              all major printer brands, including HP, Canon, Epson, Brother,
              Samsung, and more. Whether it's a laser printer, inkjet, dot
              matrix, or multifunction device, we have the tools and knowledge
              to fix it quickly and efficiently.
            </p>

            <div className="mt-5">
              <h5
                className="text-uppercase bg-info w-50 ps-3 py-2 rounded"
                id="text-color"
              >
                The Services we offer
              </h5>
              <ul className="list-unstyled pt-2">
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  On-Site and In-Shop Repairs
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Printer Maintenance and Tune-ups
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Error Code Troubleshooting
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Paper Jam and Ink/Toner Issues
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Part Replacement and Upgrades
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Network and Connectivity Solutions
                </li>
              </ul>
              <p className="pt-4">
                We understand how essential printers are to your workflow—so we
                focus on{" "}
                <span className="fw-semibold">
                  quick turnaround times, affordable pricing and Batter
                  replacement parts
                </span>
                . Our goal is to reduce downtime and get your equipment back to
                peak performance as soon as possible.
              </p>
            </div>
            <div className="mt-5">
              <h5
                className="text-uppercase bg-info w-50 ps-3 py-2 rounded"
                id="text-color"
              >
                Why Choose Us?
              </h5>
              <ul className="list-unstyled py-2">
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Trusted by businesses across Bangladesh
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Friendly, skilled technicians
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Transparent pricing with no hidden fees
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Emergency and same-day repair options
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Service coverage in Dhaka, Chittagong, Sylhet, Rajshahi,
                  Khulna and beyond
                </li>
              </ul>
              <p className="pt-4">
                From small home office printers to large enterprise systems,
                <span className="fw-semibold">we've got you covered</span>
                .Whether you need a one-time repair or ongoing service support,{" "}
                <span className="fw-semibold" id="text-color">
                  INNOVATIVE SOLUTIONS
                </span>{" "}
                is your trusted partner for printer repair in Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <WhyChooseSection />
    </div>
  );
};

export default LaserPrinterService;
