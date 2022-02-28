import { Card, Grid, Image, Skeleton } from '@arco-design/web-react';
import React from 'react';
// import styled from 'styled-components';
// import avatarDef from '@/icons/default_picture.png';
// import qrCodeImg from '@/icons/qr_code.png';
import './index.css';

const { Row, Col } = Grid;

const SingleTool = ({
  contentList,
  setContentList,
  setSelectedKey,
  setSelectedIndex,
}: {
  contentList: any[];
  setContentList: any;
  setSelectedKey: any;
  setSelectedIndex: any;
}) => {
  const getCard = (innerValue: any, title: any, name: any) => {
    return (
      <Card
        onClick={() => {
          const timeKey = new Date().getTime().toString();
          contentList.push({
            key: `gaoUnique${timeKey}`,
            config: {
              type: name,
              name,
              text: name,
              width: '100px',
              height: '100px',
              top: '0px',
              left: '0px',
              right: 'unset',
              bottom: 'unset',
              style: {
                fontSize: 14,
                lineHeight: 1,
              },
            },
          });
          setSelectedKey(`gaoUnique${timeKey}`);
          setSelectedIndex(contentList?.length - 1);
          setContentList([...contentList]);
        }}
        style={{ width: '80%', margin: 10, cursor: 'pointer', height: 150 }}
        className="card-custom-hover-style"
        hoverable={true}>
        <div style={{ height: '100px' }}>{innerValue}</div>
        <div style={{ marginTop: 5 }}>{title}</div>
      </Card>
    );
  };
  return (
    <Row>
      <Col span={12}>
        {/* {getCard(
          <Image
            src={avatarDef}
            preview={false}
            simple={true}
            draggable={false}
          />,
          '图片',
          'image',
        )} */}
        {getCard(
          "111",
          '二维码',
          'qrCode',
        )}
      </Col>
      <Col span={12}>{getCard(<Skeleton />, '文字', 'text')}</Col>
      <Col span={12}>
        {/* {getCard(
          <Image
            src={qrCodeImg}
            preview={false}
            simple={true}
            draggable={false}
          />,
          '二维码',
          'qrCode',
        )} */}
        {getCard(
          "111",
          '二维码',
          'qrCode',
        )}
      </Col>
    </Row>
  );
};

export default SingleTool;
