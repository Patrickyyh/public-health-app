import React, { Component } from "react";
import { useLocation, Route, Routes} from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import sidebarImage from '../assets/img/sidebar-2.jpg'
import Sidebar from "../components/Sidebar";
import routes from '../routes.js'

import MapSection from '../components/GoogleMaps/Map.jsx'
import Profile from "../components/Profile";
import Dashboard from "../components/Dashboard";
import TableList from "../components/TableList";


function Admin() {

    const [image, setImage] = React.useState(sidebarImage);
    const [color, setColor] = React.useState("black");
    const [hasImage, setHasImage] = React.useState(true);
    const location = useLocation();
    const mainPanel = React.useRef(null);

    React.useEffect(() => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      mainPanel.current.scrollTop = 0;
      if (
        window.innerWidth < 993 &&
        document.documentElement.className.indexOf("nav-open") !== -1
      ) {
        document.documentElement.classList.toggle("nav-open");
        var element = document.getElementById("bodyClick");
        element.parentNode.removeChild(element);
      }
    }, [location]);
    return (
      <>
        <div className="wrapper">
          <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
          <div className="main-panel" ref={mainPanel}>
            <AdminNavbar />
            <div className="content">
                <Routes>
                <Route path = "dashboard" element  = {<Dashboard />}/>
                <Route path = "profile" element  = {<Profile />}/>
                <Route path = "surveys" element = {<TableList /> }/>
                <Route path = "/maps"    element = { <MapSection/>}/>
                </Routes>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
        {/* <FixedPlugin
          hasImage={hasImage}
          setHasImage={() => setHasImage(!hasImage)}
          color={color}
          setColor={(color) => setColor(color)}
          image={image}
          setImage={(image) => setImage(image)}
        /> */}
      </>
    );
  }

  export default Admin;
