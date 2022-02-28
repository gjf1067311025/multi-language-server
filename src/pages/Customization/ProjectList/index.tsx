import { Button, Card, Divider, Grid, Image } from '@arco-design/web-react';
import React, { FC, useState } from 'react';
// import avatarDef from '@/icons/default_picture.png';
import { useHistory } from 'react-router-dom';
import PreConfigModal from './PreConfigModal';

const { Row, Col } = Grid;

const ProjectList: FC = () => {
  const history = useHistory();
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <PreConfigModal visible={visible} setVisible={setVisible} />
      <div style={{ background: '#F2F2F2', height: '780px' }}>
        <Row>
          <Col span={2} offset={22}>
            <Button type="text" style={{ marginTop: 20 }}>
              管理字体库
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Card
              style={{ height: '250px', margin: 20, cursor: 'pointer' }}
              onClick={() => {
                setVisible(true);
              }}>
              <div
                style={{
                  width: '100%',
                  textAlign: 'center',
                }}>
                新建
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ height: '250px', margin: 20 }}>
              <div
                style={{ textAlign: 'center', cursor: 'pointer' }}
                onClick={() => {
                  history.push('/customization/canvas');
                }}>
                {/* <Image
                  src={avatarDef}
                  preview={false}
                  simple={true}
                  draggable={false}
                /> */}
                111
              </div>
              <Divider style={{ margin: 0 }} />
              <div style={{ textAlign: 'center' }}>
                <Button type="text">设置</Button>
                <Button type="text">发布</Button>
                <Button type="text" status="danger">
                  删除
                </Button>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ height: '250px', margin: 20 }}>
              <div
                style={{ textAlign: 'center', cursor: 'pointer' }}
                onClick={() => {
                  history.push('/customization/canvas');
                }}>
                {/* <Image
                  src={avatarDef}
                  preview={false}
                  simple={true}
                  draggable={false}
                /> */}
                222
              </div>
              <Divider style={{ margin: 0 }} />
              <div style={{ textAlign: 'center' }}>
                <Button type="text">设置</Button>
                <Button type="text">发布</Button>
                <Button type="text" status="danger">
                  删除
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProjectList;
