import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">Dev Portfolio</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/000000/external-app-essentials-tanah-basah-basic-outline-tanah-basah-2.png" />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
