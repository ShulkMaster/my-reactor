export const AppSample = {
  hide: `
import {Card, Checkbox} from 'antd';
import {useState, FC} from 'react';
export const Hide: FC = ({children}) => {
  const [show, setShow] = useState(true);
  return (
    <Card>
      <Card.Meta>
        <Checkbox checked={show} onChange={() => setShow(!show)}>Mostrar</Checkbox>
      </Card.Meta>
      {show && children}
    </Card>
  );
};`,
  count1: `
import {Typography} from 'antd';
import {FC, Children} from 'react';

const CounterChild: FC = ({children}) => {
  const numberOfChildren = Children.count(children);
  return (
    <>
      <Typography.Title level={3}>Number of children {numberOfChildren}</Typography.Title>
      {children}
    </>
  );
};`,
  count2: `
import {Typography} from 'antd';
import {FC, Children, CSSProperties} from 'react';

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
  `,
} as const;
