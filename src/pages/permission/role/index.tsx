import React, { useEffect, useRef, useState } from 'react';
import { IconArrowRise, IconArrowFall } from '@arco-design/web-react/icon';
import { IconUser } from '@arco-design/web-react/icon';
import {
  Typography,
  Grid,
  Link,
  Result,
  Skeleton,
  Avatar,
  Space,
  Statistic
} from '@arco-design/web-react';
const { Row, Col } = Grid;
const { Text } = Typography;

const App = () => {
  return (
    <div>
    <Row gutter={16}>
      <Col span={16}>
        <Statistic title='Downloads' value={125670} groupSeparator style={{ marginRight: 60 }} />
        <Statistic extra='Comments' value={40509} groupSeparator precision={2} />
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={16}>
        <Statistic
          title='New Users'
          value={192393}
          suffix={<IconArrowRise style={{ color: '#ee4d38' }} />}
          style={{ marginRight: 60, marginBottom: 20 }}
        />
        <Statistic
          title='Active Users'
          value={934230}
          suffix={<IconArrowFall style={{ color: '#0fbf60' }} />}
          style={{ marginRight: 60, marginBottom: 20 }}
        />
        <Statistic
          title='User Growth Rate'
          value={50.32}
          precision={2}
          prefix={<IconArrowRise style={{ color: '#ee4d38' }} />}
          suffix='%'
          styleValue={{ color: '#ee4d38' }}
          style={{ marginRight: 60, marginBottom: 20 }}
        />
      </Col>
      <Col span={16}>
      <Space size='large'>
        <Avatar>A</Avatar>
        <Avatar style={{ backgroundColor: '#3370ff' }}>
          <IconUser />
        </Avatar>
        <Avatar style={{ backgroundColor: '#14a9f8' }}>
          Arco
        </Avatar>
        <Avatar style={{ backgroundColor: '#00d0b6' }}>
          Design
        </Avatar>
        <Avatar>
          <img
            alt='avatar'
            src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'
          />
        </Avatar>
      </Space>
      </Col>
    </Row>
    </div>
  );
};

export default App;
