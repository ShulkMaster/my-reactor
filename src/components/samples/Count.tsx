import {Highlight} from 'components/Highlight';
import {Card, Typography, Alert, InputNumber} from 'antd';
import {useState, FC, Children, CSSProperties} from 'react';
import {AppSample} from '../../app.sample';

export const Count = () => {
  const [count, setCount] = useState(0);

  const children: JSX.Element[] = [];
  for (let x = 0; x < count; x++) {
    children.push(<Alert type="info" message={`This is the children ${x + 1}`}/>);
  }

  return (
    <Card>
      <Typography.Title level={2}>Counting Children</Typography.Title>
      <label>
        <p>Amount</p>
        <InputNumber value={count} onChange={setCount} min={0} max={15}/>
      </label>
      <Highlight code={AppSample.count1} />
      <CounterChild>{children}</CounterChild>
      <Highlight code={AppSample.count2} />
      <AlterChild children={children}/>
    </Card>
  );
};

const CounterChild: FC = ({children}) => {
  const numberOfChildren = Children.count(children);
  return (
    <>
      <Typography.Title level={3}>Number of children {numberOfChildren}</Typography.Title>
      {children}
    </>
  );
};

const AlterChild: FC = ({children}) => {
  const isOdd = Children.count(children) % 2 === 0;
  const style: CSSProperties = {
    width: 80,
    height: 80,
    background: isOdd ? '#dff' : '#fdd',
    textAlign: 'center',
    lineHeight: 6,
  };

  return (
    <>
      <Typography.Title level={3}>Blue if children amount is odd</Typography.Title>
      <div style={style}>
        {Children.count(children)}
      </div>
    </>
  );
};
