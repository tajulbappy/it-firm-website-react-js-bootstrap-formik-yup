import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//pages
import Home from "./pages/HOME/Home";
import Contact from "./pages/CONTACT/Contact";
import Solution from "./pages/SOLUTION/Solution";
import Product from "./pages/PRODUCT/Product";
import About from "./pages/ABOUT/About";
import SafetyServices from "./pages/SAFETY/SafetyServices";
import Software from "./pages/SOFTWARE/Software";
import LaserPrinterService from "./pages/PRINTER/LaserPrinterService";
import LaserPrinterParts from "./pages/PRINTER/LaserPrinterParts";
import UsedPrinter from "./pages/PRINTER/UsedPrinter";
import MaintenanceKitRepair from "./pages/PRINTER/MaintenanceKitRepair";
import PrinterTonerInk from "./pages/PRINTER/PrinterTonerInk";
import PrinterErrorCode from "./pages/PRINTER/PrinterErrorCode";
import ServerRepairServicing from "./pages/SERVER-NETWORK/ServerRepairServicing";
import ServerSpareParts from "./pages/SERVER-NETWORK/ServerSpareParts";
import UsedServerSell from "./pages/SERVER-NETWORK/UsedServerSell";
import ServerAmc from "./pages/SERVER-NETWORK/ServerAmc";
import OnlineOfflineUps from "./pages/POWER-BACKUP/OnlineOfflineUps";
import WebDev from "./pages/WEBDEV/WebDev";
import Blog from "./pages/BLOG/Blog";
import NavbarComponent from "./components/NAVBAR/Navbar";
import FooterComponent from "./components/FOOTER/FooterComponent";

const App = () => {
  return (
    <>
      <NavbarComponent />

      {/* ----------Page Routing start------------ */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/laserprinterservice" element={<LaserPrinterService />} />
        <Route path="/laserprinterparts" element={<LaserPrinterParts />} />
        <Route path="/usedprinter" element={<UsedPrinter />} />
        <Route path="/mkitrepair" element={<MaintenanceKitRepair />} />
        <Route path="/printertonerink" element={<PrinterTonerInk />} />
        <Route path="/printererrorcode" element={<PrinterErrorCode />} />
        <Route
          path="/svr-repair"
          element={<ServerRepairServicing category="svr-repair" />}
        />
        <Route
          path="/svr-parts"
          element={<ServerSpareParts category="svr-parts" />}
        />
        <Route
          path="/used-server"
          element={<UsedServerSell category="used-server" />}
        />
        <Route path="/svr-amc" element={<ServerAmc category="svr-amc" />} />
        <Route path="/ups-onoff" element={<OnlineOfflineUps />} />

        <Route path="/software" element={<Software />} />
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/safety" element={<SafetyServices />} />

        <Route path="/product/:productId" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* ----------Page Routing end------------ */}

      <FooterComponent />
      <ToastContainer />
    </>
  );
};

export default App;
