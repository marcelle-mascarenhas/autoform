import { NavLink } from "react-router-dom";
import { FaWpforms, FaBars } from "react-icons/fa";
import { BiScan, BiEdit, BiBarChartSquare, BiLogOut } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import logo from "../../assets/logo.png";
import "./SideBar.css";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <MdOutlineDashboardCustomize size="1.4em" />,
  },
  {
    path: "/register",
    name: "Register",
    icon: <BiEdit size="1.4em" />,
    subRoutes: [
      {
        path: "register/dimensions",
        name: "Dimensions",
      },
      {
        path: "register/attributes",
        name: "Attributes",

      },
      {
        path: "register/questions",
        name: "Questions",
      },
    ],
  },
  {
    path: "/tdd",
    name: "Tdd",
    icon: <BiScan size="1.4em" />,

  },
  {
    path: "/forms",
    name: "Forms",
    icon: <FaWpforms size="1.4em" />,
  },
  {
    path: "/reports",
    name: "Reports",
    icon: <BiBarChartSquare size="1.4em" />,
  },
  {
    path: "/logout",
    name: "Logout",
    icon: < BiLogOut size="1.4em" />,
  }
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">

            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  <div className="logo"><img src={logo} alt="logo" /></div>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>

          </div>


          <section className="routes">

            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />

                );

              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >

                        {route.name}

                      </motion.div>
                    )}

                  </AnimatePresence>

                </NavLink>
              );

            })}
          </section>
        </motion.div>


        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
