
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React from "react";
import Mapa from './Mapa';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmojiTransportation } from "react-icons/md";


const Collapsed = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
    <Sidebar collapsed={collapsed}>
      <Menu>
        {/* <button className="sb-button" onClick={() => setCollapsed(!collapsed)}> */}
        <MenuItem>
            <GiHamburgerMenu className="sb-button" onClick={() => setCollapsed(!collapsed)} />
        </MenuItem>
        {/* </button> */}
        <MenuItem> 
            {/* <MdEmojiTransportation /> */}
        </MenuItem>

        <SubMenu label="Colectivos" icon={<MdEmojiTransportation className="colectivo-icon" onClick={() => setCollapsed(!collapsed)} />} >
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        {/* <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem> */}
      </Menu>
    </Sidebar>
    <main>
      {/* <div>
        <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
          Collapse
        </button>
      </div> */}
      <Mapa />
    </main>
  </div>

  );
};

export default Collapsed ;


