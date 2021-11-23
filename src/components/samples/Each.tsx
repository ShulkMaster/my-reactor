import {AppSample} from 'app.sample';
import {Highlight} from 'components/Highlight';
import {Card, Typography, Divider, InputNumber} from 'antd';
import {useState, FC, Children, ReactNode} from 'react';

export const Each = () => {
  const [count, setCount] = useState(3);
  const children: JSX.Element[] = [];
  for (let x = 0; x < count; x++) {
    children.push(
      <Card
        hoverable
        style={{width: 240}}
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
