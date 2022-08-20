import { Rate } from 'antd';
import React, { useState } from 'react';

const desc = ['জঘন্য!', 'খারাপ!', 'ঠিকঠাক!', 'ভালো!', 'দারুণ!'];

const Rating: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <span>
      <Rate tooltips={desc} onChange={setValue} value={value} allowClear={true}  />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
  );
};

export default Rating;