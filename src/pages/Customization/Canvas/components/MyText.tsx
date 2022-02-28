import React from 'react';
import { testSrc } from '../constant';
import './index.css';

const MyText = ({ config }: { config: any }) => {
  if (config?.text?.includes('&{') && config?.text?.includes('}&')) {
    let text = config?.text;
    let finalText = '';
    while (text?.includes('&{') && text?.includes('}&')) {
      finalText += text?.split('&{')?.[0];
      text = text?.slice(text?.indexOf('&{') + 2);
      finalText +=
        JSON.parse(JSON.stringify(testSrc))[`${text?.split('}&')?.[0]}`] ||
        text?.split('}&')?.[0];
      text = text?.slice(text?.indexOf('}&') + 2);
    }
    finalText += text;
    return (
      <div
        className="my-text"
        style={{ wordBreak: 'break-all', ...config?.style }}>
        {finalText}
      </div>
    );
  }
  return (
    <div
      className="my-text"
      style={{ wordBreak: 'break-all', ...config?.style }}>
      {config?.text}
    </div>
  );
};

export default MyText;
