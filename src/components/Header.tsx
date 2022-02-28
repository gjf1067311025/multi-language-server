import { Avatar, Dropdown, Layout, Menu } from 'antd';
import { TranslationOutlined } from '@ant-design/icons';
import React from 'react';
// import i18n, { useTranslation } from '@jupiter-app/plugin-i18n';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import globalVars from '../globalVars';
import  T  from '../apis/translate';
// import { GetUserInfo } from '@/apis';

const StyledHeader = styled(Layout.Header)`
  position: fixed;
  width: 100%;
  height: 48px;
  top: 0;
  left: 0;
  z-index: 999;
  background: #1b1b1b;
  margin: 0px 0px;
  padding: 0px 0px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  white-space: nowrap;
  line-height: 48px;
  margin-left: 40px;
  color: #f4f5f8;
  z-index: 999;
  cursor: pointer;
`;

const ControllerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  top: 0px;
  height: 48px;
`;

const HederItem = styled.div`
  margin-right: 25px;
  cursor: pointer;
  color: #a9aeb8;
  font-size: 18px;
`;

const DarkMenu = styled(Menu)`
  background-color: #292f40;
  overflow: hidden;
`;
const DarkMenuItem = styled(Menu.Item)`
  background-color: #292f40;
  color: #eee;
  transition: all 1s;
  overflow: hidden;
  margin: 0 3px;

  &:hover {
    transform: scale(1.05);
  }
`;

const Header = () => {
  const history = useHistory();
  // const [userInfo, setUserInfo] = useState<any>();

  // useEffect(() => {
  //   const getUserInfo = async () => {
  //     const res = await GetUserInfo();
  //     setUserInfo(res?.data);
  //     globalVars.username = res?.data.email;
  //   };
  //   getUserInfo();
  // }, []);

  const doChangeLang = async (locale: string) => {
    globalVars.locale = locale;
    localStorage.setItem('lang',locale);
    window.location.reload();
  };

  return (
    <StyledHeader>
      <HeaderWrapper>
        <Title
        onClick={() => {
        history.push('/home');
        }}>
          {T('const_personalizedService')}
        {/* 111 */}
        </Title>
      </HeaderWrapper>
      <ControllerWrapper>
      <HederItem>
        <Dropdown
          overlay={
            <DarkMenu>
              <DarkMenuItem
                key="1"
                onClick={() => {
                doChangeLang('zh');
              }}>
                中文
              </DarkMenuItem>
              <DarkMenuItem
                key="2"
                onClick={() => {
                doChangeLang('en');
                }}>
                English
              </DarkMenuItem>
            </DarkMenu>
          }
          placement="bottomCenter"
        >
          <TranslationOutlined />
        </Dropdown>
        </HederItem>
      </ControllerWrapper>
    </StyledHeader>
  );
};

export default Header;