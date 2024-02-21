import { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import TaxiAlertOutlinedIcon from "@mui/icons-material/TaxiAlertOutlined";
import SendIcon from "@mui/icons-material/Send";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from '@mui/icons-material/Menu';

const Sidbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/intern-assignment",
      name: "Dashboard",
      icon: <HomeOutlinedIcon />,
    },
    {
      path: "/about",
      name: "Payout",
      icon: <ArrowOutwardOutlinedIcon />,
    },
    {
      path: "/analytics",
      name: "Account Statement",
      icon: <ArticleOutlinedIcon />,
    },
    {
      path: "/comment",
      name: "Contacts",
      icon: <PersonOutlinedIcon />,
    },
    {
      path: "/product",
      name: "Tax Payments",
      icon: <TaxiAlertOutlinedIcon />,
    },
    {
      path: "/productList",
      name: "Payout Link",
      icon: <SendIcon />,
    },
    {
      path: "/productList",
      name: "Payrol",
      icon: <ShoppingBasketIcon />,
    },
    {
      path: "/productList",
      name: "Report",
      icon: <AssessmentIcon />,
    },
    {
      path: "/productList",
      name: "Payout Link",
      icon: <SendIcon />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar cursor-pointer">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            <img src={"https://w7.pngwing.com/pngs/93/992/png-transparent-razorpay-logo-tech-companies.png"} alt="" className="w-[620PX] h-5"/>
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            { isOpen === true ? <ClearIcon onClick={toggle}/> : <MenuIcon onClick={toggle}/>}
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidbar;
