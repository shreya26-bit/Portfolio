import React from "react";
import Navlink from "./Navlink";

const MenuOverlay = ({ links }:any) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link:any, index:any) => (
        <li key={index}>
          <Navlink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;