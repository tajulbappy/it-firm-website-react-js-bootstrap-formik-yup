import React from "react";
import WhyChooseSection from "../../components/WHYCHOOSEIS/WhyChooseSection ";
import "../PRINTER/PrinterTonerInkStyles.css";
import Table from "react-bootstrap/Table";
//icons
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegHandPointRight } from "react-icons/fa";
import { GrSupport } from "react-icons/gr";
import { FaBuysellads } from "react-icons/fa";
import { Container } from "react-bootstrap";

const PrinterTonerInk = () => {
  return (
    <div className="printer-toner-ink-page pb-5">
      {/*--------------Header Section start--------------*/}
      <header className="height-75">
        <Container className="h-100 d-flex flex-column align-items-center justify-content-center text-light ">
          <h1 className="text-center fw-semibold">Printer Toner or INK</h1>
          <p className="text-center w-75 mb-5">
            we are proud to be one of the leading providers of professional
            printer repair services in Bangladesh. With a strong reputation for
            reliability, expertise, and fast response times, we serve
            businesses, offices, schools and individuals across the country
          </p>
        </Container>
      </header>
      {/*--------------Header Section end---------------- */}

      <Container className="my-5 pb-5">
        <div className="bg-warning px-2 py-2 mb-4 rounded">
          <h4 className="text-uppercase fw-semibold pt-1" id="text-color">
            Laser Printer Toner Cartridges for Sale
          </h4>
        </div>

        <div className="mb-5 fs-5">
          <div>
            <p className=" text-justify lh-2">
              Looking for high-quality toner cartridges at affordable prices? We
              offer a wide range of{" "}
              <span className="fw-semibold">laser printer toners</span>{" "}
              compatible with major brands like{" "}
              <span className="fw-semibold">
                HP, Canon, Brother, Samsung, Ricoh, and Xerox
              </span>
              . Whether you need{" "}
              <span className="fw-semibold">
                original (OEM) or high-quality compatible toners
              </span>
              , we've got the right solution for your printing needs.
            </p>

            <p>
              Our toners deliver{" "}
              <span className="fw-semibold">
                sharp text, rich black output, and consistent performance
              </span>{" "}
              for both home and office use. Each cartridge is tested for quality
              and page yield to ensure reliable results with every print. From
              standard yield to high yield options, we have toner cartridges to
              suit your printing volume and budget.
            </p>
          </div>

          {/* ---------------------------------------------------- */}

          <div className="row mb-5">
            <div className="col-lg-6 d-flex flex-column  pt-4">
              <h5
                className="text-uppercase bg-info ps-3 py-2 rounded"
                id="text-color"
              >
                <FaBuysellads className="fs-3 mx-2" />
                Why Choose Us?
              </h5>
              <ul className="list-unstyled py-2">
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Genuine & Compatible Toners Available
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Competitive Prices with Bulk Discounts
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Guaranteed Printer Compatibility
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Friendly Customer Support
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Fast Delivery Across Bangladesh
                </li>
              </ul>
            </div>
            <div className="col-lg-6 d-flex flex-column  pt-4">
              <h5
                className="text-uppercase bg-info ps-3 py-2 rounded"
                id="text-color"
              >
                <GrSupport className="fs-2 mx-2" />
                Supported Brands:
              </h5>
              <ul className="list-unstyled py-2">
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  HP: 12A, 17A, 26A, 85A, 83A, etc.
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Canon: 325, 337, 328, 329
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Brother: TN-1000, TN-2365, TN-2480
                </li>
                <li>
                  <FaRegHandPointRight className="me-2 text-info" />
                  Samsung: MLT-D101S, MLT-D111S
                </li>
              </ul>
            </div>
            <p>
              <span className="bg-warning px-1 pb-1 rounded fs-5 fw-semibold">
                Information
              </span>
              : Order today and get your toner delivered fast! We also offer
              <span className="fw-semibold">installation support in Dhaka</span>
              .
            </p>
          </div>
        </div>

        {/* -------------Toner price list---------- */}
        <div>
          <h5
            className="text-center text-uppercase bg-info ps-3 py-2 rounded"
            id="text-color"
          >
            compatible toner cartridge price
          </h5>
          <Table striped bordered hover variant="success">
            <thead>
              <tr>
                <th className="fs-5">SL No.</th>
                <th className="text-center pb-4 fs-5">Toner Model</th>
                <th className="fs-5">Page Yield</th>
                <th className="text-center pb-4 fs-5">
                  Suitable Printer Model
                </th>
                <th className="fs-5">Price (TK)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5}>
                  <p className="p-0 m-0 text-center fw-semibold fs-5">
                    HP/CANON LASER PRINTER TONER CARTRIDGE
                  </p>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>85A/325 (CE285A/CRG325)</td>
                <td>2100</td>
                <td>
                  P1102,1102w,109w, M1130,1132,1138,1139,1212nf,1219nf,
                  M1217nfw/Lbp6000,6020,6030
                </td>
                <td>850/-</td>
              </tr>
              <tr>
                <td>2</td>
                <td>78A (CE278A)</td>
                <td>2100</td>
                <td>P1566,1567,1568,1569,1606,1606dn</td>
                <td>850/-</td>
              </tr>
              <tr>
                <td>3</td>
                <td>79A (CF279A)</td>
                <td>1000</td>
                <td>Pro M12, M12a, M12w, MFPM26, M26w, M26a</td>
                <td>850/-</td>
              </tr>
              <tr>
                <td>4</td>
                <td>88A/CC388A</td>
                <td>1500</td>
                <td>
                  HP Laser Jet P1007/ P1008/ P1106/ P1108/ Pro M1136/M1213nf/
                  M1216/ M1139MFP/ M202dw
                </td>
                <td>1,000/-</td>
              </tr>
              <tr>
                <td>5</td>
                <td>12A/303/FX-9 Q2612A</td>
                <td>2000</td>
                <td>1,010,101,510,181,020,000,000,000,000,000,000,000,000</td>
                <td>880/-</td>
              </tr>
              <tr>
                <td>6</td>
                <td>05A/80A (CE505A/CF280A)</td>
                <td>2700</td>
                <td>
                  P2030,2035,2035n,2050,2055dp,2055n,2055x 400 M401,400 M425
                </td>
                <td>1050/-</td>
              </tr>
              <tr>
                <td>7</td>
                <td>49A/308 (Q59APA/CRG308)</td>
                <td>3100</td>
                <td>
                  P2015, 2015, 2015dn, 2015x, M272nf/1320, 1160, 3390,
                  3392/LBP-3300, 3310, 3330, 3360
                </td>
                <td>1120/-</td>
              </tr>
              <tr>
                <td>8</td>
                <td>26A (CF226A)</td>
                <td>3100</td>
                <td>M402n, M402dn, m402dw, M426fdn, M426tdw</td>
                <td>1,150/-</td>
              </tr>
              <tr>
                <td>9</td>
                <td>26X (CF226X)</td>
                <td>9000</td>
                <td>M104A/M104W/M130A/mm130fn/M130fw/M130nw/ Mfp132</td>
                <td>1550/-</td>
              </tr>
              <tr>
                <td>10</td>
                <td>83A (CF283A/337/137/737)</td>
                <td>2400</td>
                <td>
                  MFP M127fs, M201dw, M225dn, M225dw, M125nw, M125fn, M127fw
                </td>
                <td>fat</td>
              </tr>
              <tr>
                <td>11</td>
                <td>44A/48A (CF244A/248A)</td>
                <td>1000</td>
                <td>Pro M15a, M15w, M16, MFPM28a, M28w, M29</td>
                <td>1,150/-</td>
              </tr>
              <tr>
                <td>12</td>
                <td>30A (CF230A) (with Chip)</td>
                <td>1700</td>
                <td>
                  HP laser Jet Pro M203d, M203dn, M203dw, M227fdn.M227sdn,
                  M227fdw
                </td>
                <td>1,150/-</td>
              </tr>
              <tr>
                <td>13</td>
                <td>32A (CF232A) Drum Unit</td>
                <td>23000</td>
                <td>
                  HP laser Jet Pro M203d, M203dn, M203dw, M227fdn.M227sdn,
                  M227fdw
                </td>
                <td>1,400/-</td>
              </tr>
              <tr>
                <td>14</td>
                <td>17A (CF217A) (with chip)</td>
                <td>1600</td>
                <td>Pro M102, M102w, MFP M130fn, M130fw</td>
                <td>1,150/-</td>
              </tr>
              <tr>
                <td>15</td>
                <td>CF276A-NO CHIP</td>
                <td>3000</td>
                <td>HP LaserJet Pro M404 & HP LaserJet Pro M428</td>
                <td>1,150/-</td>
              </tr>
              <tr>
                <td>16</td>
                <td>CF276X-NO CHIP</td>
                <td>10000</td>
                <td>HP LaserJet Pro M404 & HP LaserJet Pro M429</td>
                <td>1900/-</td>
              </tr>
              <tr>
                <td>17</td>
                <td>CF276A-With CHIP</td>
                <td>3000</td>
                <td>HP LaserJet Pro M404 & HP LaserJet Pro M428</td>
                <td>3,100/-</td>
              </tr>
              <tr>
                <td>18</td>
                <td>W1106A -With Chip</td>
                <td>1000</td>
                <td>HP Laser 107a, MFP 107W, MFP 135a, MFP137fnw</td>
                <td>1800/-</td>
              </tr>
              <tr>
                <td>19</td>
                <td>W1660A/166</td>
                <td>1500</td>
                <td>HP Laser 1008a/1008w/MFP1188a/1188w/1188nw/1188pnw</td>
                <td>1800/-</td>
              </tr>
              <tr>
                <td>20</td>
                <td>W1107XL NO Chip</td>
                <td>2000</td>
                <td>HP Laser 107a, MFP 107W, MFP 135a, MFP137fnw</td>
                <td>1150/-</td>
              </tr>
              <tr>
                <td>21</td>
                <td>W1107XL -With Chip</td>
                <td>2000</td>
                <td>HP Laser 107a, MFP 107W, MFP 135a, MFP137fnw</td>
                <td>1700/-</td>
              </tr>
              <tr>
                <td>22</td>
                <td>55A/324 (CE255A/CRG324)</td>
                <td>6000</td>
                <td>
                  P3015,3015d,3015dn, Pro MFP M521dn,
                  P3010/LBP-6750dn,6780,6780dn
                </td>
                <td>1750/-</td>
              </tr>
              <tr>
                <td>23</td>
                <td>87A (CF287A)</td>
                <td>10000</td>
                <td>
                  MFP M501dn, M501n, M506dn, M506n, M506dh, M506x, M527c, M5257f
                </td>
                <td>1750/-</td>
              </tr>
              <tr>
                <td>24</td>
                <td>CF289A/056L</td>
                <td>5000</td>
                <td>
                  Canon I-Sensys LBP320 Series LBP325dn LBP325x, I-Sensys MF540
                  Series MF542x
                </td>
                <td>1700/-</td>
              </tr>
              <tr>
                <td>25</td>
                <td>CF289X/056L</td>
                <td>10000</td>
                <td>
                  Canon I-Sensys LBP320 Series LBP325dn LBP325x, I-Sensys MF540
                  Series MF542x
                </td>
                <td>2,200/-</td>
              </tr>
              <tr>
                <td>26</td>
                <td>W1510A - NO CHIP</td>
                <td>3050</td>
                <td>HP LaserJet Pro 4003dw/4003dn/MFP 4103dw/4103fdn</td>
                <td>1,700/-</td>
              </tr>
              <tr>
                <td>27</td>
                <td>W1510A - WITH CHIP</td>
                <td>3050</td>
                <td>HP LaserJet Pro 4003dw/4003dn/MFP 4103dw/4103fdn</td>
                <td>4,700/-</td>
              </tr>
              <tr>
                <td>28</td>
                <td>W1360A - NO CHIP</td>
                <td>1150</td>
                <td>
                  HP LaserJet M211d/M211dw/MFP M236d/M236dw/M236sdn/M236sdw
                </td>
                <td>1400/-</td>
              </tr>
              <tr>
                <td>29</td>
                <td>CF219A DRUM UNIT</td>
                <td>12000</td>
                <td>HP LaserJet Pro M102w/M104a/M102a/MFP M132/M130fw</td>
                <td>1400/-</td>
              </tr>
              <tr>
                <td>30</td>
                <td>Q7551A</td>
                <td>6500</td>
                <td>
                  HP Laser Jet
                  P3005/P3005d/P3005n/P3005dn/P3005x/M3027MFP/M3027xMFP/M3035MFP
                </td>
                <td>2,000/-</td>
              </tr>
              <tr>
                <td>31</td>
                <td>CF281A</td>
                <td>10500</td>
                <td>
                  HP LaserJet M630z/M630f/M630dn/M604/M605/10500/M606dn/M606X
                </td>
                <td>2900/-</td>
              </tr>
              <tr>
                <td>32</td>
                <td>Q5942A</td>
                <td>10000</td>
                <td>
                  HP 4240/4250/4250dtn/4250n/ 4250tn,4350/4350dn/4350/4350tn/
                  4350dtnsl
                </td>
                <td>2900/-</td>
              </tr>
              <tr>
                <td>33</td>
                <td>CE390A/CC364A (Universal)</td>
                <td>10000</td>
                <td>
                  P4014/P4014/P4014dn/P4015/P4015/P4015tn/4015dn/P4015x/P4515/P4515/P4515tr/P4515x
                </td>
                <td>2900/-</td>
              </tr>
              <tr>
                <td>34</td>
                <td>CF256X</td>
                <td>11400</td>
                <td>HP LaserJet MFP M436nda/M436n</td>
                <td>2600/-</td>
              </tr>
              <tr>
                <td>35</td>
                <td>CZ192A/93A</td>
                <td>12000</td>
                <td>HP LaserJet Pro M435/M701/M706</td>
                <td>3,000/-</td>
              </tr>
              <tr>
                <td>36</td>
                <td>CRG333</td>
                <td>10000</td>
                <td>10000</td>
                <td>3,000/-</td>
              </tr>
              <tr>
                <td colSpan={5}>
                  <p className="p-0 m-0 text-center fw-semibold fs-5">
                    BROTHER LASER PRINTER TONER CARTRIDGE
                  </p>
                </td>
              </tr>

              <tr>
                <td>37</td>
                <td>TN-1000</td>
                <td>1000</td>
                <td>HL-1110,1210, DCP-1510, MFC-1810,1815</td>
                <td>1,000/-</td>
              </tr>
              <tr>
                <td>38</td>
                <td>TN-2320/2355/2365/660</td>
                <td>2600</td>
                <td>
                  HL-L2365DW, HL-L2360DN, HL-L2340DW, HL-L2300D, DCP-L2540DN,
                  DCP-L2500D
                </td>
                <td>1,000/-</td>
              </tr>
              <tr>
                <td>39</td>
                <td>TN-2320/2355(Drum Unit)</td>
                <td>12000</td>
                <td>
                  HL-L2365DW, HL-L2360DN, HL-L2340DW, HL-L2300D, DCP-L2540DN,
                  DCP-L2500D
                </td>
                <td>1,450/-</td>
              </tr>
              <tr>
                <td>40</td>
                <td>TN-2455</td>
                <td>3000</td>
                <td>
                  Brother
                  DCP-L2535D/L2550DW/HL-L2335D/L2370DN/L2375DW/MFC-L2715DW/L2750DW
                </td>
                <td>1,200/-</td>
              </tr>
              <tr>
                <td>41</td>
                <td>DR820/DR3405/DR3455 Drum</td>
                <td>30000</td>
                <td>
                  Brother DCP-L5500DN/L5600DN/L5650DN,
                  L6200DW/L6200DWT/L6300DW/L6400DW;
                </td>
                <td>1,700/-</td>
              </tr>
              <tr>
                <td>42</td>
                <td>TN-850/TN-3470</td>
                <td>8000</td>
                <td>
                  HL-L5200DWLT, HL-L5200DWT, HL-L6200DW, HL-L6200DWT,
                  HL-L6250DNHL L6200DW
                </td>
                <td>1,500/-</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>

      <WhyChooseSection />
    </div>
  );
};

export default PrinterTonerInk;
