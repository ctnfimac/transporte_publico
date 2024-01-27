
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React from "react";
import Mapa from './Mapa';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmojiTransportation } from "react-icons/md";


const Toogle = () => {
const [toggled, setToggled] = React.useState(false);
  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '400px'}}>
    <Sidebar className="sidebar" onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
      <Menu>
        <MenuItem className="titulo" disabled>Transporte</MenuItem>
        <MenuItem disabled></MenuItem>
        <SubMenu label="Colectivos" icon={<MdEmojiTransportation className="colectivo-icon" onClick={() => setToggled(!toggled)} />} >
          <MenuItem className="linea">46</MenuItem>
          <MenuItem className="linea">47</MenuItem>
          <MenuItem className="linea">174</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
    <main>
      {/* <div> */}
      <GiHamburgerMenu className="sb-button" onClick={() => setToggled(!toggled)} />
      {/* </div> */}
      <Mapa />
    </main>
  </div>

  );
};

export default Toogle ;


