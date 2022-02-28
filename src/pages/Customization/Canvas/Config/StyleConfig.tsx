// import { Input, Form } from '@arco-design/web-react';
import React from 'react';
import ImageStyle from '../components/ImageStyle';
import TextStyle from '../components/TextStyle';

// const FormItem = Form.Item;

const StyleConfig = ({
  // selectedKey,
  contentList,
  // setContentList,
  selectedIndex,
  form,
  onConfigChange,
}: {
  // selectedKey: any;
  contentList: any;
  // setContentList: any;
  selectedIndex: any;
  form: any;
  onConfigChange: any;
}) => {
  if (contentList[selectedIndex]?.config?.type === 'image') {
    return (
      <>
        <ImageStyle
          onConfigChange={onConfigChange}
          detail={contentList[selectedIndex]?.config}
        />
      </>
    );
  } else if (contentList[selectedIndex]?.config?.type === 'text') {
    return (
      <TextStyle
        onConfigChange={onConfigChange}
        form={form}
        detail={contentList[selectedIndex]?.config}
      />
    );
  } else {
    return null;
  }
};

export default StyleConfig;
