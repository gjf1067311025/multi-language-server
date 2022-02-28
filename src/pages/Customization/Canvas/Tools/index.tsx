import { Divider, Tabs } from '@arco-design/web-react';
import React from 'react';
import styled from 'styled-components';
import ContentList from './ContentList';
import SingleTool from './SingleTool';

const { TabPane } = Tabs;

const StyledTabs = styled(Tabs)`
  height: 450px;
  .arco-tabs-header-nav-line.arco-tabs-header-nav-vertical
    .arco-tabs-header-title {
    padding: 10px 15px;
    /* border: 1px solid #000000; */
    margin-top: 0px;
  }
  .arco-tabs-content-vertical {
    padding-left: 8px;
    /* padding-right: 10px; */
  }
`;

const StyledTabs2 = styled(Tabs)`
  height: 250px;
  .arco-tabs-header-nav-line.arco-tabs-header-nav-vertical
    .arco-tabs-header-title {
    padding: 10px 15px;
    /* border: 1px solid #000000; */
    margin-top: 0px;
  }
  .arco-tabs-content-vertical {
    padding-left: 0px;
    /* padding-right: 10px; */
  }
`;

const Tools = ({
  contentList,
  setContentList,
  selectedKey,
  setSelectedKey,
  // setRefresh,
  setSelectedIndex,
}: {
  contentList: any;
  setContentList: any;
  selectedKey: any;
  setSelectedKey: any;
  // setRefresh: any;
  setSelectedIndex: any;
}) => {
  return (
    <>
      <div style={{ padding: '10px 15px' }}>组件库</div>
      <Divider style={{ margin: 0 }} />
      <StyledTabs key="line" tabPosition="left" lazyload={false}>
        <TabPane key="1" title="基础">
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <SingleTool
              contentList={contentList}
              setContentList={setContentList}
              setSelectedKey={setSelectedKey}
              setSelectedIndex={setSelectedIndex}
            />
          </div>
        </TabPane>
        <TabPane key="2" title="组合">
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            Content of Tab Panel 2
          </div>
        </TabPane>
      </StyledTabs>
      <Divider style={{ margin: 0 }} />
      <StyledTabs2 key="line" tabPosition="left" lazyload={false}>
        <TabPane key="3" title="页面">
          <div
            style={{
              height: '250px',
              overflow: 'auto',
            }}>
            <ContentList
              contentList={contentList}
              selectedKey={selectedKey}
              setSelectedKey={setSelectedKey}
            />
          </div>
        </TabPane>
      </StyledTabs2>
    </>
  );
};

export default Tools;
