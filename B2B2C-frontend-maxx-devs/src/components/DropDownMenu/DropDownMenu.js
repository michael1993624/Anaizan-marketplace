import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./DropDownMenu.scss";

function DropDownMenu({ config, submenu }) {
  // const getMenuItemTitle = (menuItem, index, depthLevel) => {
  //   return menuItem.title;
  // };

  // let options = [];
  // let testConfig = [];

  // const getMenuItem = (menuItem, depthLevel, index) => {
  //   let title = getMenuItemTitle(menuItem, index, depthLevel);

  //   testConfig = menuItem.submenu;
  //   if (menuItem.submenu && menuItem.submenu.length > 0) {
  //     submenu = true;

  //     return (
  //       <li>
  //         {title}
  //         {/* <DropdownMenu config={menuItem.submenu} submenu={true} /> */}
  //       </li>
  //     );
  //   } else {
  //     return <li>{title}</li>;
  //   }
  // };

  // testConfig = config.map((item, index) => {
  //   options.push(getMenuItem(item, 0, index));
  // });

  const menuList = [
    {
      label: "Apparel | Accessories",
      submenu: [
        {
          label: "Apparel",
          menuItems: [
            { item: "Agricultural Machinery & Equipment" },
            { item: "Agricultural Machinery & Equipment" },
            { item: "Agricultural Machinery & Equipment" },
          ],
        },
        { label: "Accessories", menuItems: [{ item: "Agricultural Machinery & Equipment" }] },
      ],
    },
    { 
      label: "Beauty | Personal Care",
      submenu: [
        {
          label: "Beauty",
          menuItems: [
            { item: "Machinery & Equipment" },
            { item: "Agricultural Machinery & Equipments" },
            { item: "Agricultural Machinery & Equipment" },
          ],
        },
        { label: "Personnal Care", menuItems: [{ item: "Agricultural Machinery & Equipment" }] },
      ],
    },
    { label: "Consumer Electronics" },
    { label: "Construction | Real Estate" },
    { label: "Fashion Collection | Accessories" },
    { label: "Sports | Entertainment" },
    { label: "Home | Garden" },
    { label: "Health | Medical" },
    { label: "Vehicles | Accessories" },
    { label: "Machinery" },
    { label: "Agriculture" },
    { label: "Food & Beverage" },
  ];

  return (
    <>
      <ul className="menu-panel">
        {menuList.map(({ label, submenu }, index) => {
          return (
            <li key={index}>
              {label} <FontAwesomeIcon icon="chevron-right" />
              {submenu && (
                <div className="sub-menu-panel">
                  <div className="row pl-5 pr-5 pb-3 pt-2">
                    {submenu.map(({ label, menuItems }, index) => {
                      return (
                        <div className="col-md-6" key={index}>
                          <p className="text-left font-weight-bold">{label}</p>
                          {menuItems.map(({ item }, index) => {
                            return (
                              <a href="/" className="d-block text-left" key={index}>
                                {item}
                              </a>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropDownMenu;
