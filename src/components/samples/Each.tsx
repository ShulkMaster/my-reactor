import {AppSample} from 'app.sample';
import {cloneDeepWith} from 'lodash';
import {Highlight} from 'components/Highlight';
import {Card, Typography, Divider, InputNumber, List} from 'antd';
import React, {useState, FC, Children, ReactNode} from 'react';

export const Each = () => {
  const [count, setCount] = useState(3);
  const children: JSX.Element[] = [];
  for (let x = 0; x < count; x++) {
    children.push(
      <Card
        hoverable
        style={{width: 240}}
        key={x}
      >
        <Card.Meta title="Europe Street beat" description="www.instagram.com"/>
        <Card.Meta description={`Child ${x + 1}`}/>
      </Card>,
    );
  }
  return (
    <Card>
      <Typography.Title level={2}>For Each</Typography.Title>
      <label>
        <p>Amount</p>
        <InputNumber value={count} onChange={setCount} min={0} max={12}/>
      </label>
      <Typography.Title level={3}>Adding Dividers</Typography.Title>
      <AddDivider children={children}/>
      <Highlight code={AppSample.each1}/>
      <Typography.Title level={3}>Inspecting children</Typography.Title>
      <Highlight code={AppSample.each2}/>
      <Inspect children={children}/>
    </Card>
  );
};

export const AddDivider: FC = ({children}) => {
  const separateChildren: ReactNode[] = [];
  Children.forEach(children, child => {
    separateChildren.push(child);
    separateChildren.push(<Divider/>);
  });

  return (
    <div>
      <Typography.Title level={4}>Before</Typography.Title>
      {children}
      <Typography.Title level={4}>After</Typography.Title>
      {separateChildren}
    </div>
  );
};

export const Inspect: FC = ({children}) => {
  const items: string[] = [];
  Children.forEach(children, child => {
    if (!child) return;
    if (typeof child === 'object' && 'props' in child) {
      const clone = cloneDeepWith(child.props, (value) => {
        return value.children.map(c => ({...c, _owner: null}));
      });
      const output = JSON.stringify(clone, null, 2);
      items.push(output);
    }
  });
  return (
    <List>
      {items.map((code, index) => (
        <List.Item key={index}>
          <Highlight code={code}/>
        </List.Item>
      ))}
    </List>
  );
};
