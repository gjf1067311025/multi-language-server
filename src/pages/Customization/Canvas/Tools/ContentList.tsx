import { Menu } from '@arco-design/web-react';
import React from 'react';
import styled from 'styled-components';

const MenuItem = Menu.Item;

const StyledMenu = styled(Menu)`
  .arco-menu-inner {
    padding: 0;
  }
  .arco-menu-item {
    margin: 0;
  }
`;

const ContentList = ({
  contentList,
  selectedKey,
  setSelectedKey,
}: {
  contentList: any[];
  selectedKey: any;
  setSelectedKey: any;
}) => {
  return (
    <>
      <StyledMenu
        mode="vertical"
        selectedKeys={[selectedKey]}
        onClickMenuItem={(key: any) => {
          setSelectedKey(key);
        }}>
        {[...contentList]?.reverse().map((val: any, index: any) => {
          return (
            <MenuItem key={val?.key} style={{ textAlign: 'left' }}>
              图层{contentList?.length - index} : {val?.config?.name}
            </MenuItem>
          );
        })}
      </StyledMenu>
    </>
  );
};

export default ContentList;
