import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

const StyledMenu = styled(Menu)`
  position: fixed;
  top: 44px;
  left: 0;
  width: 120px;
  height: 400vh;
  z-index: 30;
`;

const MenuItem = Menu.Item;
const { SubMenu } = Menu;

const SideMenu = () => {
  const history = useHistory();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState<any>();
  // const [openKeys, setOpenKeys] = useState<any[]>([]);
  useEffect(() => {
    console.log(location);
    setSelectedKey(location?.pathname);
  }, [location]);
  
  return (
    <div>
      <StyledMenu
        theme="dark"
        mode="vertical"
        selectedKeys={[selectedKey]}
      >
        <MenuItem
          key="/multi-language/list"
          onClick={() => {
          history.push(`/multi-language/list`);
        }}>
          <div style={{textAlign:'center'}}>语言管理</div>
        </MenuItem>
        <MenuItem
          key="/customization/list"
          onClick={() => {
          history.push(`/customization/list`);
        }}>
          <div style={{textAlign:'center'}}>图文定制</div>
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default SideMenu;