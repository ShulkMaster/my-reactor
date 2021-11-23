import {Card, Typography} from 'antd';
import {useState} from 'react';

export const Each = () => {
  const [show, setShow] = useState(true);
  return (
    <Card>
      <Typography.Title level={2}>For Each</Typography.Title>
    </Card>
  );
};
