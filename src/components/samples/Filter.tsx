export const Filter = () => {
  const [count, setCount] = useState(5);
  const children: JSX.Element[] = [];
  for (let x = 0; x < count; x++) {
    children.push(
      <List.Item>
        <AndroidOutlined/> Android {x + 1}
      </List.Item>,
    );
  }
  return (
    <Card>
      <Typography.Title level={3}>Filtering odd children</Typography.Title>
      <label>
        <p>Amount</p>
        <InputNumber value={count} onChange={setCount} min={0} max={10}/>
      </label>
      <FilterEach>{children}</FilterEach>
    </Card>
  );
};
import {AndroidOutlined} from '@ant-design/icons';
import {FC, ReactNode, Children, useState} from 'react';

import {Typography, List, InputNumber, Card} from 'antd';


export const FilterEach: FC = ({children}) => {
  const filtered: ReactNode[] = [];
  Children.forEach(children, (child, index) => {
    if (index % 2 === 0) {
      filtered.push(child);
    }
  });
  return (
    <div>
      <Typography.Title level={4}>Before</Typography.Title>
      <List>{children}</List>
      <Typography.Title level={4}>After</Typography.Title>
      <List>{filtered}</List>
    </div>
  );
};
