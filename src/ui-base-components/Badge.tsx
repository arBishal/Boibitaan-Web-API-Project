import { ClockCircleOutlined } from '@ant-design/icons';
import { Badge as AntdBadge } from 'antd';
import React, { PropsWithChildren } from 'react';

const Badge = ({count, children}) => (
  <>
    <AntdBadge count={count}>
      {children}
    </AntdBadge>
  </>
);

export default Badge;