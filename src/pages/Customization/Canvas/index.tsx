import { Button, Grid, Select } from '@arco-design/web-react';
import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import Config from './Config';
import { canvansList } from './constant';
import Contents from './Contents';
import Tools from './Tools';

const StyledSelect = styled(Select)`
  .arco-select-view {
    background: white;
  }
  .arco-menu-item {
    margin: 0;
  }
`;

const { Row, Col } = Grid;
const { Option } = Select;

const Canvas: FC = () => {
  const history = useHistory();

  const [contentList, setContentList] = useState<any[]>([]);
  const [selectedKey, setSelectedKey] = useState<any>();
  const [selectedIndex, setSelectedIndex] = useState<any>();
  const [canvasSrc, setCanvasSrc] = useState<any>();
  const [canvasStyle, setCanvasStyle] = useState<any>({
    width: '100%',
    height: '100%',
  });

  const DPR = () => {
    if (window.devicePixelRatio && window.devicePixelRatio > 1) {
      return window.devicePixelRatio;
    } else {
      return 1;
    }
  };
  const parseValue = (value: any) => {
    return parseInt(value, 10);
  };

  const drawCanvas = () => {
    const dom = document.getElementById('father');
    // const dom = document.querySelector('printHtml');
    if (dom) {
      const box = window.getComputedStyle(dom);
      // DOM 节点计算后宽高
      const width = parseValue(box.width);
      const height = parseValue(box.height);
      // 获取像素比-防止模糊
      const scaleBy = DPR();
      // 创建自定义 canvas 元素
      const canvas = document.createElement('canvas');

      // 设定 canvas 元素属性宽高为 DOM 节点宽高 * 像素比
      canvas.width = width * scaleBy;
      canvas.height = height * scaleBy;
      // 设定 canvas css宽高为 DOM 节点宽高
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      // 获取画笔
      const context = canvas.getContext('2d');

      if (context) {
        // 将所有绘制内容放大像素比倍
        context.scale(scaleBy, scaleBy);

        // 将自定义 canvas 作为配置项传入，开始绘制
        return html2canvas(dom, { canvas }).then((canvasAll: any) => {
          // document.querySelector("#canvasContainer").appendChild(canvas);
          // return canvas.toDataURL("image/png");
          console.log(canvasAll.toDataURL('image/png'));
          setCanvasSrc(canvasAll.toDataURL('image/png'));
          return canvasAll.toDataURL('image/png');
        });
      }
    }
  };

  useEffect(() => {
    console.log(selectedKey);
    const ind = contentList?.findIndex((val: any) => {
      return val?.key === selectedKey;
    });
    setSelectedIndex(ind);
  }, [selectedKey]);

  return (
    <div style={{ background: '#F2F2F2', height: '700px' }}>
      <Row>
        <Col span={7}>
          <div
            style={{
              background: '#ffffff',
              height: '700px',
              margin: 40,
            }}>
            <Tools
              contentList={contentList}
              setContentList={setContentList}
              selectedKey={selectedKey}
              setSelectedKey={setSelectedKey}
              // setRefresh={setRefresh}
              setSelectedIndex={setSelectedIndex}
            />
          </div>
        </Col>
        <Col span={10}>
          <div
            style={{
              height: '700px',
              margin: '40px 10px',
            }}>
            <Contents
              contentList={contentList}
              setContentList={setContentList}
              selectedKey={selectedKey}
              setSelectedKey={setSelectedKey}
              canvasStyle={canvasStyle}
            />
          </div>
        </Col>
        <Col span={7}>
          <div
            style={{
              margin: 40,
              marginTop: 20,
              marginBottom: 20,
            }}>
            <StyledSelect
              placeholder="请选择画布大小"
              onChange={(val: any) => {
                setCanvasStyle(val);
              }}
              triggerProps={{
                autoAlignPopupWidth: true,
              }}>
              {canvansList.map((val: any) => (
                <Option key={val?.label} value={val?.value}>
                  {val?.label}
                </Option>
              ))}
            </StyledSelect>
          </div>
          <div
            style={{
              background: '#ffffff',
              height: '600px',
              margin: 40,
              marginTop: 0,
            }}>
            <Config
              contentList={contentList}
              setContentList={setContentList}
              // selectedKey={selectedKey}
              // setSelectedKey={setSelectedKey}
              selectedIndex={selectedIndex}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <Button
              type="primary"
              status="success"
              style={{ marginRight: 20 }}
              onClick={() => {
                drawCanvas();
              }}
              size="large">
              保存
            </Button>

            {/* <Button type="primary" size="large">
              发布
            </Button> */}
          </div>
        </Col>
      </Row>
      <Row>
        <div style={{ textAlign: 'center', width: 200, background: 'black' }}>
          <img src={canvasSrc} width="100px" />
        </div>
      </Row>
    </div>
  );
};

export default Canvas;
