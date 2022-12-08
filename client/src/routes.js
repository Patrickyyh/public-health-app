import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import TableList from './components/TableList';
// import Maps from "./components/Maps";
import Maps from "./components/GoogleMaps/Map.jsx"

const dashboardRoutes = [

    {
      id : 1,
      path: "/dashboard",
      name: "Dashboard",
      icon: "nc-icon nc-chart-pie-35",
      component: Dashboard,

    },
    {
      id: 2,
      path: "/profile",
      name: "User Profile",
      icon: "nc-icon nc-circle-09",
      component: Profile
    },

    {
      id : 3,
      path: "/maps",
      name: "Maps",
      icon: "nc-icon nc-pin-3",
      component: Maps

    },
    {
      id : 3,
      path: "/surveys",
      name: "Surveys",
      icon :"nc-icon nc-chart-pie-35",
      component:TableList
    },

  ];

  export default dashboardRoutes;
